import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  StatusBar,
} from "react-native";
import { Image } from "react-native";
import ButtonSingUp from "../componentes/ButtonSingUp";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ButtonUpDate from "../componentes/ButtonUpDate";
import { useAuthConstext } from "../context/AuthContext";

const UsuarioScreen = ({ navigation }) => {
  const { usuario, setUsuario } = useAuthConstext();

  return (
    <View style={styles.container}>
      <Image style={styles.svg} source={require("../img/logo.png")} />

      <Text style={styles.titulo}>{usuario.username}</Text>

      <Text style={styles.subtitulo}>Usuario:</Text>

      <TextInput
        style={styles.textInput}
        placeholder={usuario.username}
        value={usuario.username}
        onChangeText={(text) => setUsuario({ ...usuario, username: text })}
      />

      <Text style={styles.subtitulo}>Email:</Text>
      <TextInput
        style={styles.textInput}
        placeholder={usuario.email}
        value={usuario.email}
        onChangeText={(text) => setUsuario({ ...usuario, email: text })}
      />

      <Text style={styles.subtitulo}>Password:</Text>
      <TextInput
        style={styles.textInput}
        placeholder={usuario.password}
        value={usuario.password}
        onChangeText={(text) => setUsuario({ ...usuario, password: text })}
      />

      <ButtonUpDate
        navigation={navigation}
        id={usuario.id}
        username={usuario.username}
        email={usuario.email}
        password={usuario.password}
      />
    </View>
  );
};
export default UsuarioScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
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
    textAlign: "center",
  },

  subtitulo: {
    fontSize: 20,
    color: "gray",
    fontVariant: "bold",
    alignContent: "left",
    marginLeft: 20,
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
