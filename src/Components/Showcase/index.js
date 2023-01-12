import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import image1 from "../../images/1evraklar.jpg";
import image2 from "../../images/2.jpeg";
import image3 from "../../images/3.jpeg";
import image4 from "../../images/4.jpg";
import image5 from "../../images/5.webp";
import image6 from "../../images/6.jpeg";
import image7 from "../../images/7.webp";

const images = [
  { url: image1 },
  { url: image2 },
  { url: image3 },
  { url: image4 },
  { url: image5 },
  { url: image6 },
  { url: image7 },
];

function Showcase() {
  return (
    <Box width="100%" height="100vh" position="relative">
      <SimpleImageSlider
        width={1200}
        height={600}
        images={images}
        showBullets={true}
        showNavs={true}
        loop={true}
        autoPlay={true}
        autoPlayDelay={5.0}
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
          top: "85%",
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
          Button
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
          Button
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
          Button
        </Button>
      </ButtonGroup>
    </Box>
  );
}

export default Showcase;
