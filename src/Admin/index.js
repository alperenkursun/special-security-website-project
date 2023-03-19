import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Button } from "@chakra-ui/react";
import AnnouncementAdmin from "./AnnouncementAdmin";
import ActivitiesAdmin from "./ActivitiesAdmin";

function Admin() {
  let isAnnouncementValue = localStorage.getItem("announcementValue");

  const [isAnnouncement, setIsAnnouncement] = useState(isAnnouncementValue);

  useEffect(() => {
    setIsAnnouncement(isAnnouncementValue);
  }, []);

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.header}>Yönetici Paneli</h1>
      <div className={styles.buttonsContainer}>
        <Button
          size="md"
          height="48px"
          width="200px"
          border="2px"
          borderColor={isAnnouncementValue === "true" ? "blue" : ""}
          mx="5"
          onClick={() => {
            setIsAnnouncement(true);
            localStorage.setItem("announcementValue", "true");
          }}
        >
          Duyurular
        </Button>

        <Button
          size="md"
          height="48px"
          width="200px"
          border="2px"
          borderColor={isAnnouncementValue === "true" ? "" : "blue"}
          mx="5"
          onClick={() => {
            setIsAnnouncement(false);
            localStorage.setItem("announcementValue", "false");
          }}
        >
          Faaliyetlerimiz
        </Button>
      </div>
      <div className={styles.adminEditArea}>
        {isAnnouncementValue === "true" ? (
          <AnnouncementAdmin />
        ) : (
          <ActivitiesAdmin />
        )}
      </div>
    </div>
  );
}

export default Admin;
