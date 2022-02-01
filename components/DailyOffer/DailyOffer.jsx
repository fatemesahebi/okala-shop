import {Box, Container} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import Countdown from "./Countdown/Countdown";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Pagination, Autoplay, Navigation} from "swiper";
import {productData} from "../productCard/ProductCardData";
import SingleProduct from "../productCard/ProductCardElements";
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

SwiperCore.use([Pagination, Autoplay, Navigation])

const DailyOffer = () => {
    const [pageWidth, setPageWidth] = useState(0)
    const containerRef = useRef(null)
    const parentRef = useRef(null)

    useEffect(() => {
        setPageWidth(window.innerWidth)

        function handleResize() {
            setPageWidth(window.innerWidth)
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])
    const handlePrevPage = () => {
        parentRef.current.scrollLeft += 250
    }
    const handleNextPage = () => {
        parentRef.current.scrollLeft -= 250
    }
    return pageWidth > 1230 ? (
            <Container dir="rtl" ref={containerRef} sx={{
                display: "flex",
                flexDirection: "row",
                width: "100vw",
                maxWidth: "100vw !important",
                margin: "0 !important",
                boxSizing: "border-box",
                height: "27.5rem !important",
                padding: "0 !important",
                backgroundColor: "rgba(240, 20, 54, 1)",
                backgroundImage: "url(https://new.okala.com/static/images/siteImages/backgrounds/slidersPrimary.svg)",
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
                justifyItems: "center"
            }}>
                <Countdown/>
                <Box dir="rtl" sx={{
                    width: {
                        xl: "70rem",
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
                        transform: "scale(-1) translateX(2rem) ",
                        border: "1px solid rgba(0,0,0,0.3)",
                        borderRadius: "0.65rem !important",
                        margin: "0 !important",
                        color: "red !important",
                        boxShadow: "-7px 5px 30px -12px rgba(0,0,0,0.7)",
                        top: "45% !important",
                        right: "0 !important",
                        backgroundColor: "white !important",
                        minWidth: "3rem !important",
                        height: "3rem !important",
                    }} className={"swiper-button-prev"}>
                    </Box>
                    <Swiper
                        style={{
                            display: "flex",
                            maxWidth: "95%",
                            padding: "0.5rem",
                            flexDirection: "row",
                            flexGrow: "0",
                            flexShrink: "0",
                            overflowX: "hidden",
                            scrollBehavior: "smooth",
                            margin: "0 !important"
                        }}
                        ref={parentRef}
                        direction={'horizontal'}
                        navigation={{nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"}}
                        slidesPerView={4.5}
                        breakpoints={{
                            480: {
                                slidesPerView: 2.9,
                            },
                            1532: {
                                slidesPerView: 4.5,
                            }
                        }}
                        spaceBetween={5}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false
                        }}
                    >
                        {[0, 1, 2, 3, 4, 5].map(item => (
                            <SwiperSlide>
                                <SingleProduct key="1" product={productData[0]}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Box component={"div"} sx={{
                        ":active,:hover": {
                            backgroundColor: "white"
                        },
                        position: "relative !important",
                        transform: "scale(-1) translateX(-2rem)",
                        border: "1px solid rgba(0,0,0,0.3)",
                        borderRadius: "15px !important",
                        margin: "0 !important",
                        color: "red !important",
                        boxShadow: "7px 5px 30px -12px rgba(0,0,0,0.7)",
                        top: "45% !important",
                        left: "0 !important",
                        backgroundColor: "white !important",
                        minWidth: "3rem !important",
                        height: "3rem !important",
                    }} className={"swiper-button-next"}>
                    </Box>
                </Box>
            </Container>
        )
        :
        (
            <Container dir="rtl" ref={containerRef} sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "1rem",
                gap: "1rem",
                width: "100vw",
                maxWidth: "100vw !important",
                margin: "0 !important",
                boxSizing: "border-box",
                height: "27.5rem !important",
                backgroundColor: "rgba(240, 20, 54, 1)",
                backgroundImage: "url(https://new.okala.com/static/images/siteImages/backgrounds/slidersPrimary.svg)",
                overflowX: "scroll"
            }}>
                <Countdown/>
                <Container sx={{
                    display: "flex",
                    maxWidth: "90%",
                    gap: "0.7rem",
                    padding: "0.5rem",
                    flexDirection: "row",
                    flexGrow: "0",
                    flexShrink: "0",
                    overflowX: "visible",
                    scrollBehavior: "smooth",
                    margin: "0 !important"
                }}>
                    {[0, 1, 2, 3, 4, 5].map(item => (
                        <SingleProduct key="1" product={productData[0]}/>
                    ))}
                </Container>
            </Container>
        )
}

export default DailyOffer