import { Box, Image, Button, ButtonGroup, Text } from "@chakra-ui/react";
import { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import image1 from "../../images/1.jpg";
import image2 from "../../images/2.png";
import image3 from "../../images/3.jpg";
import image4 from "../../images/4.jpg";
import image5 from "../../images/5.png";
import image6 from "../../images/6.png";
import image7 from "../../images/7.jpg";
import image8 from "../../images/8.jpg";
import image9 from "../../images/9.png";
import image10 from "../../images/10.jpg";
import image11 from "../../images/11.jpg";
import image12 from "../../images/12.jpg";
import image13 from "../../images/13.jpg";
import image14 from "../../images/14.jpg";
import logo from "../../images/logo.png";
import styles from "./styles.module.css";
import "./styles.css";

const images = [
  { url: image1 },
  { url: image2 },
  { url: image3 },
  { url: image4 },
  { url: image5 },
  { url: image6 },
  { url: image7 },
  { url: image8 },
  { url: image9 },
  { url: image10 },
  { url: image11 },
  { url: image12 },
  { url: image13 },
  { url: image14 },
];

function Showcase() {
  const [scrollStateY2, setScrollStateY2] = useState(false);

  const changeDisplay = () => {
    if (window.scrollY >= 35) {
      setScrollStateY2(true);
    } else {
      setScrollStateY2(false);
    }
  };

  window.addEventListener("scroll", changeDisplay);

  return (
    <>
      <div className="backgroundImg"></div>
      <Box
        width="100%"
        height="900px"
        minWidth="1903px"
        className={styles.showcasePosition}
      >
        <Image
          src={logo}
          alt="Logo"
          className={`${styles.logo} ${
            scrollStateY2 ? styles.logoTop1 : styles.logoTop2
          }`}
        />

        <SimpleImageSlider
          width={1200}
          height={600}
          images={images}
          showBullets={true}
          showNavs={true}
          loop={true}
          autoPlay={true}
          autoPlayDelay={10.0}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            borderRadius: "20px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        />
        <ButtonGroup
          spacing="6"
          style={{
            position: "absolute",
            top: "800px",
            left: "50%",
            transform: "translate(-50%,-50%)",
            borderRadius: "20px",
          }}
        >
          <Button
            bg="#2C5282"
            color="white"
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            opacity="0.9"
            _hover={{
              opacity: 1,
            }}
            variant="solid"
            size="lg"
          >
            Duyurular
          </Button>
          <Button
            bg="#2C5282"
            color="white"
            opacity="0.9"
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            _hover={{
              opacity: 1,
            }}
            variant="solid"
            size="lg"
          >
            Faaliyetlerimiz
          </Button>
          <Button
            bg="#2C5282"
            color="white"
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            opacity="0.9"
            _hover={{
              opacity: 1,
            }}
            variant="solid"
            size="lg"
          >
            İletişim
          </Button>
        </ButtonGroup>

        <Box className={styles.announcement} p={3} bg="rgb(237, 242, 247)">
          <Text
            fontSize="4xl"
            textAlign="center"
            style={{ margin: "0 auto", borderBottom: "1px solid black" }}
          >
            DUYURULAR
          </Text>
          <Box style={{ marginTop: "20px", border: "1px solid black" }}>
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
              Başlık
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
              Tarih
            </Text>
            <Text
              p={1}
              bg="white"
              fontSize="sm"
              textAlign="center"
              className={styles.marginAuto}
            >
              Duyuru
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Showcase;
