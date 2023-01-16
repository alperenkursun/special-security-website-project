import { Box } from "@chakra-ui/react";
import React from "react";
import styles from "./styles.module.css";

function MainText() {
  return (
    <Box className={styles.mainpageContainer}>
      <h1 className={styles.header}>
        Balıkesir Edremit'te Özel Güvenlik Eğitiminizin Profesyonel Yüzü Körfez
        Özel Güvenlik Kursu
      </h1>
      {/* prettier-ignore */}
      <h2 className={styles.paragraph}>
        {"    "}Körfez Özel Güvenlik Şirketimiz, 5188 sayılı kanun gereğince İç İşleri
        Bankalığı’ndan onaylı Faaliyet İzin Belgesini alarak Körfez Özel
        Güvenlik Şirketini İç İşleri Bankalığı’ndan onaylı Faaliyet izin
        belgesini alarak Körfez Özel Güvenlik Eğitim Kurumu’nu açmıştır.
      </h2>
      <h2 className={styles.paragraph}>
        {"    "}Şirketimiz, güvenlik konusunda birçok deneyim ve tecrübe sahibi
        uzman kadrosuyla, ülkemizdeki özel güvenlik sektörünün gelişimine
        katkıda bulunmayı amaçlamaktadır.Gizlilik ana ilkemiz olup, olay
        oluşmadan engellemek temel prensibimizdir.
      </h2>
      <h4 className={styles.paragraph}>
        {"    "}Gizlilik ana ilkemiz olup, olay oluşmadan engellemek temel
        prensibimizdir.
      </h4>
    </Box>
  );
}

export default MainText;
