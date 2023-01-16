import { Box } from "@chakra-ui/react";
import React from "react";
import styles from "./styles.module.css";

function CompanyProfile() {
  return (
    <Box className={styles.mainpageContainer}>
      <h6 className={styles.header}>ŞİRKET PROFİLİ</h6>
      {/* prettier-ignore */}
      <h4 className={styles.paragraph}>
        {"    "}Sosyal ve ekonomik problemler, iç göç, çarpık yapılaşma ve yerleşme
        sıkıntılarını yaşayan ve nüfusu hızla artan ülkemizde, güvenlik
        kuvvetlerinin her noktada her an hazır olabilmesinin imkânsızlığı ve bu
        nedenle oluşan yetersizlik can ve mal kaybına neden olan eylemlere uygun
        zemin oluşturmuştur.
      </h4>
      <h2 className={styles.paragraph}>
        {"    "}5188 sayılı Özel Güvenlik Hizmetlerine dair yürürlüğe giren yasa
        ile Özel Güvenlik Hizmetleri yetkili makamların denetimi altında ehil ve
        güvenilir kişiler tarafından yürütülmesi zorunluluğu getirilmiştir.
        Ülkemizin son yıllarda içinde bulunduğu durumda dikkate alındığında,
        genel kolluk kuvvetlerinin koruma hizmetleri gibi pasif görevlerden
        çekilerek terörle mücadele ve asayiş hizmetleri gibi daha aktif
        görevlerde çalıştırılmaları zorunluluğu ortaya çıkmıştır.
      </h2>
      <h2 className={styles.paragraph}>
        {"    "}Özel güvenlik; kamu güvenliğini tamamlayıcı mahiyette Genel
        Kolluk güçlerini destekleyen çok önemli bir meslek ve sektör haline
        gelmiştir.
      </h2>
      <h1 className={styles.paragraph}>
        {"    "}Körfez Özel Güvenlik Şirketimiz, 5188 sayılı kanun gereğince İç
        İşleri Bankalığı’ndan onaylı Faaliyet İzin Belgesini alarak Körfez Özel
        Güvenlik Şirketini ve kendi personelimizi yetiştirmek amacıyla yine İç
        İşleri Bankalığı’ndan onaylı Faaliyet izin belgesini alarak Körfez Özel
        Güvenlik Eğitim Kurumu’nu açmıştır.
      </h1>
      <h2 className={styles.paragraph}>
        {"    "}Şirketimiz, güvenlik konusunda birçok deneyim ve tecrübe sahibi
        uzman kadrosuyla, ülkemizdeki özel güvenlik sektörünün gelişimine
        katkıda bulunmayı amaçlamaktadır.
      </h2>
      <h5 className={styles.paragraph}>
        {"    "}Gizlilik ana ilkemiz olup, olay oluşmadan engellemek temel
        prensibimizdir.
      </h5>
    </Box>
  );
}

export default CompanyProfile;
