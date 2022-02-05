import {okalaBlog} from "../../lib/mirage/dataOKB";
import {useState} from "react";
import OkalaBlogElement from "./OkalaBlogElement";
import {Box, Container, Grid, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Swiper, SwiperSlide} from "swiper/react";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

const OkalaBlog = () => {
    return (
        <Stack>
            <Container style={{display:'flex',justifyContent:'center'}}>
                <Grid container style={{
                    backgroundColor: 'red',
                    width: '84vw',
                    padding: '10px',
                }}>
                    <Swiper slidesPerView={4} initialSlide='0'>
                        {okalaBlog.map(blogItem => <SwiperSlide><OkalaBlogElement key={blogItem.id}
                                                                                  blogItem={blogItem}/></SwiperSlide>)}
                    </Swiper>
                </Grid>
            </Container>
        </Stack>
    );
};

export default OkalaBlog;
