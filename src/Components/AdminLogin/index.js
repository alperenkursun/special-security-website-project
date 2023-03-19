import { LockIcon } from "@chakra-ui/icons";
import { Box, Button, Input, Stack } from "@chakra-ui/react";
import styles from "./styles.module.css";
import axios from "axios";
import { useState } from "react";
import { useLogin } from "../../contexts/LoginContext";

function AdminLogin() {
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [loginn, setLoginn] = useState(null);
  const [store, setStore] = useState(null);
  const { isLogin, setIsLogin } = useLogin();

  function componentDidMount() {
    storeCollector();
  }

  function login() {
    // setIsLogin(true);

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/login`, {
        name: name,
        password: password,
      })
      .then((response) => {
        localStorage.setItem(
          "login",
          JSON.stringify({
            loginn: true,
            token: response.data.token,
          })
        );

        window.location.replace(`${process.env.REACT_APP_CLIENT_URL}/admin`);
        storeCollector();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function storeCollector() {
    let store = JSON.parse(localStorage.getItem("login"));
    if (store && store.loginn) {
      setLoginn(true);
      setStore(store);
    }
  }
  return (
    <Box className={styles.mainpageContainer}>
      <LockIcon color="white" width="50px" height="50px" />
      <h1 className={styles.header}>YÖNETİCİ GİRİŞİ</h1>
      <Stack spacing={3} className={styles.login}>
        <Input
          name="name"
          placeholder="Kullanıcı Adı"
          size="md"
          color="black"
          bg="white"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <Input
          name="password"
          type="password"
          placeholder="Şifre"
          size="md"
          color="black"
          bg="white"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <Button
          size="md"
          width="236px"
          height="40px"
          border="2px"
          borderColor="white"
          color="black"
          bg="white"
          type="submit"
          onClick={login}
        >
          Giriş Yap
        </Button>
      </Stack>
    </Box>
  );
}

export default AdminLogin;
