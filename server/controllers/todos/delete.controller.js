import {
  deleteShareTodoId,
  deleteTodoId,
  getSharedTodoByID,
  getTodoById,
} from "../../query/Todos.js";

export const deleteTodo = async (req, res) => {
  const { id, user_id } = req.params;

  console.log("user_id", user_id);

  if (!user_id) {
    return res.status(400).json({ message: "Please Login" });
  }

  if (!id) {
    return res.status(400).json({ message: "Please fill all fields" });
  }
  const todo = await getSharedTodoByID(id);
  console.log("todo", todo);
  if (todo[0] && todo[0].user_id != user_id) {
    console.log("no mio");
    return res.status(400).json({ message: "You can't delete a shared todo" });
  }

  const deleteShare = await deleteShareTodoId(id);
  const rows = await deleteTodoId(id);

  if (rows.affectedRows === 1) {
    return res.status(201).json({ message: "Todo deleted" });
  } else {
    return res.status(400).json({ message: "Error" });
  }
};
