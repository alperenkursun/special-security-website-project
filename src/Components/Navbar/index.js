import { useState } from "react";
import {
  Flex,
  Box,
  ButtonGroup,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import styles from "./styles.module.css";
import "./styles.css";
import { ChevronDownIcon } from "@chakra-ui/icons";

import React from "react";
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
    <div style={{ height: "128px" }}>
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
            <b>Kurucu:</b> Ramazan Dereli - <b>Tel:</b> 0266 372 26 28 -{" "}
            <b>Gsm:</b> 0532 721 93 70 - <b>Adres:</b> Gazicelal Mah. Akçay
            Asfaltı Şentürkler Apt. No: 22/2 Edremit/Balıkesir - <b>E-mail:</b>{" "}
            korfezguvenlik_1@hotmail.com
          </h1>
        </Flex>
      </Box>
      <Box
        h="6em"
        bg="#2C5282"
        position="fixed"
        style={{
          top: scrollStateY ? "0" : "32px",
          zIndex: "200",
          right: 0,
          left: 0,
          width: "100%",
          maxWidth: "1903px",
          margin: "0 auto",
        }}
      >
        <Flex
          align="center"
          justify="space-between"
          height="100%"
          className="navbarWidth"
          p={4}
          style={{
            top: scrollStateY ? "0" : "32px",
            zIndex: "200",
            width: "100% !important",
          }}
        >
          <Box textAlign="center" lineHeight="30px">
            <h1 className={styles.mainh1}>Körfez Özel Güvenlik</h1>

            <h1 className={styles.otherh1}>Eğitim Hizmetleri</h1>
          </Box>

          <Box>
            <ButtonGroup spacing="6">
              <Button
                bg="#EDF2F7"
                variant="solid"
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
              >
                Ana Sayfa
              </Button>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  bg="#EDF2F7"
                  variant="solid"
                  boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                >
                  Hakkımızda
                </MenuButton>
                <MenuList>
                  <MenuList p="1" py="0">
                    <Button mx="1">Şirket Profili</Button>
                    <Button mx="1">Kalite Politikamız</Button>
                  </MenuList>
                </MenuList>
              </Menu>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  bg="#EDF2F7"
                  variant="solid"
                  boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                >
                  Eğitim Hizmeti
                </MenuButton>
                <MenuList>
                  <MenuList p="1" py="0">
                    <Button mx="1">Eğitim Stratejimiz</Button>
                    <Menu className={styles.submenu}>
                      <MenuButton
                        mx="1"
                        as={Button}
                        rightIcon={<ChevronDownIcon />}
                      >
                        Kimlik Kartı İşlemleri
                      </MenuButton>
                      <MenuList>
                        <MenuItem>
                          Silahlı Özel Güvenlik Kimlik Kartı İşlemleri
                        </MenuItem>
                        <MenuItem>
                          Silahsız Özel Güvenlik Kimlik Kartı İşlemleri
                        </MenuItem>
                        <MenuItem>
                          Yenileme Eğitimine Girenlerin İşlemleri
                        </MenuItem>
                      </MenuList>
                    </Menu>
                    <Menu className={styles.submenu}>
                      <MenuButton
                        mx="1"
                        as={Button}
                        rightIcon={<ChevronDownIcon />}
                      >
                        Eğitim Süreci
                      </MenuButton>
                      <MenuList>
                        <MenuItem>Silahlı Eğitim</MenuItem>
                        <MenuItem>Silahsız Eğitim</MenuItem>
                        <MenuItem>Yenileme Eğitimi</MenuItem>
                      </MenuList>
                    </Menu>
                  </MenuList>
                </MenuList>
              </Menu>
              <Button
                bg="#EDF2F7"
                variant="solid"
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
              >
                İletişim
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
