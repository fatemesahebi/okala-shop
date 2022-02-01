import React from 'react';
import Image from 'next/image'
import {Box, Grid} from '@mui/material'
import bigBanner from '../../public/images/okalabussines.jpg'
const BigBanner = () => {
    return (
        <div>
            <Grid container >
                <Grid item xs={12} container style={{justifyContent: 'center'}}>
                    <Image style={{borderRadius: '12px'}} src={bigBanner}/>
                </Grid>
            </Grid>
        </div>
    );
};

export default BigBanner;
