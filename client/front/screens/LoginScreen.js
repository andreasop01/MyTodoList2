import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

//import Svg, { Path, Defs, ClipPath, Use, G, Circle } from "react-native-svg";
import ButtonSingIn from "../componentes/ButtonSingIn";
import { Image } from "react-native";
import React, { Component, useRef, useState } from "react";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.svg} source={require("../img/logo.png")} />

      <Text style={styles.titulo}>Iniciar Sesion</Text>
      <Text style={styles.subtitulo}>Inicia sesion en tu cuenta</Text>
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
          onPress={() => navigation.navigate("Registro")}
        >
          ¿No tienes cuenta? Registrate
        </Text>
      </TouchableOpacity>

      <ButtonSingIn navigation={navigation} email={email} password={password} />
    </View>
  );
};

export default LoginScreen;

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
    fontSize: 60,
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
