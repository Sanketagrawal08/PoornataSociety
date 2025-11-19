import helpRequestModel from "../models/helpRequest.model";

export const addHelpRequest = async (req, res) => {
  try {
    const { name, email, category, message, location } = req.body;

    if (!name || !email || !category || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    const newRequest = await HelpRequest.create({
      name,
      email,
      category,
      message,
      location,
    });

    res.status(201).json({
      success: true,
      message: "Your request has been submitted!",
      data: newRequest,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

//get all help request
export const getHelpRequests = async (req, res) => {
  try {
    const requests = await HelpRequest.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: requests.length,
      data: requests,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
