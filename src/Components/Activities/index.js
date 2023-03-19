import { Box, Text } from "@chakra-ui/react";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import photo1 from "../../images/1.jpg";
import photo2 from "../../images/2.png";
import photo3 from "../../images/3.jpg";
import photo4 from "../../images/4.jpg";
import photo5 from "../../images/5.png";
import photo6 from "../../images/6.png";
import photo7 from "../../images/7.jpg";
import photo15 from "../../images/15.jpg";
import photo16 from "../../images/16.jpg";

function Activities() {
  let [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/photos`)
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data);
      });
  }, []);
  return (
    <div style={{ width: "100vw" }}>
      <Text
        fontSize="4xl"
        textAlign="center"
        className={styles.header}
        style={{
          margin: "50px auto",
          borderBottom: "1px solid black",
          width: "400px",
        }}
      >
        FAALİYETLERİMİZ
      </Text>
      <Box className={styles.mainpageContainer}>
        {/* {photos
          .slice(0)
          .reverse()
          .map((item) => {
            return (
              <div key={item._id}>
                <a href={`${item.image}`} data-lightbox="models">
                  <img
                    src={`${item.image}`}
                    alt="Faaliyet"
                    className={styles.announcement}
                  />
                </a>
              </div>
            );
          })} */}
        <div>
          <a href={photo2} data-lightbox="models">
            <img src={photo2} alt="Faaliyet" className={styles.announcement} />
          </a>
        </div>
        <div>
          <a href={photo3} data-lightbox="models">
            <img src={photo3} alt="Faaliyet" className={styles.announcement} />
          </a>
        </div>
        <div>
          <a href={photo3} data-lightbox="models">
            <img src={photo3} alt="Faaliyet" className={styles.announcement} />
          </a>
        </div>
        <div>
          <a href={photo4} data-lightbox="models">
            <img src={photo4} alt="Faaliyet" className={styles.announcement} />
          </a>
        </div>
        <div>
          <a href={photo5} data-lightbox="models">
            <img src={photo5} alt="Faaliyet" className={styles.announcement} />
          </a>
        </div>
        <div>
          <a href={photo6} data-lightbox="models">
            <img src={photo6} alt="Faaliyet" className={styles.announcement} />
          </a>
        </div>
        <div>
          <a href={photo7} data-lightbox="models">
            <img src={photo7} alt="Faaliyet" className={styles.announcement} />
          </a>
        </div>
        <div>
          <a href={photo15} data-lightbox="models">
            <img src={photo15} alt="Faaliyet" className={styles.announcement} />
          </a>
        </div>
        <div>
          <a href={photo16} data-lightbox="models">
            <img src={photo16} alt="Faaliyet" className={styles.announcement} />
          </a>
        </div>
        <div>
          <a href={photo1} data-lightbox="models">
            <img src={photo1} alt="Faaliyet" className={styles.announcement} />
          </a>
        </div>
      </Box>
    </div>
  );
}

export default Activities;
