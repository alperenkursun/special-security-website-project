import { Box, Image, Button, ButtonGroup, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import image1 from "../../images/1.jpg";
import image2 from "../../images/2.png";
import image3 from "../../images/3.jpg";
import image4 from "../../images/4.jpg";
import image5 from "../../images/5.png";
import image6 from "../../images/6.png";
import image7 from "../../images/7.jpg";
import image8 from "../../images/8.jpg";
import image9 from "../../images/9.jpeg";
import image10 from "../../images/10.jpg";
import image11 from "../../images/11.jpg";
import image12 from "../../images/12.jpg";
import image13 from "../../images/13.jpg";
import image14 from "../../images/14.jpg";
import image15 from "../../images/15.jpg";
import image16 from "../../images/16.jpg";

import logo from "../../images/logo.png";
import styles from "./styles.module.css";
import "./styles.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import moment from "moment/moment";

const images = [
  { url: image1 },
  { url: image2 },
  { url: image3 },
  { url: image4 },
  { url: image5 },
  { url: image6 },
  { url: image7 },
  { url: image15 },
  { url: image16 },
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
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}`)
      .then((response) => response.json())
      .then((data) => {
        setAnnouncements(data);
        console.log(announcements);
      });
  }, []);

  const media1850 = useMediaQuery({ query: "(max-width: 1850px)" });
  const media1650 = useMediaQuery({ query: "(max-width: 1650px)" });
  const media1450 = useMediaQuery({ query: "(max-width: 1450px)" });
  const media1250 = useMediaQuery({ query: "(max-width: 1250px)" });
  const media1100 = useMediaQuery({ query: "(max-width: 1100px)" });
  const media900 = useMediaQuery({ query: "(max-width: 900px)" });
  const media650 = useMediaQuery({ query: "(max-width: 650px)" });
  const media450 = useMediaQuery({ query: "(max-width: 450px)" });

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
      <Box width="100%" height="900px" className={styles.showcasePosition}>
        <Image
          src={logo}
          alt="Logo"
          className={`${styles.logo} ${
            scrollStateY2 ? styles.logoTop1 : styles.logoTop2
          }`}
          style={{
            width: media450
              ? "30px"
              : media650
              ? "60px"
              : media900
              ? "80px"
              : media1250
              ? "100px"
              : "",
            top: media450
              ? "280px"
              : media650
              ? "250px"
              : media900
              ? "220px"
              : media1450
              ? "180px"
              : "",
            left: media1250 ? "50%" : "70px",
            transform: media1250 ? "translateX(-50%)" : "",
            position: media900 ? "fixed !important" : "",
            display: media900 ? "none" : "",
          }}
        />

        <SimpleImageSlider
          width={
            media450
              ? "100%"
              : media650
              ? "100%"
              : media900
              ? "100%"
              : media1100
              ? 800
              : media1250
              ? 1000
              : media1450
              ? 600
              : media1650
              ? 800
              : media1850
              ? 1000
              : 1200
          }
          height={
            media450
              ? 200
              : media650
              ? 270
              : media900
              ? 380
              : media1100
              ? 400
              : media1250
              ? 500
              : media1450
              ? 300
              : media1650
              ? 400
              : media1850
              ? 500
              : 600
          }
          images={images}
          showBullets={media450 ? false : true}
          showNavs={media450 ? false : true}
          loop={true}
          autoPlay={true}
          autoPlayDelay={10.0}
          className={styles.slider}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            borderRadius: "20px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            textAlign: "center",
          }}
        />
        <ButtonGroup
          spacing="6"
          style={{
            position: "absolute",
            top: media900 ? "700px" : "800px",
            left: "50%",
            transform: "translate(-50%,-50%)",
            borderRadius: "20px",
            display: media1250 ? "none" : "",
          }}
        >
          <Link to="/duyurular">
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
          </Link>
          <Link to="/faaliyetlerimiz">
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
          </Link>
          <Link to="/iletisim">
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
          </Link>
        </ButtonGroup>

        <Box
          className={styles.announcement}
          p={3}
          bg="rgb(237, 242, 247)"
          style={{
            display: media1250 ? "none" : "block",
            height: media1450 ? "870px" : "",
            top: media1450 ? "30px" : "",
          }}
        >
          <Text
            fontSize="4xl"
            textAlign="center"
            style={{ margin: "0 auto", borderBottom: "1px solid black" }}
          >
            DUYURULAR
          </Text>
          {announcements
            .slice(0)
            .reverse()
            .map((item, index) => {
              return (
                <Box
                  style={{
                    marginTop: "20px",
                    border: "1px solid black",
                  }}
                  key={index}
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
      </Box>
    </>
  );
}

export default Showcase;
