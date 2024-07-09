import { createTodo } from "../../query/Todos.js";

export const createTask = async (req, res) => {
  const { title, user_id } = req.body;

  if (!title || !user_id) {
    return res.status(400).json({ message: "Please fill all fields" });
  }
  console.log("user_id", user_id);
  console.log("title", title);

  const todo = await createTodo(user_id, title);

  console.log("todo", todo);

  if (todo) {
    return res.status(201).send(todo);
  } else {
    return res.status(400).json({ message: "Error" });
  }
};
