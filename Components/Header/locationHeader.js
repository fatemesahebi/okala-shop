import React from 'react';
import {Stack, Box, Typography, Button} from "@mui/material";
import ofoghKala from '../../public/images/ofoghKala.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PN from "persian-number";
import clockSvg from './../../public/SVG/clock.svg'
import location from './../../public/SVG/location.svg'
import Image from 'next/image'
import {styled} from "@mui/system";

const LocationTex = styled(Typography)(
    () => `
  font-size:0.85rem;
  padding:0 2px;
  font-weight:600;
  color:#8f8f8f;
  
    `
)



const LocationHeader = () => {
    return (
        <Stack sx={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', px: 5,my:3}}>
            <Stack sx={{flexDirection: 'row', alignItems: 'center'}}>
                <Box component='img' src={ofoghKala.src} sx={{pl: 2}}/>
                <Typography sx={{fontSize: '0.9rem', pl: 0.8}}>
                    خرید از
                </Typography>
                <Typography sx={{fontSize: '0.9rem', fontWeight: 700}}>افق کوروش</Typography>
                <Button sx={{
                    mx: 3,
                    border: "1px solid rgba(0, 0, 0, 0.23)",
                    color: 'darkGray.main',
                    borderRadius: '10px',
                    fontSize: "0.8rem",
                    px:2,
                    fontWeight:700,
                    "&:hover":{
                        backgroundColor:'lightGray.light'
                    },
                }}>تغییر فروشگاه</Button>
                <Stack sx={{flexDirection: 'row',alignItems:'center'}}>
                    <Image src={location}/>
                    <Typography sx={{px:1,fontWeight:600,fontSize:'.85rem',color:'darkGray.main'}}>تحویل در تهران، میدان آرژانتین</Typography>
                    <KeyboardArrowDownIcon color="action"/>
                </Stack>
            </Stack>

            <Stack sx={{flexDirection: 'row'}}>
                <Image src={clockSvg}/>
                <LocationTex sx={{pr:1.5}}>اولین بازه تحویل : ساعت </LocationTex>
                <LocationTex > {PN.convertEnToPe(17)}</LocationTex>
                <LocationTex >الی</LocationTex>
                <LocationTex>{PN.convertEnToPe(19)}</LocationTex>
            </Stack>


        </Stack>
    );
};

export default LocationHeader;