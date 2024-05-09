import express from "express";
import { Register, Login } from "./userController.js";

const router = express.Router();

router.route("/register").post(Register);

router.route("/login").post(Login);

// router.post("/logout").post(Logout);

export default router;