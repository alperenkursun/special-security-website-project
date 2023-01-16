import { Box } from "@chakra-ui/react";
import styles from "./styles.module.css";

function Contact() {
  return (
    <Box className={styles.mainpageContainer}>
      <h1 className={styles.header}>İLETİŞİM</h1>
      {/* prettier-ignore */}

      <div className={styles.paragraph}>
        {"    "}<b>Kurucu:</b>{" "}Ramazan Dereli
      </div>
      <div className={styles.paragraph}>
        {"    "}
        <b>Tel:</b> 0266 372 26 28
      </div>
      <div className={styles.paragraph}>
        {"    "}
        <b>Gsm:</b> 0532 721 93 70
      </div>
      <h6 className={styles.paragraph}>
        {"    "}
        <b>Adres:</b> Gazicelal Mah. Akçay Asfaltı Şentürkler Apt. No: 22/2
        Edremit/Balıkesir
      </h6>
      <h6 className={styles.paragraph}>
        {"    "}
        <b>E-mail:</b> korfezguvenlik_1@hotmail.com
      </h6>
    </Box>
  );
}

export default Contact;
