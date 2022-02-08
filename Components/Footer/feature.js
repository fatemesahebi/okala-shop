import React, { Component } from 'react';
import {Grid, Typography} from '@mui/material';
import {Box} from "@mui/material"

export default function Feature({ imagesrc, text }) {
    return (
        <React.Fragment>
            <Box gridColumn={{xs:"span 6", sm:"span 3"}} sx={{marginTop:'3rem'}}
                   direction="column"
                   justifyContent="center"
                   alignItems="center">
                <Box sx={{
                    display: {md:"flex", xs:"none"},
                    flexDirection: "column",
                    alignContent: "center",
                    alignItems: 'center'
                }}>
                    <img style={{maxWidth:'9rem', height:'5rem'}} src={imagesrc}/>
                    <Typography sx={{textAlign:'center', fontSize:"0.9rem", fontWeight:"bold", margin: "1.5rem 0"}}>
                        {text}
                    </Typography>
                </Box>
                <Box sx={{
                    display: {md: "none",xs:"flex"},
                    flexDirection: "column",
                    alignContent: "center",
                    alignItems: 'center'
                }}>
                    <img style={{maxWidth:'6rem', height:'3.5rem'}}  src={imagesrc}/>
                    <Typography sx={{textAlign:'center', fontSize:"0.75rem", fontWeight:"bold", margin: "1.5rem 0"}}>
                        {text}
                    </Typography>
                </Box>
            </Box>
        </React.Fragment>
    )
}
