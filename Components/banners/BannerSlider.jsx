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
            <Grid  container xs={12} spacing={2} style={{width:'85vw',marginRight:'8vw'}}>
                <Grid item xs={8}>
                    <Swiper spaceBetween={2} autoplay={{
                        delay: 5000, disableOnInteraction: false,}} effect={'fade'} pagination={{clickable: true}}  navigation={true} >
                        <SwiperSlide><Image className={'banner'} src={pril}/></SwiperSlide>
                        <SwiperSlide><Image className={'banner'} src={winter}/></SwiperSlide>
                    </Swiper>
                </Grid>


                <Grid  item container direction='column' spacing={1} xs={4}>
                    <Grid item container> <Image className={'banner'} src={bite}/></Grid>
                    <Grid item container> <Image className={'banner'} src={breakfast}/></Grid>
                    <Grid item container> <Image className={'banner'} src={madline}/></Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default BannerSlider;
