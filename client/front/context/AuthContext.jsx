import * as React from "react";

export const AuthContext = React.createContext({});
export const AuthConstextProvider = ({ children }) => {
  const [usuario, setUsuario] = React.useState({
    id: "",
    name: "",
    email: "",
    password: "",
    todos: [],
  });

  return (
    <AuthContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthConstext = () => {
  return React.useContext(AuthContext);
};
