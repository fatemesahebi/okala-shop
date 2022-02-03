import {okalaBlog} from "../../lib/mirage/dataOKB";
import {useState} from "react";
import OkalaBlogElement from "./OkalaBlogElement";
import {Box, Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Swiper, SwiperSlide} from "swiper/react";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

const OkalaBlogList = () => {
    return (
        <div style={{width: '1310px', marginTop: '50px', marginRight: '50px'}}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignContent: 'center',
                alignItems: 'center',
                justifyItems: 'center',
            }}>
                <Typography>اُکالا بلاگ</Typography>
                <Typography>مشاهده همه<ArrowBackIosNewOutlinedIcon/></Typography>
            </div>

            <Box>
                <Swiper style={{marginRight: '-22px'}} slidesPerView={4} initialSlide='0'>
                    {okalaBlog.map(blogItem => <SwiperSlide><OkalaBlogElement key={blogItem.id}
                                                                           blogItem={blogItem}/></SwiperSlide>)}
                </Swiper>

            </Box>
        </div>
    );
};

export default OkalaBlogList;
