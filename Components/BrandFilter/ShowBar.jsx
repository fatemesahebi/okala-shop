import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FilterSelection from "./FilterSelection";
import {useState} from "react";
import arrow from './arrow.svg'

const ShowBar = () => {

    return (
        <AppBar position="static" color={'white'} elevation={0} sx={{flexGrow:'1'}}>
            <Container>
                <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
                    <Box sx={{display:'flex' ,alignContent:'center',alignItems:'center',justifyItems:'center'}}>
                        <Typography><Image width={18} src={arrow}/></Typography>
                        <Typography  sx={{display: {xs: 'none', md: 'flex'}}}>نمایش بر اساس:</Typography>
                    </Box>

                    <Box sx={{ display: {xs: 'none', md: 'flex'}}}>
                        <Button color={'black'} sx={{fontWeight: 'bold', display: 'block'}}>پر فروشترین</Button>
                        <Button color={'black'} sx={{fontWeight: 'bold', display: 'block'}}>بیشترین تخفیف</Button>
                        <Button color={'black'} sx={{fontWeight: 'bold', display: 'block'}}>ارزانترین</Button>
                        <Button color={'black'} sx={{fontWeight: 'bold', display: 'block'}}>گرانترین</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default ShowBar;

