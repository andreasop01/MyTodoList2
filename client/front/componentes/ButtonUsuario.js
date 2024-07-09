import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const ButtonUsuario = ({ navigation }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <LinearGradient
        // Button Linear Gradient
        style={styles.button}
        colors={["purple", "black"]}
      >
        <Text
          onPress={() => {
            navigation.navigate("Usuario");
          }}
        >
          <AntDesign name="user" size={24} color="white" />
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ButtonUsuario;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "flex-end",
    width: "100%",
    marginLeft: 100,
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
