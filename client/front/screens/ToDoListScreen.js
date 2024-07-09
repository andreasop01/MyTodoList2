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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import Task from "../componentes/Task";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import CreateTask from "../componentes/CrearTask";
import ButtonLogout from "../componentes/ButtonLogout";
import ButtonUsuario from "../componentes/ButtonUsuario";
import { useAuthConstext } from "../context/AuthContext";
import useListenTodos from "../hooks/useListenTodos";
import { useSocketContext } from "../context/SocketContext";

const ToDoList = ({ navigation }) => {
  const { usuario, setUsuario } = useAuthConstext();
  useListenTodos();

  const clearTodo = (id) => {
    setUsuario({
      ...usuario,
      todos: usuario.todos.filter((todo) => todo.id !== id),
    });
  };

  const toggleTodo = (id) => {
    /*setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, complete: todo.complete === 1 ? 0 : 1 }
          : todo
      )
    );*/

    setUsuario({
      ...usuario,
      todos: usuario.todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: todo.completed === 1 ? 0 : 1 }
          : todo
      ),
    });
  };

  return (
    <BottomSheetModalProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={usuario.todos}
          keyExtractor={(todos) => todos.id}
          renderItem={({ item }) => (
            <Task
              item={item}
              toggleTodo={toggleTodo}
              clearTodo={clearTodo}
              user_id={usuario.id}
            />
          )}
          ListHeaderComponent={() => (
            <View>
              <View style={styles.subtitulo}>
                <Text style={styles.text}> Mi tareas</Text>
                <ButtonUsuario navigation={navigation} />
                <ButtonLogout navigation={navigation} />
              </View>
            </View>
          )}
          contentContainerStyle={styles.contentContainer}
        />
        <CreateTask usuario={usuario} setUsuario={setUsuario} />
      </SafeAreaView>
      <StatusBar style="auto" />
    </BottomSheetModalProvider>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    margin: 0,
  },
  contentContainer: {
    padding: 15,
  },

  subtitulo: {
    flexDirection: "row",
    alignItems: "space-between",
    width: "auto",
    marginTop: 20,
    marginBottom: 10,
  },

  text: {
    fontWeight: "800",
    fontSize: 28,
  },
});
