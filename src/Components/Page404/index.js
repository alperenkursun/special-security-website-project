import { Text } from "@chakra-ui/react";
import React from "react";

function Page404() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Text
        fontSize="6xl"
        style={{ transform: "translateY(-80%)", color: "red" }}
      >
        404 Sayfa Bulunamadı!
      </Text>
      <hr></hr>
      <Text
        fontSize="6xl"
        style={{ transform: "translateY(-80%)", color: "red" }}
      >
        404 Page Not Found!
      </Text>
    </div>
  );
}

export default Page404;
