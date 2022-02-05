import {Box, Container, Typography} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation} from "swiper";
import SingleProduct from "../productCard/ProductCardElements";
import {productData} from "../productCard/ProductCardData";
import "swiper/css"
import "swiper/css/navigation"
import {useEffect, useState} from "react";
import {getAllProducts, getCategoryProducts, getMostOffProducts, getMostSaleProducts} from "../../lib/axios/getData";

SwiperCore.use([Navigation])

const CategoryProducts = ({category}) => {
    const [products , setProducts] = useState([])
    useEffect(()=> {
        if(category === "محصولات جدید") {
            getAllProducts()
                .then(data => setProducts(data.products))
                .catch(res => alert(res.status))
        }
        else if (category === "پرفروشترین در منطقه شما"){
            getMostSaleProducts()
                .then(data => setProducts(data.products))
                .catch(res => alert(res.status))
        }
        else if (category === "پرتخفیف ترین ها"){
            getMostOffProducts()
                .then(data => setProducts(data.products))
                .catch(res => alert(res.status))
        }
        else {
            getCategoryProducts(category)
                .then(data => setProducts(data.products))
                .catch(res => alert(res.status))
        }
    },[])
    return (
        <Container dir="rtl" maxWidth="100vw" sx={{
            margin: "1rem auto !important",
            width: "85rem",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0px 2px 8px 1px rgb(22 22 22 / 4%)"
        }}>
            <Box sx={{
                height: "3rem",
                display: "inline-flex",
                alignContent: "center",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                <Box sx={{
                    display: "inline-flex",
                    gap: "10px"
                }}>
                    <Box sx={{
                        height: "1.5rem",
                        border: "4px solid rgba(124, 200, 204, 1)",
                        borderRadius: "100px"
                    }}>
                    </Box>
                    <Typography sx={{
                        fontWeight: "bold"
                    }}>
                        {category}
                    </Typography>
                </Box>
                <Box>
                    <Typography sx={{
                        fontWeight: "bold",
                        color: "#02a0a4"
                    }}>
                        مشاهده همه
                    </Typography>
                </Box>
            </Box>
            <Box dir="rtl" sx={{
                width: {
                    xl: "85rem",
                    lg: "47.5rem",
                },
                display: "flex",
                alignItems: "center",
                alignContent: "center",
                justifyItems: "center",
                justifyContent: "center"
            }} component={"div"}>
                <Box component={"div"} sx={{
                    ":active,:hover": {
                        backgroundColor: "white !important"
                    },
                    position: "relative !important",
                    transform: "scale(-1)",
                    border: "1px solid rgba(0,0,0,0.3)",
                    borderRadius: "0.65rem !important",
                    margin: "0 !important",
                    color: "black !important",
                    boxShadow: "-7px 5px 30px -12px rgba(0,0,0,0.7)",
                    top: "45% !important",
                    right: "0 !important",
                    backgroundColor: "white !important",
                    minWidth: "3rem !important",
                    height: "3rem !important",
                }} id={"swiper-button-prev-"+category.slice(0,3)} className={"swiper-button-prev"}>
                </Box>
                <Swiper
                    style={{
                        transform: "translateX(1.5rem)",
                        display: "flex",
                        maxWidth: "100%",
                        padding: "0.5rem",
                        flexDirection: "row",
                        flexGrow: "0",
                        flexShrink: "0",
                        overflowX: "hidden",
                        scrollBehavior: "smooth",
                        margin: "0 !important"
                    }}
                    navigation={{
                        nextEl: "#swiper-button-next-"+category.slice(0,3),
                        prevEl: "#swiper-button-prev-"+category.slice(0,3),
                    }}
                    spaceBetween={0}
                    slidesPerView={"auto"}
                >
                    {products.slice(0,10).map(item => (
                        <SwiperSlide style={{
                            width: "220px"
                        }}>
                            <Box sx={{
                                border: "1px solid rgba(0,0,0,0.1)"
                            }}>
                                <SingleProduct key={item.id} product={item}/>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Box component={"div"} sx={{
                    ":active,:hover": {
                        backgroundColor: "white"
                    },
                    position: "relative !important",
                    transform: "scale(-1) translateX(-3.5rem)",
                    border: "1px solid rgba(0,0,0,0.3)",
                    borderRadius: "15px !important",
                    margin: "0 !important",
                    color: "black !important",
                    boxShadow: "7px 5px 30px -12px rgba(0,0,0,0.7)",
                    top: "45% !important",
                    left: "0 !important",
                    backgroundColor: "white !important",
                    minWidth: "3rem !important",
                    height: "3rem !important",
                    zIndex: 10
                }} id={"swiper-button-next-"+category.slice(0,3)} className={"swiper-button-next"}>
                </Box>
            </Box>
        </Container>
    )
}

export default CategoryProducts