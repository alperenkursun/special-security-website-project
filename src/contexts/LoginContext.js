import { useState, createContext, useContext } from "react";

const LoginContext = createContext();

function LoginProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);

  const values = {
    isLogin,
    setIsLogin,
  };

  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  );
}

const useLogin = () => useContext(LoginContext);

export { LoginProvider, useLogin };
