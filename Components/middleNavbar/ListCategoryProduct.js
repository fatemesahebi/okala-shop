import React,{Component} from "react";
import CategoryProduct from "./CategoryProduct";
import {Box} from "@mui/system";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";


const productList = [
    {image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FCategory%2F389670&w=384&q=75",text: "پوشاک"},
    {image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FCategory%2F389671&w=384&q=75",text: "مادر و کودک"},
    {image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FCategory%2F389669&w=384&q=75",text: "لوازم التحریر و اداری"},
    {image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FCategory%2F389666&w=384&q=75",text: "ابزار و ملزومات"},
    {image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FCategory%2F389667&w=384&q=75",text: "میوه و سبزیجات"},
    {image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FCategory%2F390614&w=384&q=75" ,text: "آرایشی بهداشتی"},
    {image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FCategory%2F389665&w=384&q=75",text: "خواربار"},
    {image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FCategory%2F390615&w=384&q=75",text: "نوشیدنی و دمنوش ها"},
    {image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FCategory%2F390613&w=384&q=75",text: "مواد غذایی"},
]
function ListCategoryProduct(){
    return(
        <div style={{ width: '100%',fontSize:".5rem" }}>
            <Swiper
                slidesPerView={2}
                spaceBetween={2}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    300: {
                        slidesPerView: 2,
                        spaceBetween: 1,
                    },
                    405: {
                        slidesPerView: 3,
                        spaceBetween: 2,
                    },
                    640: {
                        slidesPerView: 5,
                        spaceBetween: 2,
                    },
                    870: {
                        slidesPerView: 5,
                        spaceBetween: 3,
                    },
                    1000: {
                        slidesPerView: 6,
                        spaceBetween: 2,
                    },
                    1024: {
                        slidesPerView: 7,
                        spaceBetween: 2,
                    },
                    1280: {
                        slidesPerView: 9,
                        spaceBetween: 1,
                    },
                    1800: {
                        slidesPerView: 11,

                    },
                }}
            >

                    {productList.map((item,index) => (<SwiperSlide><CategoryProduct key={index} imagesProducts={item.image} textProducts={item.text}/> </SwiperSlide>))}
            </Swiper>
        </div>
    )
}



export default ListCategoryProduct;