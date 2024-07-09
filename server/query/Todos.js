import dotenv from "dotenv";
dotenv.config();
import { conexion } from "./ConexionDatabase.js";

// funcion get todos
export async function getTodos(id) {
  const [rows] = await conexion.query(
    "SELECT todos.* , compartir_todos.share_with FROM todos LEFT JOIN compartir_todos ON todos.id = compartir_todos.todo_id WHERE todos.user_id = ? OR compartir_todos.share_with = ?",
    [id, id]
  );
  return rows;
}

//getTodos("1").then(console.log);

/////
export async function getTodoById(id) {
  const [rows] = await conexion.query("SELECT * FROM todos WHERE id = ?", [id]);

  return rows[0];
}

//funcion para insertar un nuevo todo
export async function createTodo(userId, title) {
  const [rows] = await conexion.query(
    "INSERT INTO todos (user_id,title) VALUES (?, ?)",
    [userId, title]
  );

  const todoId = rows.insertId;
  return getTodoById(todoId);
}

//createTodo("1", "🛼Hacer bici").then(console.log);

//borrar un todo
export async function deleteTodoId(id) {
  const [rows] = await conexion.query("DELETE FROM todos WHERE id= ?", [id]);

  return rows;
}

//deleteTodoId("6").then(console.log);

//funcion para actializar el check de un todo
export async function updateTodoCheck(id, value) {
  const newValue = value === true ? "TRUE" : "FALSE";
  console.log(newValue);

  const [rows] = await conexion.query(
    `UPDATE todos SET completed = ${newValue} WHERE id = ?`,
    [id]
  );

  return rows;
}

//updateTodoCheck("1", true).then(console.log);

//funcion share todo
export async function shareTodoId(todoId, userId, shareId) {
  const [rows] = await conexion.query(
    "INSERT INTO compartir_todos (todo_id,user_id,share_with) VALUES (?, ?,?)",
    [todoId, userId, shareId]
  );

  return rows.insertId;
}

//shareTodoId("1", "1", "3").then(console.log);

export async function getSharedTodoByID(id) {
  const [rows] = await conexion.query(
    `SELECT * FROM compartir_todos WHERE todo_id = ?`,
    [id]
  );
  return rows;
}

export async function getUserByID(id) {
  const [rows] = await conexion.query(`SELECT * FROM users WHERE id = ?`, [id]);
  return rows;
}

export async function deleteShareTodoId(id) {
  const [rows] = await conexion.query(
    `DELETE FROM compartir_todos WHERE todo_id = ?`,
    [id]
  );
  return rows;
}

//getTodoSocket

export async function getTodoSocket(id) {
  const [rows] = await conexion.query(
    "SELECT todos.* , compartir_todos.share_with FROM todos LEFT JOIN compartir_todos ON todos.id = compartir_todos.todo_id WHERE todos.id= ? ",
    [id]
  );
  return rows[0];
}
