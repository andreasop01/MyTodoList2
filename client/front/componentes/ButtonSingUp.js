import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import useRegister from "../hooks/useRegister";

function ButtonSingUp({ username, email, password, navigation }) {
  const { register, loading } = useRegister();
  const handlerRegister = () => {
    if (!username || !email || !password) {
      alert("Complete los campos");
      return;
    }

    if (
      username.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      alert("Complete los campos");
      return;
    }
    register(username, email, password, navigation);
  };

  return (
    <TouchableOpacity style={styles.button}>
      <LinearGradient
        // Button Linear Gradient
        style={styles.button}
        colors={["purple", "black"]}
      >
        <Text style={styles.text} onPress={() => handlerRegister()}>
          {loading ? "Cargando..." : "SING UP"}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

export default ButtonSingUp;

const styles = StyleSheet.create({
  text: {
    width: "80%",
    height: 50,
    textAlign: "center",
    color: "white",
    marginTop: 30,
    fontWeight: "bold",
  },

  button: {
    width: "80%",
    height: 50,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
});
