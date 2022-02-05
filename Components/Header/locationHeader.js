import React from 'react';
import {Stack, Box, Typography, Button} from "@mui/material";
import ofoghKala from '../../public/SVG/logo-okala2.svg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PN from "persian-number";
import clockSvg from './../../public/SVG/clock.svg'
import location from './../../public/SVG/location.svg'
import Image from 'next/image'
import {styled} from "@mui/system";
import {useRef} from "react";
import LocationShopButton from "./LocationShopButton";

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
        <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"center"} width={"100vw"}
               sx={{backgroundColor: 'white.main',display:{xs:"none",md:"flex"}}}>

            <Stack flexDirection={"row"} alignItems={"center"} justifyContent={'space-between'}
                   width={{md: "90%", lg: "1280px"}}

                   sx={{ pt: 13}}>
                <Stack sx={{flexDirection: 'row', alignItems: 'center'}}>
                    <Box component='img' width={'70px'} src={ofoghKala.src} sx={{pl: 2}}/>
                    <Typography sx={{fontSize: '0.9rem', pl: 0.8, color: 'black.main'}}>
                        خرید از
                    </Typography>
                    <Typography sx={{fontSize: '0.9rem', fontWeight: 700, color: 'black.main'}}>اکالا</Typography>
                    <LocationShopButton/>
                    <Stack sx={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image src={location}/>
                        <Typography sx={{px: 1, fontWeight: 600, fontSize: '.85rem', color: 'darkGray.main'}}>تحویل در
                            تهران، میدان آرژانتین</Typography>
                        <KeyboardArrowDownIcon color="action"/>
                    </Stack>
                </Stack>

                <Stack sx={{flexDirection: 'row'}}>
                    <Image src={clockSvg}/>
                    <LocationTex sx={{pr: 1.5}}>اولین بازه تحویل : ساعت </LocationTex>
                    <LocationTex> {PN.convertEnToPe(17)}</LocationTex>
                    <LocationTex>الی</LocationTex>
                    <LocationTex>{PN.convertEnToPe(19)}</LocationTex>
                </Stack>

            </Stack>

        </Stack>
    );
};

export default LocationHeader;