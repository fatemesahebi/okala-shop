import React, { Component } from "react";
import MiddleNavbar from "./MiddleNavbar";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const productList = [
  {
    image:
      "https://okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FCategory%2F390613&w=384&q=75",
    text: "مواد غذایی",
    group: "foodStuffs",
  },
  {
    image:
      "https://okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FCategory%2F390615&w=384&q=75",
    text: "نوشیدنی و دمنوش ها",
    group: "drinks",
  },
  {
    image:
      "https://okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FCategory%2F389665&w=384&q=75",
    text: "خواربار",
    group: "food",
  },
  {
    image:
      "https://okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FCategory%2F390614&w=384&q=75",
    text: "آرایشی بهداشتی",
    group: "Cosmetics",
  },
  {
    image:
      "https://okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FCategory%2F389667&w=384&q=75",
    text: "میوه و سبزیجات",
    group: "fruitsVegetables",
  },
  {
    image:
      "https://okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FCategory%2F389666&w=384&q=75",
    text: "ابزار و ملزومات",
    group: "tools",
  },
  {
    image:
      "https://okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FCategory%2F389669&w=384&q=75",
    text: "لوازم التحریر و اداری",
    group: "office",
  },
  {
    image:
      "https://okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FCategory%2F389671&w=384&q=75",
    text: "مادر و کودک",
    group: "motherChild",
  },
  {
    image:
      "https://okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FCategory%2F389670&w=384&q=75",
    text: "پوشاک",
    group: "clothing",
  },
];

function ListMiddleNavbar() {
  return (
    <Box
      sx={{
        margin: "auto",
        width: { xs: "100%", lg: "85rem" },
        fontSize: ".875rem",
        fontWeight: "bold",
        cursor: "pointer",
      }}
    >
      <Swiper
        slidesPerView={3}
        spaceBetween={2}
        breakpoints={{
          300: {
            slidesPerView: 3,
            spaceBetween: 1,
          },
          405: {
            slidesPerView: 4,
            spaceBetween: 2,
          },
          740: {
            slidesPerView: 5,
            spaceBetween: 2,
          },
          960: {
            slidesPerView: 6,
            spaceBetween: 3,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 2,
          },
          1280: {
            slidesPerView: 8.9,
            spaceBetween: 1,
          },
          1800: {
            slidesPerView: 9,
            spaceBetween: 1,
          },
        }}
      >
        {productList.map((item, index) => (
          <SwiperSlide key={index}>
            <MiddleNavbar
              imagesProducts={item.image}
              textProducts={item.text}
              group={item.group}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default ListMiddleNavbar;
