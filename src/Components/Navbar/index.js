import { useState } from "react";
import { Flex, Image, Box, ButtonGroup, Button } from "@chakra-ui/react";
import logo from "./korfezozelguvenliklogo.png";
import styles from "./styles.module.css";
import "./styles.css";
function Navbar() {
  const [scrollStateY, setScrollStateY] = useState(false);

  const changeDisplay = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 35) setScrollStateY(true);
    else {
      setScrollStateY(false);
    }
  };

  window.addEventListener("scroll", changeDisplay);

  return (
    <div>
      <Box
        w="100%"
        h="2em"
        bg="#EDF2F7"
        position="flex"
        align="center"
        zIndex="100"
        className={scrollStateY ? "none" : ""}
      >
        <Flex align="center" justify="center" height="100%">
          <h1>
            <b>Yöntetici:</b> Ahmet Bıyıklı - <b>Tel:</b> 0266 372 26 28 -{" "}
            <b>Gsm:</b> 0530 327 25 11 - <b>Adres:</b> Gazicelal Mah. Akçay
            Asfaltı Şentürkler Apt. No: 22/2 Edremit/Balıkesir - <b>E-mail:</b>{" "}
            korfezguvenlik_1@hotmail.com
          </h1>
        </Flex>
      </Box>
      <Box
        w="100%"
        h="6em"
        bg="#2C5282"
        position="fixed"
        style={{ top: scrollStateY ? "0" : "32px", zIndex: "200" }}
      >
        <Flex align="center" justify="space-between" height="100%" p={4}>
          <Box textAlign="center" lineHeight="30px">
            <h1 className={styles.mainh1}>Körfez Özel Güvenlik</h1>

            <h1 className={styles.otherh1}>Eğitim Koruma Hizmetleri</h1>
          </Box>
          <Box>
            <Image src={logo} alt="körfez özel güvenlik logo" w="4rem" />
          </Box>

          <Box>
            <ButtonGroup spacing="6">
              <Button
                bg="#EDF2F7"
                variant="solid"
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
              >
                Button
              </Button>
              <Button
                bg="#EDF2F7"
                variant="solid"
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
              >
                Button
              </Button>
              <Button
                bg="#EDF2F7"
                variant="solid"
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
              >
                Button
              </Button>
              <Button
                color="white"
                bg="black"
                variant="outline"
                _hover={{
                  bg: "white",
                  color: " black",
                  borderColor: "black",
                }}
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
              >
                Admin Girişi
              </Button>
            </ButtonGroup>
          </Box>
        </Flex>
      </Box>
    </div>
  );
}

export default Navbar;
