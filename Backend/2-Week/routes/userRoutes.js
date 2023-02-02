import express from "express";
import { getAllUsers, getSpecificUser, createUser, updateUser, updateUserFull, deleteUser } from "../controllers/usersControllers.js";

const userRouter = express.Router();

// CRUD Opearations

userRouter.route("/").get(getAllUsers).post(createUser);
userRouter.route("/:id").get(getSpecificUser).patch(updateUser).put(updateUserFull).delete(deleteUser);

export { userRouter };
