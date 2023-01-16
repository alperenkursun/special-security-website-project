import { Box } from "@chakra-ui/react";
import styles from "./styles.module.css";
import yenileme_genelge from "../../Documents/yenileme_genelge.doc";

function RenewalEducation() {
  return (
    <Box className={styles.mainpageContainer}>
      <h1 className={styles.header}>YENİLEME EĞİTİMİ</h1>
      {/* prettier-ignore */}

      <h3 className={styles.paragraph}>
        {"    "}5188 Sayılı yasa gereği Özel Güvenlik Kimlik Kartı süresi 5 yıldır.
      5 yıl sonra Özel Güvenlik Personeli yenileme eğitimine tabi tutulacaktır.

      </h3>
      <h4 className={styles.paragraph}>
        {"    "}
        İçişleri bakanlığının 16.06.2009 tarihinde yayınladığı genelgeye göre
        çalışma süreleri 2009 yılında dolan Özel Güvenlik Görevlileri yenileme
        eğitimlerine 2009 yılında başlayıp 2010 yılındada sınava girecekleridir.
        Yayınlanan genelge için
        <a
          download
          href={yenileme_genelge}
          style={{ color: "blue", textDecoration: "underline" }}
        >
          {" "}
          tıklayınız
        </a>
        .
      </h4>
    </Box>
  );
}

export default RenewalEducation;
