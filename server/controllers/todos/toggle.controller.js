import { updateTodoCheck } from "../../query/Todos.js";

export const toggleTodo = async (req, res) => {
  const { id, complete } = req.body;

  console.log("id", id);
  console.log("complete", complete);

  if (!id) {
    return res.status(400).json({ message: "Please fill all fields" });
  }

  const rows = await updateTodoCheck(id, complete);

  if (rows.affectedRows === 1) {
    return res.status(201).json({ message: "Todo update" });
  } else {
    return res.status(400).json({ message: "Error" });
  }
};
