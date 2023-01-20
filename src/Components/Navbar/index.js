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
import {
  ChevronDownIcon,
  ChevronRightIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";

import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
function Navbar() {
  const [scrollStateY, setScrollStateY] = useState(false);
  const [menuItemInOut, setMenuItemInOut] = useState(false);
  const [aboutItemsDisplay, setAboutItemsDisplay] = useState(false);
  //işaret
  const [identificationCardItemsDisplay, setIdentificationCardItemsDisplay] =
    useState(false);
  const [educationFlowItemsDisplay, setEducationFlowItemsDisplay] =
    useState(false);
  const [educationItemsDisplay, setEducationItemsDisplay] = useState(false);

  const media1850 = useMediaQuery({ query: "(max-width: 1850px)" });
  const media1650 = useMediaQuery({ query: "(max-width: 1650px)" });
  const media1450 = useMediaQuery({ query: "(max-width: 1450px)" });
  const media1250 = useMediaQuery({ query: "(max-width: 1250px)" });
  const media1100 = useMediaQuery({ query: "(max-width: 1100px)" });
  const media900 = useMediaQuery({ query: "(max-width: 900px)" });
  const media650 = useMediaQuery({ query: "(max-width: 650px)" });
  const media450 = useMediaQuery({ query: "(max-width: 450px)" });

  const changeDisplay = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 35) setScrollStateY(true);
    else {
      setScrollStateY(false);
    }
  };

  window.addEventListener("scroll", changeDisplay);

  return (
    <div className={styles.navbarContainer}>
      <Box
        w="100%"
        h={
          media450
            ? "160px"
            : media650
            ? "128px"
            : media900
            ? "96px"
            : media1450
            ? "64px"
            : "32px"
        }
        bg="#EDF2F7"
        position="flex"
        align="center"
        zIndex="100"
        className={`${styles.topNavbar} ${scrollStateY ? "none" : ""}`}
        style={{ width: "100%", height: media1650 && "0px !important" }}
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
        w="100%"
        h="6em"
        bg="#2C5282"
        position="fixed"
        className={`${styles.bottomNavbarContainer} ${
          scrollStateY ? styles.topZero : ""
        }`}
        style={{
          top: media450
            ? "160px"
            : media650
            ? "128px"
            : media900
            ? "96px"
            : media1450
            ? "64px"
            : scrollStateY
            ? "0"
            : "32px",
          zIndex: "200",
          right: 0,
          left: 0,
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
            <ButtonGroup
              spacing="6"
              style={{ display: media1250 ? "none" : "block" }}
            >
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
            <div width="100vw">
              <HamburgerIcon
                boxSize={10}
                marginX="20px"
                color="white"
                style={{
                  display: media1250 ? "block" : "none",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setMenuItemInOut(!menuItemInOut);
                  setEducationItemsDisplay(false);
                  setAboutItemsDisplay(false);
                  setIdentificationCardItemsDisplay(false);
                  setEducationFlowItemsDisplay(false);
                }}
              />
            </div>
          </Box>
        </Flex>
        <Box
          position="absolute"
          top="96px"
          width="100vw"
          className={styles.menuContainer}
          style={{ display: media1250 ? "" : "none" }}
        >
          <Link to="/">
            <Box
              px={8}
              className={`${styles.menuItem} ${
                menuItemInOut ? styles.menuItem1 : styles.menuItem10
              }`}
            >
              Ana Sayfa
            </Box>
          </Link>
          <Box
            p={3}
            className={`${styles.menuItem} ${
              menuItemInOut ? styles.menuItem2 : styles.menuItem20
            }`}
            onClick={() => {
              setAboutItemsDisplay(!aboutItemsDisplay);
              setEducationItemsDisplay(false);
              setIdentificationCardItemsDisplay(false);
              setEducationFlowItemsDisplay(false);
            }}
          >
            {aboutItemsDisplay ? (
              <ChevronDownIcon style={{ marginRight: "5px" }} />
            ) : (
              <ChevronRightIcon style={{ marginRight: "5px" }} />
            )}
            Hakkımızda
          </Box>
          <Link to="/sirketprofili">
            <Box
              px={12}
              className={`${styles.menuItem} ${styles.aboutItem} ${styles.aboutItem1} `}
              style={{
                backgroundColor: "#edf2dd",
                display: aboutItemsDisplay ? "flex" : "none",
              }}
            >
              Şirket Profili
            </Box>
          </Link>
          <Link to="/kalitepolitikamiz">
            <Box
              px={12}
              className={`${styles.menuItem} ${styles.aboutItem} `}
              style={{
                backgroundColor: "#edf2dd",
                display: aboutItemsDisplay ? "flex" : "none",
              }}
            >
              Kalite Politikamız
            </Box>
          </Link>
          <Box
            p={3}
            className={`${styles.menuItem} ${
              menuItemInOut ? styles.menuItem3 : styles.menuItem30
            }`}
            onClick={() => {
              setEducationItemsDisplay(!educationItemsDisplay);
              setAboutItemsDisplay(false);
              setIdentificationCardItemsDisplay(false);
              setEducationFlowItemsDisplay(false);
            }}
          >
            {educationItemsDisplay ? (
              <ChevronDownIcon style={{ marginRight: "5px" }} />
            ) : (
              <ChevronRightIcon style={{ marginRight: "5px" }} />
            )}
            Eğitim Hizmeti
          </Box>
          <Link to="/egitimstratejimiz">
            <Box
              px={12}
              className={`${styles.menuItem}`}
              style={{
                backgroundColor: "#edf2dd",
                display: educationItemsDisplay ? "flex" : "none",
              }}
            >
              Eğitim Stratejimiz
            </Box>
          </Link>
          <Box
            px={7}
            className={`${styles.menuItem}`}
            style={{
              backgroundColor: "#edf2dd",
              display: educationItemsDisplay ? "flex" : "none",
            }}
            onClick={() => {
              setIdentificationCardItemsDisplay(
                !identificationCardItemsDisplay
              );
              setEducationFlowItemsDisplay(false);
            }}
          >
            {identificationCardItemsDisplay ? (
              <ChevronDownIcon style={{ marginRight: "5px" }} />
            ) : (
              <ChevronRightIcon style={{ marginRight: "5px" }} />
            )}{" "}
            Kimlik Kartı İşlemleri
          </Box>
          <Link to="/silahliozelguvenlikkimlikkartiislemleri">
            <Box
              px={16}
              className={`${styles.menuItem} `}
              style={{
                backgroundColor: "#edf2ee",
                display: identificationCardItemsDisplay ? "flex" : "none",
              }}
            >
              Silahlı Özel Güvenlik Kimlik Kartı İşlemleri
            </Box>
          </Link>
          <Link to="/silahsizozelguvenlikkimlikkartiislemleri">
            <Box
              px={16}
              className={`${styles.menuItem} `}
              style={{
                backgroundColor: "#edf2ee",
                display: identificationCardItemsDisplay ? "flex" : "none",
              }}
            >
              Silahsız Özel Güvenlik Kimlik Kartı İşlemleri
            </Box>
          </Link>
          <Link to="/yenilemeegitiminegirenlerinislemleri">
            <Box
              px={16}
              className={`${styles.menuItem} `}
              style={{
                backgroundColor: "#edf2ee",
                display: identificationCardItemsDisplay ? "flex" : "none",
              }}
            >
              Yenileme Eğitimine Girenlerin İşlemleri
            </Box>
          </Link>
          <Box
            px={7}
            className={`${styles.menuItem}`}
            style={{
              backgroundColor: "#edf2dd",
              display: educationItemsDisplay ? "flex" : "none",
            }}
            onClick={() => {
              setEducationFlowItemsDisplay(!educationFlowItemsDisplay);
              setIdentificationCardItemsDisplay(false);
            }}
          >
            {educationFlowItemsDisplay ? (
              <ChevronDownIcon style={{ marginRight: "5px" }} />
            ) : (
              <ChevronRightIcon style={{ marginRight: "5px" }} />
            )}
            Eğitim Süreci
          </Box>
          <Link to="/silahliegitim">
            <Box
              px={16}
              className={`${styles.menuItem} `}
              style={{
                backgroundColor: "#edf2ee",
                display: educationFlowItemsDisplay ? "flex" : "none",
              }}
            >
              Silahlı Eğitim
            </Box>
          </Link>
          <Link to="/silahsizegitim">
            <Box
              px={16}
              className={`${styles.menuItem} `}
              style={{
                backgroundColor: "#edf2ee",
                display: educationFlowItemsDisplay ? "flex" : "none",
              }}
            >
              Silahsız Eğitim
            </Box>
          </Link>
          <Link to="/yenilemeegitimi">
            <Box
              px={16}
              className={`${styles.menuItem} `}
              style={{
                backgroundColor: "#edf2ee",
                display: educationFlowItemsDisplay ? "flex" : "none",
              }}
            >
              Yenileme Eğitimi
            </Box>
          </Link>
          <Link to="/duyurular">
            <Box
              px={8}
              className={`${styles.menuItem} ${
                menuItemInOut ? styles.menuItem4 : styles.menuItem40
              }`}
            >
              Duyurular
            </Box>
          </Link>
          <Link to="/faaliyetlerimiz">
            <Box
              px={8}
              className={`${styles.menuItem} ${
                menuItemInOut ? styles.menuItem5 : styles.menuItem50
              }`}
            >
              Faaliyetlerimiz
            </Box>
          </Link>
          <Link to="/iletisim">
            <Box
              px={8}
              className={`${styles.menuItem} ${
                menuItemInOut ? styles.menuItem6 : styles.menuItem60
              }`}
            >
              İletişim
            </Box>
          </Link>
          <Link to="/admingirisi">
            <Box
              px={8}
              className={`${styles.menuItem} ${
                menuItemInOut ? styles.menuItem7 : styles.menuItem70
              }`}
            >
              Admin Girişi
            </Box>
          </Link>
        </Box>
      </Box>
    </div>
  );
}

export default Navbar;
