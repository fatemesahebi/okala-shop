import {Box, Grid} from '@mui/material'
import Image from 'next/image'
import leftBanner from '../../public/images/banner_2_l.jpg'
import rightBanner from '../../public/images/banner_2_r.jpg'
import styled from "@emotion/styled";

const DoubleBanner = () => {

    return (
        <Box   sx={{width:{lg:'81rem', xs: "100%"},margin:'auto'}}>
            <Grid container  spacing={1} >
                <Grid item xs={6} container >
                    <Image className={'banner'}  src={rightBanner}/>
                </Grid>
                <Grid item xs={6} container>
                    <Image className={'banner'}  src={leftBanner}/>
                </Grid>
            </Grid>
        </Box>
    );
};
export default DoubleBanner;
