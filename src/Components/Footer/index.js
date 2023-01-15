import React from "react";
import styles from "./styles.module.css";

function Footer() {
  return (
    <h1 className={styles.footer}>
      Balıkesir Edremit Körfez Özel Güvenlik Silahlı, Silahsız ve Yenileme Özel
      Güvenlik Eğitimi ve Kimlik Kartı işlemleri
      <span className={styles.footerCopyRight}>
        © Her Hakkı Saklıdır. Körfez Özel Güvenlik
      </span>
    </h1>
  );
}

export default Footer;
