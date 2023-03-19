import { CloseIcon } from "@chakra-ui/icons";
import { Button, Text } from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

function ActivitiesAdmin() {
  let [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/photos`)
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data);
      });
  }, []);

  return (
    <>
      <form
        method="POST"
        action={`${process.env.REACT_APP_SERVER_URL}/addPhoto`}
        className={styles.addPhoto}
        encType="multipart/form-data"
      >
        <Text fontSize="lg" color="black">
          Fotoğraf veya Video Ekle:
        </Text>
        <input type="file" name="image" className={styles.file} />
        <Button type="submit" colorScheme="green" variant="solid">
          Ekle
        </Button>
      </form>
      <div className={styles.container}>
        {photos
          .slice(0)
          .reverse()
          .map((item) => {
            return (
              <div className={styles.imgContainer}>
                <a
                  href={`${process.env.REACT_APP_SERVER_URL}/deletePhoto/${item._id}?_method=DELETE`}
                >
                  <CloseIcon
                    w={8}
                    h={8}
                    color="red.500"
                    className={styles.closeIcon}
                  />
                </a>
                <img src={`${item.image}`} className={styles.img} />
              </div>
            );
          })}
      </div>
    </>
  );
}

export default ActivitiesAdmin;
