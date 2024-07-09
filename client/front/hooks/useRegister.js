import { useState } from "react";
import axios from "../axios/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useRegister = () => {
  const [loading, setLoading] = useState(false);

  const register = async (username, email, password, navigation) => {
    setLoading(true);
    console.log("username ", username);
    console.log("email ", email);
    console.log("pwd ", password);
    try {
      const response = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      console.log("rows");
      await response.data;
      navigation.navigate("Home");
      alert("Usuario Registrado");
    } catch (error) {
      console.log("Error al Registrarse", error.message);
      alert("Error al Registrarse", error.message);
    }

    setLoading(false);
  };

  return {
    loading,
    register,
  };
};

export default useRegister;
