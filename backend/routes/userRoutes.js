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

const userRouter = express.Router();

userRouter.post("/login", loginUser);
userRouter.route("/").get(getUsers).post(registerUser);
userRouter.post("/logout", logoutUser);
userRouter.route("/profile").get(getUserProfile).put(updateUserProfile);
userRouter.route("/:id").delete(deleteUser).get(getUserByID).put(updateUser);

export default userRouter;
