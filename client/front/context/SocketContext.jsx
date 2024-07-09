import * as React from "react";
import io, { Socket } from "socket.io-client";
import { useAuthConstext } from "./AuthContext";

export const SocketContext = React.createContext({});

export const useSocketContext = () => {
  return React.useContext(SocketContext);
};
export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = React.useState(null);
  const { usuario } = useAuthConstext();
  React.useEffect(() => {
    console.log("socketContext");
    if (usuario.id) {
      const socket = io("http://192.168.1.16:3001", {
        query: { user_id: usuario.id },
      });
      setSocket(socket);

      return () => {
        socket.close();
      };
    } else {
      if (socket) {
        console.log("socket close", socket);
        socket.close();
        setSocket(null);
      }
    }
  }, [usuario.id]);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
