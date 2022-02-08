import {okalaBlog} from "../../lib/mirage/dataOKB";
import {useState} from "react";
import OkalaBlogElement from "./OkalaBlogElement";
import {Box, Container, Grid, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Swiper, SwiperSlide} from "swiper/react";
import OkalaBlogHeader from "./OkalaBlogHeader";

const OkalaBlog = () => {
    return (
        <Container >
            <Container style={{display:'flex',justifyContent:'center'}}>
                <Grid container sx={{
                    padding: '20px',
                    width: {lg:'85rem' , xs:"95vw"}

                }}>
                    <Swiper initialSlide='0' breakpoints={{320:{slidesPerView:1},375:{slidesPerView:1},425:{slidesPerView:1.5,spaceBetween:15},768:{slidesPerView:2.5},1024:{slidesPerView:3,spaceBetween:22},1440:{slidesPerView:4}}}>
                        {okalaBlog.map(blogItem => <SwiperSlide><OkalaBlogElement key={blogItem.id}
                                                                                  blogItem={blogItem}/></SwiperSlide>)}
                    </Swiper>
                </Grid>
            </Container>
        </Container>
    );
};

export default OkalaBlog;
// breakpoints={{
//                             480: {
//                                 slidesPerView: 2.9,
//                             },
//                             1532: {
//                                 slidesPerView: 4.5,
//                             }
//                         }}
