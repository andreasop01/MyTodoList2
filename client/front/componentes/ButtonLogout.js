import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { useAuthConstext } from "../context/AuthContext";

const ButtonLogout = ({ navigation }) => {
  const { setUsuario } = useAuthConstext();
  return (
    <TouchableOpacity style={styles.container}>
      <LinearGradient
        // Button Linear Gradient
        style={styles.button}
        colors={["purple", "black"]}
      >
        <Text
          onPress={() => {
            setUsuario({
              id: "",
              username: "",
              email: "",
              password: "",
              todos: [],
            });
            navigation.navigate("Home");
          }}
        >
          <AntDesign name="logout" size={24} color="white" />
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ButtonLogout;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "flex-end",
    width: "100%",
  },
  text: {
    width: "80%",
    height: 50,
    textAlign: "center",
    color: "white",
    marginTop: 30,
    fontWeight: "bold",
  },

  button: {
    flexDirection: "row",
    width: 50,
    padding: 10,
    height: 50,
    margin: 0,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 80,
  },
});
