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
const ShowBar = () => {
    return (
        <AppBar position="static" color={'white'} elevation={0}>
            <Container>
                <Toolbar>
                    <Typography><ArrowUpwardIcon/></Typography>
                    <Typography noWrap component="div" sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}>
                        نمایش بر اساس:
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                    </Box>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        <Button color={'black'} sx={{fontWeight: 'bold', my: 2, display: 'block'}}>پر فروشترین</Button>
                        <Button color={'black'} sx={{fontWeight: 'bold', my: 2, display: 'block'}}>بیشترین تخفیف</Button>
                        <Button color={'black'} sx={{fontWeight: 'bold', my: 2, display: 'block'}}>ارزانترین</Button>
                        <Button color={'black'} sx={{fontWeight: 'bold', my: 2, display: 'block'}}>گرانترین</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default ShowBar;

