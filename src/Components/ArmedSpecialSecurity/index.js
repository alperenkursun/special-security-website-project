import { Box } from "@chakra-ui/react";
import il_emniyet_ust_yazi from "../../Documents/il_emniyet_ust_yazi.doc";
import il_jandarma_ust_yazi from "../../Documents/il_jandarma_ust_yazi.doc";
import guvenlik_sorusturma_formu from "../../Documents/guvenlik_sorusturma_formu.doc";
import styles from "./styles.module.css";

function ArmedSpecialSecurity() {
  return (
    <Box className={styles.mainpageContainer}>
      <h1 className={styles.header}>
        SİLAHLI ÖZEL GÜVENLİK KİMLİK KARTI İŞLEMLERİ
      </h1>
      {/* prettier-ignore */}
      <h1 className={styles.paragraph}>
    {"    "}<b>Özel Güvenlik Temel Eğitimi</b>'ni tamamlayıp T.C. İçişleri Bakanlığı Emniyet Genel Müdürlüğü Asayiş Dairesi Başkanlığı Özel Güvenlik Kurumları Şube Müdürlüğü tarafından gerçekleştirilen <b>özel güvenlik sınavında</b> başarılı olarak adına <b>Özel Güvenlik Eğitim Sertifikası</b> düzenlenmiş olan özel güvenlik görevlisi adayları <b>Özel Güvenlik Görevlisi Kimlik Kartı (Çalışma İzin Belgesi)</b> edindikten sonra, <b>özel güvenlik görevlisi</b> olarak çalışabilirler.
  </h1>
      <h2 className={styles.paragraph}>
        {"    "}
        <b>Özel Güvenlik Görevlisi Kimlik Kartı</b> başvurusu, resmi ikametgâhın
        bulunduğu ildeki İl Emniyet Müdürlüğü Özel Güvenlik Şube Müdürlüğü'ne
        (ikamet yeri Jandarma bölgesi ise İl Jandarma Komutanlığı’na)
        yapılacaktır.
      </h2>
      <h1 className={styles.paragraph}>
        {"    "}
        <b>
          SİLAHLI Özel Güvenlik Görevlisi Olacak Kişilerden Çalışma İzin Belgesi
          İçin İstenen Belgeler
        </b>
      </h1>
      <ul>
        <li className={styles.paragraph}>
          {"    "}1 adet Emniyet Müdürlüğüne hitaben yazılmış üst yazı (Jandarma
          Bölgesinde oturanlar için İl Jandarma Komutanlığına hitaben
          olacaktır.)
        </li>
        <li className={styles.paragraph}>
          {"    "}1 adet Diploma fotokopisi ASLI MUTLAKA YANINIZDA OLACAK
        </li>
        <li className={styles.paragraph}>
          {"    "}1 adet Nüfus cüzdanı fotokopisi
        </li>
        <li className={styles.paragraph}>
          {"    "}3 adet vesikalık fotoğraf (son 6 ay içinde çekilmiş olmak ve
          fotokopi olmamak)
        </li>
        <li className={styles.paragraph}>
          {"    "}2 adet İkâmetgâh ilmühaberi,BİR ASIL BİR FOTOKOPİ
        </li>
        <li className={styles.paragraph}>
          {"    "}2 adet Adli Sicil ve Arşiv Kaydı BİR ASIL BİR FOTOKOPİ(tarihi,
          başvurudan önce 6 ayı geçmemiş olmalı) (kaydı olanlar mahkeme kararını
          ekleyecek)
        </li>
        <li className={styles.paragraph}>
          {"    "}2 adet Güvenlik Soruşturması ve Arşiv Araştırması Formu
          (fotoğraf yapıştırılmış daktilo veya bilgisayarla kısaltma yapılmadan
          doldurulacaktır.)
        </li>
        <li className={styles.paragraph}>
          {"    "}Sağlık Raporu (Devlet hastanesinden alınan
          Psikiyatri-Psikopati, Nöroloji, Göz, KBB, Ortopedi, Dahiliye bölümleri
          mutlaka olacak)
        </li>
        <li className={styles.paragraph}>
          {"    "}1 adet Nüfus Müdürlüğünden alınan Nüfus kayıt örneği
        </li>
        <li className={styles.paragraph}>
          {"    "}Özel Güvenlik Ruhsat harcının yatırıldığına dair makbuz
        </li>
        <li className={styles.paragraph}>
          {"    "}1 adet Kan Grubunu gösterir belge
        </li>
        <li className={styles.paragraph}>
          {"    "}Özel Güvenlik Eğitim Sertifikası (Eğitim görülen kurstan
          teslim alınacaktır)
        </li>
        <li className={styles.paragraph}>
          {"    "}1 adet Mavi renkli Naylon Dosya
        </li>
      </ul>
      <h2 className={styles.paragraph}>
        <b>İLGİLİ DÖKÜMANLAR:</b>
      </h2>
      <a
        download
        href={il_emniyet_ust_yazi}
        style={{ color: "blue", textDecoration: "underline" }}
      >
        {"    "}İl Emniyet Müdürlüğüne Hitaben Üst Yazı Örneği
      </a>
      <a
        download
        href={il_jandarma_ust_yazi}
        style={{ color: "blue", textDecoration: "underline" }}
      >
        {"    "}İl Jandarma Komutanlığına Hitaben Üst Yazı Örneği
      </a>
      <a
        download
        href={guvenlik_sorusturma_formu}
        style={{ color: "blue", textDecoration: "underline" }}
      >
        {"    "}Güvenlik Soruşturması ve Arşiv Araştırması Formu
      </a>
    </Box>
  );
}

export default ArmedSpecialSecurity;
