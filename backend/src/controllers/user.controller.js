import User from "../models/user.model.js";
import Otp from "../models/otpModel.js";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";

// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// });

const transporter = nodemailer.createTransport({
  service:"gmail",
  auth:{
    user: "u2414906@gmail.com",
    pass:"cpfh wxyu yjwa sxtu"
  }
})

function generateOtpString() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

async function sendOtpEmail(email, otp) {
  await transporter.sendMail({
   from: `"NoReply" u2414906@gmail.com`,
    to: email,
    subject: "Your OTP code",
    text: `Your OTP is ${otp}. It will expire in 2 minutes.`,
  });
}

// REGISTER
export const registerController = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    if (!name || !email) {
      return res.status(400).json({ success: false, message: "Name and email required" });
    }

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: "User already registered. Please use login.",
      });
    }

    const user = await User.create({ name, email, phone: phone || null });

    await Otp.deleteMany({ email });

    const otp = generateOtpString();
    const expiresAt = new Date(Date.now() + 2 * 60 * 1000);

    await Otp.create({
      userId: user._id,
      email,
      otp,
      purpose: "register",
      expiresAt,
    });

    await sendOtpEmail(email, otp);

    return res.status(200).json({
      success: true,
      message: "Registered. OTP sent.",
      userId: user._id,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

// LOGIN
export const loginController = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email)
      return res.status(400).json({ success: false, message: "Email required" });

    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ success: false, message: "User not found" });

    await Otp.deleteMany({ email });

    const otp = generateOtpString();
    const expiresAt = new Date(Date.now() + 2 * 60 * 1000);

    await Otp.create({
      userId: user._id,
      email,
      otp,
      purpose: "login",
      expiresAt,
    });

    await sendOtpEmail(email, otp);

    return res.status(200).json({
      success: true,
      message: "OTP sent",
      userId: user._id,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

export const verifyOtpController = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp)
      return res.status(400).json({ success: false, message: "Email and OTP required" });

    const otpDoc = await Otp.findOne({ email });
    if (!otpDoc)
      return res.status(400).json({ success: false, message: "OTP not found" });

    if (otpDoc.attempts >= 5) {
      await Otp.deleteOne({ _id: otpDoc._id });
      return res.status(429).json({
        success: false,
        message: "Too many wrong attempts. Request new OTP.",
      });
    }

    if (otpDoc.expiresAt < new Date()) {
      await Otp.deleteOne({ _id: otpDoc._id });
      return res.status(400).json({ success: false, message: "OTP expired" });
    }

    if (otpDoc.otp !== otp) {
      otpDoc.attempts += 1;
      await otpDoc.save();
      return res.status(400).json({
        success: false,
        message: `Invalid OTP. Attempts left: ${5 - otpDoc.attempts}`,
      });
    }

    const user = await User.findById(otpDoc.userId);
    if (!user) {
      await Otp.deleteOne({ _id: otpDoc._id });
      return res.status(400).json({ success: false, message: "User not found" });
    }

    if (otpDoc.purpose === "register") {
      user.isVerified = true;
      await user.save();
    }

    await Otp.deleteOne({ _id: otpDoc._id });

    // 🔥 ALWAYS GENERATE TOKEN (using "Sanket" key)
    const token = jwt.sign(
      { id: user._id, email: user.email },
      "Sanket",    // CUSTOM SIGNING KEY
      { expiresIn: "7d" }
    );

    return res.status(200).json({
      success: true,
      message: "OTP verified",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        isVerified: user.isVerified,
      },
      token,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
