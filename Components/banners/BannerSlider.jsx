import React from 'react';
import {Box, Container, Grid} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import winter from '../../public/images/winter.jpg'
import pril from '../../public/images/pril.jpg'
import bite from '../../public/images/bite.jpg'
import madline from '../../public/images/madline.jpg'
import breakfast from '../../public/images/breakfast.jpg'
import SwiperCore, {Autoplay, Pagination, Navigation} from "swiper";
import {EffectFade} from 'swiper';
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import 'swiper/css/effect-fade'

SwiperCore.use([EffectFade])
SwiperCore.use([Pagination, Autoplay, Navigation])
import Image from 'next/image'

const BannerSlider = () => {

    return (
        <div style={{display:'flex',justifyContent:'center'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', width: '85vw',alignItems:'center',padding:'10px'}}>

                <Swiper spaceBetween={2} autoplay={{delay: 5000}} effect={'fade'} pagination={true}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev"
                        }}>
                    <SwiperSlide><Image className={'banner'} src={pril}/></SwiperSlide>
                    <SwiperSlide><Image className={'banner'} src={winter}/></SwiperSlide>
                </Swiper>
                <div style={{display: 'flex', flexDirection: 'column',width:'55vw'}}>
                    <div><Image className={'banner'} src={bite}/></div>
                    <div><Image className={'banner'} src={breakfast}/></div>
                    <div><Image className={'banner'} src={madline}/></div>
                </div>
            </div>
        </div>
    );
};
//<div style={{backgroundColor:'red'}}>
//             <div style={{backgroundColor:'blue',display:'flex',flexDirection:'row'}}>
//             <div>
//                 <Swiper  spaceBetween={2} autoplay={{delay: 5000}} effect={'fade'} pagination={true}
//                         navigation={{
//                             nextEl: ".swiper-button-next",
//                             prevEl: ".swiper-button-prev"
//                         }}>
//                     <SwiperSlide><Image className={'banner'} src={pril}/></SwiperSlide>
//                     <SwiperSlide><Image className={'banner'} src={winter}/></SwiperSlide>
//                 </Swiper>
//             </div>
//             </div>
//             <div style={{display:'flex',flexDirection:'column',width:'100px',backgroundColor:'yellow'}}>
//                 <div><Image className={'banner'} src={bite}/></div>
//                 <div><Image className={'banner'} src={breakfast}/></div>
//                 <div><Image className={'banner'} src={madline}/></div>
//             </div>
//         </div>

export default BannerSlider;
//<Container dir="rtl" ref={containerRef} sx={{
//                 display: "flex",
//                 flexDirection: "row",
//                 width: "100vw",
//                 maxWidth: "100vw !important",
//                 margin: "0 !important",
//                 boxSizing: "border-box",
//                 height: "27.5rem !important",
//                 padding: "0 !important",
//                 alignContent: "center",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 justifyItems: "center"
//             }}>
//                 <Countdown/>
//                 <Box dir="rtl" sx={{
//                     width: {
//                         xl: "70rem",
//                         lg: "47.5rem",
//                     },
//                     display: "flex",
//                     alignItems: "center",
//                     alignContent: "center",
//                     justifyItems: "center",
//                     justifyContent: "center"
//                 }} component={"div"}>
//                     <Box component={"div"} sx={{
//                         ":active,:hover": {
//                             backgroundColor: "white !important"
//                         },
//                         position: "relative !important",
//                         transform: "scale(-1) translateX(2rem) ",
//                         border: "1px solid rgba(0,0,0,0.3)",
//                         borderRadius: "0.65rem !important",
//                         margin: "0 !important",
//                         color: "red !important",
//                         boxShadow: "-7px 5px 30px -12px rgba(0,0,0,0.7)",
//                         top: "45% !important",
//                         right: "0 !important",
//                         backgroundColor: "white !important",
//                         minWidth: "3rem !important",
//                         height: "3rem !important",
//                     }} className={"swiper-button-prev"}>
//                     </Box>
//                     <Swiper
//                         style={{
//                             display: "flex",
//                             maxWidth: "95%",
//                             padding: "0.5rem",
//                             flexDirection: "row",
//                             flexGrow: "0",
//                             flexShrink: "0",
//                             overflowX: "hidden",
//                             scrollBehavior: "smooth",
//                             margin: "0 !important"
//                         }}
//                         ref={parentRef}
//                         direction={'horizontal'}
//                         navigation={{nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"}}
//                         autoplay={{
//                             delay: 5000,
//                             disableOnInteraction: false
//                         }}
//                     >
//
//                             <SwiperSlide>
//                                 <SingleProduct key={item.id} product={item}/>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>
//                     <Box component={"div"} sx={{
//                         ":active,:hover": {
//                             backgroundColor: "white"
//                         },
//                         position: "relative !important",
//                         transform: "scale(-1) translateX(-2rem)",
//                         border: "1px solid rgba(0,0,0,0.3)",
//                         borderRadius: "15px !important",
//                         margin: "0 !important",
//                         color: "red !important",
//                         boxShadow: "7px 5px 30px -12px rgba(0,0,0,0.7)",
//                         top: "45% !important",
//                         left: "0 !important",
//                         backgroundColor: "white !important",
//                         minWidth: "3rem !important",
//                         height: "3rem !important",
//                     }} className={"swiper-button-next"}>
//                     </Box>
//                 </Box>
//             </Container>
// <Grid container xs={12} spacing={2} style={{width: '85vw', marginRight: '8vw'}}>
//                 <Grid item xs={8}>
//                     <Grid container>
//                         <Grid xs={5} sx={{backgroundColor: 'red'}} className={'swiper-button-prev'}>
//                             cc
//                         </Grid>
//
//                         <Grid className={'swiper-button-next'}>
//                             ccc
//                         </Grid>
//                     </Grid>
//
//                 </Grid>
//
//
//                 <Grid item container direction='column' spacing={1} xs={4}>
//
//                 </Grid>
//             </Grid>
//         </Box>
