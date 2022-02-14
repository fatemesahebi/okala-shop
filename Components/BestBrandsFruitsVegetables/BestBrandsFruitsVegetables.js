import React, {Component} from "react";
import {Stack, Typography} from "@mui/material";
import CreateBrand from "../BrandsIconPart/CreateBrand";
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import {Box} from "@mui/material";


const brandsData = [
    {
        image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2Fmedia%2Findex%2FBrand%2F176695%2F&w=128&q=75",
        among: "|"
    },
    {
        image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2Fmedia%2Findex%2FBrand%2F388990%2F&w=128&q=75",
        among: "|"
    },
    {
        image: "https://new.okala.com/_next/image?url=%2Fstatic%2Fimages%2FsiteImages%2Fbackgrounds%2FInstacart.svg&w=128&q=75",
        among: "|"
    },
    {
        image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2Fmedia%2Findex%2FBrand%2F177235%2F&w=128&q=75",
        among: "|"
    },
    {
        image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2Fmedia%2Findex%2FBrand%2F177250%2F&w=128&q=75",
        among: "|"
    },
    {
        image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2Fmedia%2Findex%2FBrand%2F223601%2F&w=128&q=75",
        among: "|"
    },
    {
        image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2Fmedia%2Findex%2FBrand%2F365727%2F&w=128&q=75",
        among: "|"
    },
    {
        image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2Fmedia%2Findex%2FBrand%2F380372%2F&w=128&q=75",
        among: "|"
    },
    {
        image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2Fmedia%2Findex%2FBrand%2F177235%2F&w=128&q=75",
        among: "|"
    },
    {
        image: "https://new.okala.com/_next/image?url=%2Fstatic%2Fimages%2FsiteImages%2Fbackgrounds%2FInstacart.svg&w=128&q=75",
        among: "|"
    },
    {
        image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FBrand%2F177235&w=64&q=75",
        among: "|"
    },

]

function BestBrandsFruitsVegetables() {
    return (
        <Box style={{padding:"2% 32% 0 11%"}} display={{xl: 'block', lg: 'block', md: 'block', sm: 'none', xs: 'none'}}>
            <Typography sx={{fontWeight:"bold"}}>برترین برندها</Typography>
            <hr style={{color:"rgba(230,230,230,0.3)"}}/>
            <Box >
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
                            slidesPerView: 4,
                            spaceBetween: 15,
                        },
                        640: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        870: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
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
        </Box>
    )
}

export default BestBrandsFruitsVegetables;