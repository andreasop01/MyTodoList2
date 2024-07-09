import express from "express";
import { deleteTodo } from "../controllers/todos/delete.controller.js";
import { toggleTodo } from "../controllers/todos/toggle.controller.js";
import { shareUsers } from "../controllers/todos/shareUsers.controller.js";
import { shareTodo } from "../controllers/todos/shareTodo.controller.js";
import { createTask } from "../controllers/todos/create.controller.js";

const router = express.Router();

router.delete("/delete/:id/:user_id", deleteTodo);
router.put("/toggle", toggleTodo);
router.get("/share/:id", shareUsers);
router.post("/share_todo", shareTodo);
router.post("/create", createTask);
export default router;
