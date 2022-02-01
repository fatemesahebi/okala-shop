import React, { Component } from 'react';
import {Box,Container } from '@mui/material';
import Row from './index';
import Features from './features';
import Application from './application';
import CustomizedAccordions from "./accordion";
import {BottomRow} from "./bottomrow";


export function FooterContainer() {
    return (
        <footer style={{backgroundColor:'#F0F0F0',}}>
            <Box sx={{backgroundColor:' #F0F0F0', marginBottom:'.125rem'
            }} >
                <CustomizedAccordions sx={{backgroundColor:'#F0F0F0'}}/>
            </Box>
            <Container maxWidth="xl" sx={{backgroundColor:'#F0F0F0'}}>
                <Row>
                    <Features sx={{marginTop:'1rem'}}/>
                </Row>
                <Application/>
                <BottomRow/>
            </Container>
        </footer>
    )
}