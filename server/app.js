import express from "express";
import authRouter from "./routes/auth.routes.js";
import todosRouter from "./routes/todos.routes.js";
import userRouter from "./routes/user.routes.js";
import { app, server } from "./socket/socket.js";

import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.send("Hello World");
  console.log("hellow world");
});

//prefijo
app.use("/auth", authRouter);
app.use("/todos", todosRouter);
app.use("/user", userRouter);

//acceder al localhost:3001
server.listen(3001, () => {
  console.log("Server running on port 3001");
});
