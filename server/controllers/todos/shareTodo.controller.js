import { getUsuarioEmail } from "../../query/Registro.js";
import { shareTodoId } from "../../query/Todos.js";
import { getReceiverSocketId, io } from "../../socket/socket.js";
import { getTodoSocket } from "../../query/Todos.js";

export const shareTodo = async (req, res) => {
  const { todo_id, user_id, email } = req.body;
  const share_with = await getUsuarioEmail(email);

  if (share_with.length === 0) {
    return res.status(404).json({ message: "User not found" });
  }

  const rows = await shareTodoId(todo_id, user_id, share_with[0].id);

  if (rows) {
    const receiverSocketId = getReceiverSocketId(share_with[0].id);
    console.log("receiverSocketId ", receiverSocketId);
    if (receiverSocketId) {
      const todo = await getTodoSocket(todo_id);
      console.log("shareTodo ", todo);
      io.to(receiverSocketId).emit("todo_shared", todo);
    }

    return res
      .status(200)
      .json({ message: "Todo shared successfully", user: share_with[0] });
  } else {
    return res.status(500).json({ message: "Error sharing todo" });
  }
};
