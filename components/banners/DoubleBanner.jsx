import React from 'react';
import {Box, Grid} from '@mui/material'
import {useStyles} from '../banners/style.banner'
import Image from 'next/image'
import leftBanner from '../../public/images/banner_2_l.jpg'
import rightBanner from '../../public/images/banner_2_r.jpg'
const DoubleBanner = () => {
    const classes = useStyles()
    return (
        <Grid className={classes.bannerSection}container spacing xs={12} sm={12} md={12} lg={12}>
            <Grid item xs={6}>
                <Image src={rightBanner}/>
            </Grid>
            <Grid item xs={6}>
                <Image src={leftBanner}/>
            </Grid>
        </Grid>
    );
};
export default DoubleBanner;
