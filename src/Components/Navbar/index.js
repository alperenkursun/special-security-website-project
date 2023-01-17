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
import { Link } from "react-router-dom";
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
          <Link to="/">
            <Box textAlign="center" lineHeight="30px">
              <h1 className={styles.mainh1}>Körfez Özel Güvenlik</h1>

              <h1 className={styles.otherh1}>Eğitim Hizmetleri</h1>
            </Box>
          </Link>

          <Box>
            <ButtonGroup spacing="6">
              <Link to="/">
                <Button
                  bg="#EDF2F7"
                  variant="solid"
                  boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                >
                  Ana Sayfa
                </Button>
              </Link>

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
                    <Link to="/sirketprofili">
                      <Button mx="1">Şirket Profili</Button>
                    </Link>
                    <Link to="/kalitepolitikamiz">
                      <Button mx="1">Kalite Politikamız</Button>
                    </Link>
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
                    <Link to="/egitimstratejimiz">
                      <Button mx="1">Eğitim Stratejimiz</Button>
                    </Link>
                    <Menu className={styles.submenu}>
                      <MenuButton
                        mx="1"
                        as={Button}
                        rightIcon={<ChevronDownIcon />}
                      >
                        Kimlik Kartı İşlemleri
                      </MenuButton>
                      <MenuList>
                        <Link to="/silahliozelguvenlikkimlikkartiislemleri">
                          <MenuItem>
                            Silahlı Özel Güvenlik Kimlik Kartı İşlemleri
                          </MenuItem>
                        </Link>
                        <Link to="/silahsizozelguvenlikkimlikkartiislemleri">
                          <MenuItem>
                            Silahsız Özel Güvenlik Kimlik Kartı İşlemleri
                          </MenuItem>
                        </Link>
                        <Link to="/yenilemeegitiminegirenlerinislemleri">
                          <MenuItem>
                            Yenileme Eğitimine Girenlerin İşlemleri
                          </MenuItem>
                        </Link>
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
                        <Link to="/silahliegitim">
                          <MenuItem>Silahlı Eğitim</MenuItem>
                        </Link>
                        <Link to="/silahsizegitim">
                          <MenuItem>Silahsız Eğitim</MenuItem>
                        </Link>
                        <Link to="/yenilemeegitimi">
                          <MenuItem>Yenileme Eğitimi</MenuItem>
                        </Link>
                      </MenuList>
                    </Menu>
                  </MenuList>
                </MenuList>
              </Menu>
              <Link to="/iletisim">
                <Button
                  bg="#EDF2F7"
                  variant="solid"
                  boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                >
                  İletişim
                </Button>
              </Link>
              <Link to="/admingirisi">
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
              </Link>
            </ButtonGroup>
          </Box>
        </Flex>
      </Box>
    </div>
  );
}

export default Navbar;
