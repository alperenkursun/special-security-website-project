import { Box, Text } from "@chakra-ui/react";
import styles from "./styles.module.css";
import image2 from "../../images/2.png";
import image3 from "../../images/3.jpg";
import image4 from "../../images/4.jpg";
import image5 from "../../images/5.png";
import image6 from "../../images/6.png";
import image7 from "../../images/7.jpg";
import image8 from "../../images/15.jpg";
import image9 from "../../images/16.jpg";
import image10 from "../../images/10.jpg";
import image11 from "../../images/11.jpg";
import image12 from "../../images/12.jpg";
import video1 from "../../videos/video1.mp4";

function Activities() {
  return (
    <div>
      <Text
        fontSize="4xl"
        textAlign="center"
        className={styles.header}
        style={{
          margin: "50px auto",
          borderBottom: "1px solid black",
        }}
      >
        FAALİYETLERİMİZ
      </Text>
      <Box className={styles.mainpageContainer}>
        <video controls className={styles.announcement}>
          <source src={video1} type="video/mp4" />
        </video>
        <a href={image2} data-lightbox="models">
          <img src={image2} alt="Faaliyet" className={styles.announcement} />
        </a>{" "}
        <a href={image3} data-lightbox="models">
          <img src={image3} alt="Faaliyet" className={styles.announcement} />
        </a>{" "}
        <a href={image4} data-lightbox="models">
          <img src={image4} alt="Faaliyet" className={styles.announcement} />
        </a>{" "}
        <a href={image5} data-lightbox="models">
          <img src={image5} alt="Faaliyet" className={styles.announcement} />
        </a>{" "}
        <a href={image6} data-lightbox="models">
          <img src={image6} alt="Faaliyet" className={styles.announcement} />
        </a>
        <a href={image7} data-lightbox="models">
          <img src={image7} alt="Faaliyet" className={styles.announcement} />
        </a>{" "}
        <a href={image8} data-lightbox="models">
          <img src={image8} alt="Faaliyet" className={styles.announcement} />
        </a>{" "}
        <a href={image9} data-lightbox="models">
          <img src={image9} alt="Faaliyet" className={styles.announcement} />
        </a>
        <a href={image10} data-lightbox="models">
          <img src={image10} alt="Faaliyet" className={styles.announcement} />
        </a>{" "}
        <a href={image12} data-lightbox="models">
          <img src={image12} alt="Faaliyet" className={styles.announcement} />
        </a>{" "}
        <a href={image11} data-lightbox="models">
          <img src={image11} alt="Faaliyet" className={styles.announcement} />
        </a>
      </Box>
    </div>
  );
}

export default Activities;
