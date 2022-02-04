import {okalaBlog} from "../../lib/mirage/dataOKB";
import {useState} from "react";
import OkalaBlogElement from "./OkalaBlogElement";
import {Box, Container, Grid, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Swiper, SwiperSlide} from "swiper/react";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

const OkalaBlog = () => {
    return (
        <div style={{width: '1310px', marginTop: '50px', marginRight: '50px'}}>
            <Stack>
                <Grid container sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Grid  container sx={{display: 'flex', justifyContent: 'flex-start',alignContent:'center',alignItems:'center',justifyItems:'center'}}><Typography>اُکالا بلاگ</Typography></Grid>
                        <Grid ><Typography>مشاهده همه</Typography></Grid>
                        <Grid ><Typography><ArrowBackIosNewOutlinedIcon/></Typography></Grid>
                </Grid>
            </Stack>

            <Box>
                <Swiper style={{marginRight: '-22px'}} slidesPerView={4} initialSlide='0'>
                    {okalaBlog.map(blogItem => <SwiperSlide><OkalaBlogElement key={blogItem.id}
                                                                              blogItem={blogItem}/></SwiperSlide>)}
                </Swiper>

            </Box>
        </div>
    );
};

export default OkalaBlog;
