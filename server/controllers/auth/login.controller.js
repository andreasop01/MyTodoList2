import { login } from "../../query/Registro.js";
import { getTodos } from "../../query/Todos.js";
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log("loginUser", email, password);

  if (!email || !password) {
    return res.status(400).json({ message: "Please fill all fields" });
  }

  const rows = await login(email, password);

  if (rows.length === 0) {
    return res.status(400).json({ message: "Error email or password" });
  }

  const todos = await getTodos(rows[0].id);

  const uniqueTodos = todos.filter(
    (todo, index, self) => index === self.findIndex((t) => t.id === todo.id)
  );

  return res.status(200).json({
    user: {
      id: rows[0].id,
      username: rows[0].username,
      email: rows[0].email,
      todos: uniqueTodos || [],
    },
  });
};
