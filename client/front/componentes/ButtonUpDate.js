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
import axios from "../axios/axios";

function ButtonUpDate({ id, username, email, password, navigation }) {
  const upDate = async () => {
    try {
      const response = await axios.patch("/user", {
        id,
        username,
        email,
        password,
      });

      const data = await response.data;

      alert("Usuario actualizado");
    } catch (error) {
      alert("Error al actualizar usuario");
    }
  };

  return (
    <TouchableOpacity style={styles.button}>
      <LinearGradient
        // Button Linear Gradient
        style={styles.button}
        colors={["purple", "black"]}
      >
        <Text style={styles.text} onPress={() => upDate()}>
          ACTUALIZAR
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

export default ButtonUpDate;

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
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 30,
  },
});
