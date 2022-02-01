import React from 'react';
import {Box, Container, Grid} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import winter from '../../public/images/winter.jpg'
import pril from '../../public/images/pril.jpg'
import bite from '../../public/images/bite.jpg'
import madline from '../../public/images/madline.jpg'
import breakfast from '../../public/images/breakfast.jpg'
import { Autoplay, Pagination, Navigation } from "swiper";
import { EffectFade } from 'swiper';
//swiper/scss/effect-fade
import Image from 'next/image'

const BannerSlider = () => {
    return (
        <Box >
            <Grid  container xs={12} spacing={2} style={{width:'85vw'}}>
                <Grid item xs={8}>
                    <Swiper spaceBetween={2} autoplay={{
                        delay: 5000, disableOnInteraction: false,}} effect={'fade'} pagination={{clickable: true,}}  navigation={true} >
                        <SwiperSlide><Image src={pril}/></SwiperSlide>
                        <SwiperSlide><Image src={winter}/></SwiperSlide>
                    </Swiper>
                </Grid>


                <Grid  item container direction='column' spacing={1} xs={4}>
                    <Grid item container> <Image src={bite}/></Grid>
                    <Grid item container> <Image src={breakfast}/></Grid>
                    <Grid item container> <Image src={madline}/></Grid>

                </Grid>
            </Grid>
        </Box>
    );
};

export default BannerSlider;
