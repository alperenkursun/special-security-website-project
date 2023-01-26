import { Box } from "@chakra-ui/react";
import React from "react";
import styles from "./styles.module.css";

function EducationStrategy() {
  return (
    <Box className={styles.mainpageContainer}>
      <h1 className={styles.header}>EĞİTİM STRATEJİMİZ</h1>
      {/* prettier-ignore */}
      <h1 className={styles.paragraph}>
        {"    "}Yeni yasal düzenlemeler göre kişi, Özel Güvenlik Temel Eğitimi almadan ve İç İşleri Bakanlığınca yapılan sınavda başarılı olmadan Özel Güvenlik görevlisi olarak çalışamaz ve çalıştırılamaz.
      </h1>
      <h1 className={styles.paragraph}>
        {"    "}Körfez Özel Güvenlik Eğitim kurumumuz 38 kişilik modern,
        Bilgisayarlı ve projeksiyonlu sınıflarımızda, sektörünün en güçlü
        eğitici kadrosuyla, Silahlı ve Silahsız Özel Güvenlik Elemanı
        yetiştirmektedir.
      </h1>
      <h2 className={styles.paragraph}>
        {"    "}Şirketimiz gerek hizmet öncesi kendi kurumumuzda gerekse hizmet
        verdiğimiz kurumun talepleri doğrultusunda hizmet içi eğitim de
        vermektedir.
      </h2>
    </Box>
  );
}

export default EducationStrategy;
