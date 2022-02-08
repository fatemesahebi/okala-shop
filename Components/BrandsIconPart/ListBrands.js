import React, {Component} from "react";
import {Stack} from "@mui/material";
import CreateBrand from "./CreateBrand";
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import {Box} from "@mui/material";


const brandsData = [
    {
        image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FBrand%2F177235&w=64&q=75",
        among: "|"
    },
    {
        image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FBrand%2F178004&w=64&q=75",
        among: "|"
    },
    {
        image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FBrand%2F177253&w=64&q=75",
        among: "|"
    },
    {
        image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FBrand%2F201484&w=64&q=75",
        among: "|"
    },
    {
        image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FBrand%2F165276&w=64&q=75",
        among: "|"
    },
    {
        image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FBrand%2F178004&w=64&q=75",
        among: "|"
    },
    {
        image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FBrand%2F178004&w=64&q=75",
        among: "|"
    },
    {
        image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FBrand%2F165206&w=64&q=75",
        among: "|"
    },
    {
        image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FBrand%2F201484&w=64&q=75",
        among: "|"
    },
    {
        image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FBrand%2F165276&w=64&q=75",
        among: "|"
    },
    {
        image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FBrand%2F177235&w=64&q=75",
        among: "|"
    },

]

function ListBrands() {
    return (
        <div>
            <Box sx={{width:{lg: "81rem !important" , xs: "100vw"}, margin:"auto"}}>
                <Swiper
                    style={{width: "100%"}}
                    slidesPerView={2}
                    spaceBetween={10}
                    breakpoints={{
                        300: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                        400: {
                            slidesPerView: 4,
                            spaceBetween: 11,
                        },
                        500: {
                            slidesPerView: 5,
                            spaceBetween: 15,
                        },
                        640: {
                            slidesPerView: 6,
                            spaceBetween: 20,
                        },
                        870: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 8.5,
                            spaceBetween: 50,
                        },
                        1400: {
                            slidesPerView: 8,
                            spaceBetween: 60,
                        },
                    }}
                >
                    {brandsData.map((item, index) => (
                        <SwiperSlide> <CreateBrand key={index} imageBrand={item.image} amongs={item.among}/>
                        </SwiperSlide>))}
                </Swiper>
            </Box>
        </div>
    )
}

export default ListBrands;