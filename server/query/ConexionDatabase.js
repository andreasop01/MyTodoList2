import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

/*conexion a las base de tados */
export const conexion = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

// 1. Crear una función que retorne un todo por su id
export async function getTodoId(id) {
  const [rows] = await conexion.query("SELECT * FROM todos WHERE id= ?", [id]);

  return rows;
}

//getTodoId(1).then(console.log);

// 2. Crear una función que retorne todos los todos
export async function getTodos() {
  const [rows] = await conexion.query("SELECT * FROM todos");

  return rows;
}

// 3. Crear una función que cree un todo
export async function createTodo({ title, description, status = "pending" }) {
  const [rows] = await conexion.query(
    "INSERT INTO todos (title, description, status) VALUES (?, ?, ?)",
    [title, description, status]
  );

  return rows;
}
