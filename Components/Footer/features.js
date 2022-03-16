import React, { Component } from "react";
import Feature from "./feature";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";

const featuresData = [
  {
    src: "https://okala.com/_next/image?url=%2Fstatic%2Fimages%2FsiteImages%2Fbackgrounds%2FLayer%2001.png&w=128&q=75",
    text: "ارسال سریع",
  },
  {
    src: "https://okala.com/_next/image?url=%2Fstatic%2Fimages%2FsiteImages%2Fbackgrounds%2FLayer%2002.png&w=128&q=75",
    text: "ضمانت بازگشت کالا",
  },
  {
    src: "https://okala.com/_next/image?url=%2Fstatic%2Fimages%2FsiteImages%2Fbackgrounds%2FLayer%2003.png&w=128&q=75",
    text: "پرداخت در محل",
  },
  {
    src: "https://okala.com/_next/image?url=%2Fstatic%2Fimages%2FsiteImages%2Fbackgrounds%2FLayer%2004.png&w=128&q=75",
    text: "تا ۵۰ درصد تخفیف",
  },
];
function Features() {
  return (
    <Box
      display="grid"
      justifyContent="space-around"
      alignItems="center"
      flexWrap={"wrap"}
      gridTemplateColumns={"repeat(12,1fr)"}
    >
      {featuresData.map((item) => (
        <Feature imagesrc={item.src} text={item.text} key={item.text} />
      ))}
    </Box>
  );
}

export default Features;
