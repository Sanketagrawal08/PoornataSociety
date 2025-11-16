import express from "express";
import {
  registerController,
  loginController,
  verifyOtpController,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/verify-otp", verifyOtpController);

export default router;
