import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import Svg, { Path, Defs, ClipPath, Use, G, Circle } from "react-native-svg";
import ButtonSingUp from "../componentes/ButtonSingUp";
import { Image } from "react-native";
import React, { Component, useRef, useState } from "react";

const RegistroScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image style={styles.svg} source={require("../img/logo.png")} />

      <Text style={styles.titulo}>Registrate</Text>
      <Text style={styles.subtitulo}>Crear nueva cuenta</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="email@hotmail.com"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity>
        <Text
          style={styles.subtitulo}
          onPress={() => navigation.navigate("Home")}
        >
          ¿Ya tienes cuenta? Inicia Sesion
        </Text>
      </TouchableOpacity>

      <ButtonSingUp
        navigation={navigation}
        username={username}
        email={email}
        password={password}
      />
    </View>
  );
};

export default RegistroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    margin: 0,
  },

  svg: {
    justifyContent: "flex-start",
    width: "100%",
    height: "30%",
    alignItems: "flex-start",
  },

  titulo: {
    fontSize: 70,
    color: "black",
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
  },

  subtitulo: {
    fontSize: 20,
    color: "gray",
    fontVariant: "bold",
  },

  textInput: {
    width: "80%",
    height: 50,
    borderRadius: 30,
    margin: 10,
    padding: 10,
    backgroundColor: "white",
  },
});
