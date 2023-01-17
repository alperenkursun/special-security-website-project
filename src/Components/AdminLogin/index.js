import { LockIcon } from "@chakra-ui/icons";
import { Box, Button, Input, Stack } from "@chakra-ui/react";
import styles from "./styles.module.css";

function AdminLogin() {
  return (
    <Box className={styles.mainpageContainer}>
      <LockIcon color="white" width="50px" height="50px" />
      <h1 className={styles.header}>ADMİN GİRİŞİ</h1>

      <Stack spacing={3} className={styles.login}>
        <Input placeholder="Kullanıcı Adı" size="md" color="black" bg="white" />
        <Input
          type="password"
          placeholder="Şifre"
          size="md"
          color="black"
          bg="white"
        />
        <Button
          size="md"
          width="236px"
          height="40px"
          border="2px"
          borderColor="white"
          color="black"
          bg="white"
        >
          Giriş Yap
        </Button>
      </Stack>
    </Box>
  );
}

export default AdminLogin;
