import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Image from 'next/image'
import FilterSelection from "./FilterSelection";
import {useState} from "react";
import FilterMobileDrawer from "./FilterMobileDrawer";
import arrow from './arrow.svg'
const MobileShowBar = ({sort,setSort}) => {
    return (
        <AppBar position="static" color={'white'} elevation={0}>
            <Container maxWidth="xl">
                <Typography><Image width={15} src={arrow}/><FilterMobileDrawer sort={sort} setSort={setSort}/></Typography>
            </Container>
        </AppBar>
    );
};

export default MobileShowBar;

