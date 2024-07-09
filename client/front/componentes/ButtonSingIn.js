import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import useLogin from "../hooks/useLogin";

function ButtonSingIn({ navigation, email, password }) {
  const { login, loading } = useLogin();
  return (
    <TouchableOpacity style={styles.button}>
      <LinearGradient
        // Button Linear Gradient
        style={styles.button}
        colors={["purple", "black"]}
      >
        <Text
          style={styles.text}
          onPress={() => login(email, password, navigation)}
        >
          {loading ? "Cargando..." : "SING IN"}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

export default ButtonSingIn;

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
