import { conexion } from "./ConexionDatabase.js";

// funcion que verifica el email y la contraseña de un usuario
export async function login(email, password) {
  const [rows] = await conexion.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password]
  );

  return rows;
}
//getUsuario("andrea.llovera2@hotmail.com", "admin2").then(console.log);

// funcion que crea un usuario
//TODO: revisar si se puede hacer con un solo parametro
export async function createUsuario(username, email, password) {
  const [rows] = await conexion.query(
    "INSERT INTO users (username,email, password) VALUES (?, ?,?)",
    [username, email, password]
  );

  return rows;
}

//createUsuario("Juan", "adminJuan@gmail.com", "123").then(console.log);

// funcion que verifica el email de un usuario
export async function getUsuarioEmail(email) {
  const [rows] = await conexion.query("SELECT * FROM users WHERE email = ?", [
    email,
  ]);

  return rows;
}

//deleteUsuario
export async function deleteUsuario(email) {
  const [rows] = await conexion.query("DELETE FROM users WHERE email = ?", [
    email,
  ]);

  //console.log(rows);
  return rows;
}
//deleteUsuario("test@test.com").then(console.log);
