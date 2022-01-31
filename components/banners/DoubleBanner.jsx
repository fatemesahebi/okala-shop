import React from 'react';
import {Box, Grid} from '@mui/material'
import {useStyles} from '../../../okala/styles/style.banner'

const DoubleBanner = () => {
    const classes = useStyles()
    return (
        <Grid className={classes.bannerSection} container spacing xs={12} sm={12} md={12} lg={12}>
            <Grid item xs={6}>
                <img src={'https://cdn.okala.com/Media/Index/Slider/389797'}/>
            </Grid>
            <Grid item xs={6}>
                <img src={'https://cdn.okala.com/Media/Index/Slider/389798'}/>
            </Grid>
        </Grid>
    );
};
export default DoubleBanner;
