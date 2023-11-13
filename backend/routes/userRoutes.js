import express from "express";
const router = express.Router();
import {
  userAuth,
  registerUser,
  logout,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.post("/auth", userAuth);
router.post("/", registerUser);
router.post("/logout", logout);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
