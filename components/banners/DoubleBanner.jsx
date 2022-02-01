import {Box, Grid} from '@mui/material'

import Image from 'next/image'
import {css} from '@emotion/react';
import leftBanner from '../../public/images/banner_2_l.jpg'
import rightBanner from '../../public/images/banner_2_r.jpg'

const DoubleBanner = () => {

    return (
        <Box sx={{width:'1200px'}}>
        <Grid container spacing={0} xs={12}>
            <Grid item xs={6} container sx={{ justifyontent:'center'}}>
                <Image  style={{ borderRadius: '12px'}}src={rightBanner}/>
            </Grid>
            <Grid item xs={6} container sx={{ justifyontent:'center'}}>
                <Image  style={{ borderRadius: '12px'}}src={leftBanner}/>
            </Grid>
        </Grid>
        </Box>
    );
};
export default DoubleBanner;
