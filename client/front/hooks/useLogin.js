import { useState } from "react";
import axios from "../axios/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthConstext } from "../context/AuthContext";

const useLogin = () => {
  //like set and get state
  const [loading, setLoading] = useState(false);

  const { setUsuario } = useAuthConstext();

  const login = async (email, password, navigation) => {
    setLoading(true);
    try {
      console.log("login");
      const response = await axios.post("/auth/login", {
        email: email,
        password: password,
      });

      const data = await response.data;

      await AsyncStorage.setItem("usuario", JSON.stringify(data.user));

      setUsuario(data.user);

      //alert("Sesión iniciada correctamente");
      navigation.navigate("ToDoList");
    } catch (error) {
      alert("Error al iniciar sesión");
      console.log("error: " + error.message);
    }
    setLoading(false);
  };

  return { login, loading };
};
export default useLogin;
