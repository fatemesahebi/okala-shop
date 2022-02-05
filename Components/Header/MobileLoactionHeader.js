import React from 'react';
import okalaLogo from '../../public/SVG/logo-okala2.svg'
import {Stack, Typography,Box} from '@mui/material'
import styled from "@emotion/styled";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import LocationShopButton from "./LocationShopButton";
import location from './../../public/SVG/location.svg'


const StyledFlexRow= styled.div({
    display:'flex',
 flexDirection:"row",
    justifyContent:'space-between',
    padding:'20px 25px',
    alignItems:"center",
    width:"100%",

})

const MobileLoactionHeader = () => {
    return (
        <Stack alignItems={"center"} justifyContent={"space-between"} width={"100vw"} sx={{display:{md:"none"},mb:3}} >
            <StyledFlexRow >
                <Stack alignItems={"center"} flexDirection={"row"}>
                    <Box component='img' src={okalaLogo.src} width={'50px'} sx={{ml:3}}/>
                    <Typography fontWeight={700} fontSize={"0.85rem"}>اکالا</Typography>
                </Stack>
                <LocationShopButton/>
            </StyledFlexRow>

            <StyledFlexRow>
                <Stack flexDirection={"row"} width={'80%'} alignItems={"center"}>
                    <Box src={location.src} component='img'/>
                    <Typography sx={{px: 1, fontWeight: 600, fontSize: '.75rem', color: 'darkGray.main',width:"70%"}}>تحویل در
                        تهران، میدان آرژانتین</Typography>
                </Stack>
                <ArrowBackIosNewIcon fontSize={"8px"} fontWeight={400}/>
            </StyledFlexRow>
        </Stack>
    );
};

export default MobileLoactionHeader;