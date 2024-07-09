import { useEffect, useState } from "react";
import { Keyboard, View, Text, StyleSheet, Button, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import axios from "../axios/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthConstext } from "../context/AuthContext";

const ShareTodo = ({ id, title }) => {
  const [email, setEmail] = useState("");
  const [focus, setFocus] = useState(false);
  const { usuario, setUsuario } = useAuthConstext();

  const handleSubmit = async () => {
    const response = await axios.post("todos/share_todo", {
      todo_id: id,
      email: email,
      user_id: usuario.id,
    });

    const data = await response.data;
    console.log(data);
    console.log(usuario.todos);
    const user = data.user;
    const newTodos = usuario.todos.map((todo) =>
      todo.id === id ? { ...todo, shared_with: 1 } : todo
    );
    setUsuario({ ...usuario, todos: newTodos });
    Keyboard.dismiss();
    setEmail("");
    setFocus(false);
    Alert.alert(
      "Congratulations 🎉",
      `You successfully shared ${title} with ${email}`,
      [{ text: "Okay" }]
    );
  };

  return (
    <View style={styles.contentContainer}>
      <Text style={[styles.title, { marginBottom: 20 }]}>Share your task</Text>
      <Text style={[styles.title, { marginBottom: 20 }]}>"{title}"</Text>
      <Text style={styles.description}>
        Enter the email of the user you want to share your task with. Share a
        task with someone and stay in sinc with your goals everyday.
      </Text>
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text.toLowerCase())}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        keyboardType="email-address"
        style={[
          styles.input,
          focus && { borderWidth: 3, borderColor: "black" },
        ]}
        placeholder="Enter your contact email"
      />
      <Button
        onPress={handleSubmit}
        title="Share"
        disabled={email.length === 0}
      />
    </View>
  );
};

export default ShareTodo;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  title: {
    fontWeight: "900",
    letterSpacing: 0.5,
    fontSize: 16,
    textAlign: "center",
  },
  description: {
    color: "#56636F",
    fontSize: 13,
    fontWeight: "normal",
    width: "100%",
  },
  input: {
    borderWidth: 2,
    borderColor: "#00000020",
    padding: 15,
    borderRadius: 15,
    marginVertical: 15,
  },
});
