import { Box } from "@chakra-ui/react";
import styles from "./styles.module.css";
import silahsiz_egitim from "../../images/silahsiz_egitim.jpg";

function UnarmedEducation() {
  return (
    <Box className={styles.mainpageContainer}>
      <h1 className={styles.header}>SİLAHSIZ EĞİTİM</h1>
      {/* prettier-ignore */}
      <div className={styles.paragraph}>
        {"    "}
        <b>
        GENEL ŞARTLAR:
        </b>
      </div>
      <div className={styles.paragraph}>
        {"    "}
        <b>
          5188 Sayılı Özel Güvenlik Hizmetlerine Dair Kanun Madde 10 ve
          Yönetmelik Hükümleri Gereğince,
        </b>
      </div>
      <ol>
        <li className={styles.paragraph}>
          {"    "}Türkiye Cumhuriyeti vatandaşı olmak
        </li>
        <li className={styles.paragraph}>
          {"    "}En az sekiz yıllık ilköğretim veya ortaokul
        </li>
        <li className={styles.paragraph}>{"    "}18 yaşını doldurmuş olmak</li>
        <li className={styles.paragraph}>
          {"    "}Hakkında yapılacak güvenlik soruşturması olumlu sonuçlanmak.
          (Türk Ceza Kanununun 53 üncü maddesinde belirtilen süreler geçmiş olsa
          bile; kasten işlenen bir suçtan dolayı bir yıl veya daha fazla süreyle
          hapis cezasına ya da affa uğramış olsa bile devletin güvenliğine karşı
          suçlar, Anayasal düzene ve bu düzenin işleyişine karşı suçlar, cinsel
          dokunulmazlığa karşı suçlar, kamunun sağlığına karşı suçlar, zimmet,
          irtikâp, rüşvet, hırsızlık, dolandırıcılık, sahtecilik, güveni kötüye
          kullanma, hileli iflas, ihaleye fesat karıştırma, edimin ifasına fesat
          karıştırma, suçtan kaynaklanan malvarlığı değerlerini aklama,
          kaçakçılık veya fuhuş suçlarından mahkûm olmamak)
        </li>
        <li className={styles.paragraph}>
          {"    "}Görevin yapılmasına engel olabilecek vücut ve akıl hastalığı
          ile özürlü bulunmamak. (Silahlı olarak görev yapacaklar için tam
          teşekküllü devlet hastanelerinden alınacak “silahlı özel güvenlik
          görevlisi olur” veya “ateşli silah taşımasında ve bulundurmasında
          sakınca yoktur” ibareli rapor olacaktır. Sağlık Raporu şu muayeneleri
          içerecektir. Psikiyatri: Psikiyatrik bir hastalık veya kişilik
          bozukluğu (Psikopati); alkol ve uyuşturucu bağımlılığı olmamak.
          Nöroloji: Özel güvenlik hizmetini yerine getirmesine engel teşkil
          edebilecek nörolojik rahatsızlığı olmamak. Göz: Körlük, gece körlüğü
          veya renk körlüğü olmamak. Kulak Burun Boğaz (KBB): Özel güvenlik
          hizmetini yapmasını engel teşkil edebilecek işitme kaybı olmamak.
          Ortopedi: Kas veya iskelet sisteminde ileri derecede hareket kısıtlığı
          olmamak
        </li>
        <li className={styles.paragraph}>
          {"    "}Özel güvenlik temel eğitimini başarıyla tamamlamış olmak
        </li>
      </ol>
      <h3 className={styles.paragraph} style={{ fontWeight: "bold" }}>
        EĞİTİME KATILABİLMEK İÇİN GEREKLİ OLAN EVRAKLAR:
      </h3>
      <ul>
        <li className={styles.paragraph} style={{ fontWeight: "bold" }}>
          Nüfus cüzdan fotokopisi (3 adet)
        </li>
        <li className={styles.paragraph} style={{ fontWeight: "bold" }}>
          Diploma fotokopisi (2 adet)
        </li>
        <li className={styles.paragraph} style={{ fontWeight: "bold" }}>
          İkametgâh belgesi (2 adet)
        </li>
        <li className={styles.paragraph} style={{ fontWeight: "bold" }}>
          Vesikalık fotoğraf (6 adet)
        </li>
      </ul>
      <img src={silahsiz_egitim} alt="Silahlı Eğitim" />
    </Box>
  );
}

export default UnarmedEducation;
