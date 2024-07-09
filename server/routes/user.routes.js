import express from "express";
import { update } from "../controllers/user/update.controller.js";

const router = express.Router();

router.patch("/", update);

export default router;
