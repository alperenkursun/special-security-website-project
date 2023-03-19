import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import moment from "moment/moment";

function AnnouncementDetails() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}`)
      .then((response) => response.json())
      .then((data) => {
        setAnnouncements(data);
        console.log(announcements);
      });
  }, []);
  return (
    <div>
      <Text
        fontSize="4xl"
        textAlign="center"
        className={styles.header}
        style={{
          margin: "50px auto",
          borderBottom: "1px solid black",
          width: "240px",
        }}
      >
        DUYURULAR
      </Text>
      <Box className={styles.mainpageContainer}>
        {announcements
          .slice(0)
          .reverse()
          .map((item) => {
            return (
              <Box
                className={styles.announcement}
                style={{
                  marginTop: "20px",
                  border: "1px solid black",
                  backgroundColor: "white",
                }}
              >
                <Text
                  fontSize="xl"
                  textAlign="center"
                  bg="#2c5282"
                  color="white"
                  className={styles.marginAuto}
                  style={{
                    margin: "0 auto",
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  fontSize="xs"
                  textAlign="center"
                  bg="#edf2cc"
                  color="black"
                  className={styles.marginAuto}
                  style={{
                    margin: "0 auto",
                  }}
                >
                  {moment(item.createAt).format("DD-MM-YYYY, HH:mm")}
                </Text>
                <Text
                  p={1}
                  bg="white"
                  fontSize="sm"
                  textAlign="center"
                  className={styles.marginAuto}
                >
                  {item.description}
                </Text>
              </Box>
            );
          })}
      </Box>
    </div>
  );
}

export default AnnouncementDetails;
