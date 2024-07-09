import * as React from "react";
import { useAuthConstext } from "../context/AuthContext";
import { useSocketContext } from "../context/SocketContext";

const useListenTodos = () => {
  const { socket } = useSocketContext();
  const { setUsuario, usuario } = useAuthConstext();

  React.useEffect(() => {
    socket?.on("todo_shared", (data) => {
      setUsuario({ ...usuario, todos: [...usuario.todos, data] });
    });

    return () => {
      socket?.off("todo_shared");
    };
  }, [socket, setUsuario, usuario]);
};

export default useListenTodos;
