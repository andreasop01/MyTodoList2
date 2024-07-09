import express from "express";
import { register } from "../controllers/auth/register.controller.js";
import { deleteUser } from "../controllers/auth/delete.controller.js";
import { loginUser } from "../controllers/auth/login.controller.js";
const router = express.Router();

//registro
router.post("/register", register);
//delete
router.delete("/delete", deleteUser);
//login
router.post("/login", loginUser);

export default router;
