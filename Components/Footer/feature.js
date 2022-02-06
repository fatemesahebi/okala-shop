import React, { Component } from 'react';
import {Grid, Typography} from '@mui/material';
import {Box} from "@mui/material";

export default function Feature({ imagesrc, text }) {
    return (
        <React.Fragment>
            <Grid  sx={{marginTop:'3rem'}}
                   direction="column"
                   justifyContent="center"
                   alignItems="center">
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "center",
                    alignItems: 'center'
                }}>
                    <img style={{ maxWidth:'9rem', height:'5rem' }} src={imagesrc}/>
                    <Typography sx={{textAlign:'center', fontSize:"0.9rem", fontWeight:"bold", margin: "1.5rem 0"}}>
                        {text}
                    </Typography>
                </Box>
            </Grid>
        </React.Fragment>
    )
}
