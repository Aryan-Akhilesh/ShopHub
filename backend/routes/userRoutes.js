import express from "express";
import {
  loginUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserByID,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/loginMiddleware.js";

const userRouter = express.Router();

userRouter.post("/login", loginUser);
userRouter.route("/").get(protect, admin, getUsers).post(registerUser);
userRouter.post("/logout", logoutUser);
userRouter
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
userRouter
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserByID)
  .put(protect, admin, updateUser);

export default userRouter;
