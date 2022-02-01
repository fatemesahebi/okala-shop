import React from 'react';
import {Box, Container,Grid} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import winter from '../../public/images/winter.jpg'
import pril from '../../public/images/pril.jpg'
import bite from '../../public/images/bite.jpg'
import madline from '../../public/images/madline.jpg'
import breakfast from '../../public/images/breakfast.jpg'

import Image from 'next/image'
const BannerSlider = () => {
    return (

            <Grid container style={{backgroundColor:'red',marginBottom:'50px',width:'70vw'}}>

                <Swiper style={{marginRight:'50px'}} navigation pagination slidesPerView={1} initialSlide='1'>
                     <SwiperSlide><Image src={pril}/></SwiperSlide>
                     <SwiperSlide><Image src={winter}/></SwiperSlide>
                </Swiper>
                <Grid container>
                    <Grid container> <Image src={bite}/></Grid>
                    <Grid container> <Image src={breakfast}/></Grid>
                    <Grid container> <Image src={madline}/></Grid>

                </Grid>
            </Grid>
        
    );
};

export default BannerSlider;
