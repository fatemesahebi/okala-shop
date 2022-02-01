import React,{Component} from "react";
import {Stack} from "@mui/material";
import CreateBrand from "./CreateBrand";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";


const brandsData = [
    {image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FBrand%2F177235&w=64&q=75", among:"|"},
    {image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FBrand%2F178004&w=64&q=75", among:"|"},
    {image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FBrand%2F177253&w=64&q=75", among:"|"},
    {image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FBrand%2F201484&w=64&q=75", among:"|"},
    {image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FBrand%2F165276&w=64&q=75", among:"|"},
    {image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FBrand%2F178004&w=64&q=75", among:"|"},
    {image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FBrand%2F178004&w=64&q=75", among:"|"},
    {image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FBrand%2F165206&w=64&q=75", among:"|"},
    {image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FBrand%2F201484&w=64&q=75", among:"|"},
    {image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FBrand%2F165276&w=64&q=75", among:"|"},
    {image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FBrand%2F177235&w=64&q=75", among:"|"},

]
function ListBrands(){
    return(
        <div>
            <Swiper watchSlidesProgress={true} slidesPerView={10.9}>
                {brandsData.map((item,index) => (<SwiperSlide> <CreateBrand key={index} imageBrand={item.image} amongs={item.among}/> </SwiperSlide>))}
            </Swiper>
        </div>
    )
}
export default ListBrands;