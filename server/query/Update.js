import dotenv from "dotenv";
dotenv.config();
import { conexion } from "./ConexionDatabase.js";

//update usuario
export async function updateUsername(id, username) {
  const [rows] = await conexion.query(
    `UPDATE users SET username = ? WHERE id = ?`,
    [username, id]
  );

  return rows;
}

export async function updateEmail(id, email) {
  const [rows] = await conexion.query(
    `UPDATE users SET email = ? WHERE id = ?`,
    [email, id]
  );

  return rows;
}

export async function updatePassword(id, password) {
  const [rows] = await conexion.query(
    `UPDATE users SET password = ? WHERE id = ?`,
    [password, id]
  );

  return rows;
}
