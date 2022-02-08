import React from 'react';
import {Box, Container, Grid} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import winter from '../../public/images/winter.jpg'
import pril from '../../public/images/pril.jpg'
import bite from '../../public/images/bite.jpg'
import madline from '../../public/images/madline.jpg'
import breakfast from '../../public/images/breakfast.jpg'
import SwiperCore,{ Autoplay, Pagination, Navigation } from "swiper";
import { EffectFade } from 'swiper';
import 'swiper/css/effect-fade'
SwiperCore.use([EffectFade])
import Image from 'next/image'

const BannerSlider = () => {
    return (
        <Box >
            <Grid  container xs={12} spacing={2} style={{width:'81rem',margin:'auto', paddingRight: "1rem"}}>
                <Grid item xs={12} md={8}>
                    <Swiper spaceBetween={2} autoplay={{
                        delay: 5000, disableOnInteraction: false,}} effect={'fade'} pagination={{clickable: true}}  navigation={{nextEl: "#swiper-button-next-banner", prevEl: "#swiper-button-prev-banner"}} >
                        <Box component={"div"} sx={{
                            ":active,:hover": {
                                backgroundColor: "white !important"
                            },
                            transform: "translateX(-0.5rem)",
                            border: "1px solid rgba(0,0,0,0.3)",
                            borderRadius: "0.65rem !important",
                            margin: "0 !important",
                            color: "black !important",
                            boxShadow: "-7px 5px 30px -12px rgba(0,0,0,0.7)",
                            top: "45% !important",
                            right: "0 !important",
                            backgroundColor: "white !important",
                            minWidth: "2.3rem !important",
                            height: "3rem !important",
                        }} id={"swiper-button-prev-banner"} className={"swiper-button-prev"}>
                        </Box>
                        <Box component={"div"} sx={{
                            ":active,:hover": {
                                backgroundColor: "white"
                            },
                            transform: "translateX(0.5rem)",
                            border: "1px solid rgba(0,0,0,0.3)",
                            borderRadius: "0.65rem !important",
                            margin: "0 !important",
                            color: "black !important",
                            boxShadow: "7px 5px 30px -12px rgba(0,0,0,0.7)",
                            top: "45% !important",
                            left: "0 !important",
                            backgroundColor: "white !important",
                            minWidth: "2.3rem !important",
                            height: "3rem !important",
                        }} id={"swiper-button-next-banner"} className={"swiper-button-next"}>
                        </Box>
                        <SwiperSlide><Image className={'banner'} src={pril}/></SwiperSlide>
                        <SwiperSlide><Image className={'banner'} src={winter}/></SwiperSlide>
                    </Swiper>
                </Grid>


                <Grid  item container direction='column' spacing={1.7} md={4} sx={{display: {md: "block", xs: "none"}}}>
                    <Grid item container> <Image className={'banner'} src={bite}/></Grid>
                    <Grid item container> <Image className={'banner'} src={breakfast}/></Grid>
                    <Grid item container> <Image className={'banner'} src={madline}/></Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default BannerSlider;
