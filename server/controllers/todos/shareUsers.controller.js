import { getSharedTodoByID, getUserByID } from "../../query/Todos.js";

export const shareUsers = async (req, res) => {
  const { id } = req.params;
  const todo = await getSharedTodoByID(id);
  const shared_with = [];

  todo.forEach(async (t) => {
    const user = await getUserByID(t.share_with);

    shared_with.push(user[0]);
  });

  const author = await getUserByID(todo[0].user_id);

  console.log("todo", todo);

  console.log("author", author);
  console.log("shared_with", shared_with);

  res.status(200).json({ author: author[0], shared_with });
};
