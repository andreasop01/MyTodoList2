import { deleteUsuario } from "../../query/Registro.js";

export const deleteUser = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Please fill all fields" });
  }

  const rows = await deleteUsuario(email);

  if (rows.affectedRows === 1) {
    return res.status(201).json({ message: "User deleted" });
  } else {
    return res.status(400).json({ message: "Error" });
  }
};
