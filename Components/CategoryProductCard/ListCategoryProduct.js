import React,{Component} from "react";
import CategoryProduct from "./CategoryProduct";
import {Box} from "@mui/system";


const productList = [
    {image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FCategory%2F390613&w=384&q=75",text: "مواد غذایی"},
    {image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FCategory%2F390615&w=384&q=75",text: "نوشیدنی و دمنوش ها"},
    {image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FCategory%2F389665&w=384&q=75",text: "خواربار"},
    {image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FCategory%2F390614&w=384&q=75" ,text: "آرایشی بهداشتی"},
    {image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FCategory%2F389667&w=384&q=75",text: "میوه و سبزیجات"},
    {image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FCategory%2F389666&w=384&q=75",text: "ابزار و ملزومات"},
    {image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FCategory%2F389669&w=384&q=75",text: "لوازم التحریر و اداری"},
    {image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FCategory%2F389671&w=384&q=75",text: "مادر و کودک"},
    {image: "https://new.okala.com/_next/image?url=https%3A%2F%2Fcdn.okala.com%2FMedia%2FIndex%2FCategory%2F389670&w=384&q=75",text: "پوشاک"},
]
function ListCategoryProduct(){
    return(
        <div style={{ width: '100%' }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection:'row-reverse',
                    m:3,
                    p:2,
                    overflowX: "scroll",
                    overflowY: "hidden",
                    xs: 5, sm: 9, md: 9


                }}>
                {productList.map((item,index) => (<CategoryProduct key={index} imagesProducts={item.image} textProducts={item.text}/> ))}
            </Box>
        </div>
    )
}



export default ListCategoryProduct;