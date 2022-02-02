import React, { Component } from 'react';
import {Grid} from '@mui/material';

export default function Feature({ imagesrc, text }) {
    return (
        <React.Fragment
            sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                alignItems:'center',
                gap: 1
            }}>
            <Grid  sx={{marginTop:'3rem'}}
                   direction="column"
                   justifyContent="center"
                   alignItems="center">
                <img style={{ width:'6.1vw', height:'5.9vw' }} src={imagesrc}/>
                <h6 style={{textAlign:'center'}}>
                    {text}
                </h6>
            </Grid>
        </React.Fragment>
    )
}
