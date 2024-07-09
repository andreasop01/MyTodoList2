import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./front/screens/LoginScreen";
import RegistroScreen from "./front/screens/RegistroScreen";
import ToDoList from "./front/screens/ToDoListScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import UsuarioScreen from "./front/screens/UsuarioScreen";
import { AuthConstextProvider } from "./front/context/AuthContext";
import { SocketProvider } from "./front/context/SocketContext";
import useListenTodos from "./front/hooks/useListenTodos";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AuthConstextProvider>
      <SocketProvider>
        <GestureHandlerRootView>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen
                name="Home"
                component={LoginScreen}
                options={{ title: "Home" }}
              />
              <Stack.Screen
                name="Registro"
                component={RegistroScreen}
                options={{ title: "Registro" }}
              />
              <Stack.Screen
                name="ToDoList"
                component={ToDoList}
                options={{ title: "ToDoList" }}
              />
              <Stack.Screen
                name="Usuario"
                component={UsuarioScreen}
                options={{ title: "Usuario" }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </GestureHandlerRootView>
      </SocketProvider>
    </AuthConstextProvider>
  );
};

export default App;
