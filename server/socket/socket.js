import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const userSocketMap = {};

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

io.on("connection", (socket) => {
  const userId = socket.handshake.query.user_id;

  console.log("User connected: ", userId);

  if (userId) {
    userSocketMap[userId] = socket.id;
  }

  socket.on("disconnect", () => {
    console.log("User disconnected: ", userId);
    delete userSocketMap[userId];
  });
});

export { app, server, io };
