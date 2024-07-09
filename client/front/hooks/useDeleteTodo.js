import { useEffect, useState } from "react";
import axios from "../axios/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useDeleteTodo = () => {
  const [loading, setLoading] = useState(false);

  const deleteTodo = async (id, clearTodo, user_id) => {
    setLoading(true);
    try {
      console.log("user_id: " + user_id);
      const response = await axios.delete(`/todos/delete/${id}/${user_id}`);
      const data = await response.data;
      console.log(data);
      clearTodo(id);
      alert("Tarea eliminada correctamente");
    } catch (error) {
      alert("Error al eliminar tarea");
      console.log("error: " + error.message);
    }
    setLoading(false);
  };

  return { deleteTodo, loading };
};

export default useDeleteTodo;
