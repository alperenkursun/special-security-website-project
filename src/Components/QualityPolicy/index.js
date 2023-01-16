import { Box } from "@chakra-ui/react";
import React from "react";
import styles from "./styles.module.css";

function CompanyProfile() {
  return (
    <Box className={styles.mainpageContainer}>
      <h6 className={styles.header}>KALİTE POLİTİKAMIZ</h6>
      {/* prettier-ignore */}

      <h1 className={styles.paragraph}>
        {"    "}Güvenlik alanında "en modern, en güçlü, en büyük, en kaliteli ve
        en güvenilir olma" vizyonu ile yola çıkan Körfez Özel Güvenlik
        şirketimiz, kalite yönetim sistemini sürekli iyileştirmekle yükümlüdür.
      </h1>
    </Box>
  );
}

export default CompanyProfile;
