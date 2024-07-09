import { createUsuario } from "../../query/Registro.js";

//registro
export const register = async (req, res) => {
  const { username, email, password } = req.body;
  console.log("resgister");
  if (!username || !email || !password) {
    return res.status(400).json({ message: "Please fill all fields" });
  }

  const rows = await createUsuario(username, email, password);
  console.log(rows);
  if (rows.affectedRows === 1) {
    return res.status(201).json({ message: "User created" });
  } else {
    return res.status(400).json({ message: "Error" });
  }
};
