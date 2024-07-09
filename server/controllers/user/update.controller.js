import {
  updateEmail,
  updatePassword,
  updateUsername,
} from "../../query/Update.js";

export const update = async (req, res) => {
  const { id, username, email, password } = req.body;

  if (!id) {
    return res.status(400).json({ message: "id is required" });
  }

  if (username) {
    const rows = await updateUsername(id, username);

    if (rows.affectedRows == 0) {
      return res.status(400).json({ message: "Error updating username" });
    }
  }

  if (email) {
    const rows = await updateEmail(id, email);

    if (rows.affectedRows == 0) {
      return res.status(400).json({ message: "Error updating email" });
    }
  }

  if (password) {
    const rows = await updatePassword(id, password);

    if (rows.affectedRows == 0) {
      return res.status(400).json({ message: "Error updating password" });
    }
  }

  return res.status(200).json({ message: "User updated" });
};
