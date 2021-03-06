import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image'
import arrow from './arrow.svg'

const ShowBar = ({setSort}) => {
    const handleSortData = (sortType) => {
setSort(sortType)
    }
    return (
        <AppBar position="static" color={'white'} elevation={0} sx={{display:'flex',justifyContent:'flex-start'}}>
            <Container >
                <Toolbar>
                    <Image width={20} src={arrow}/>
                    <Typography noWrap component="div" sx={{mr: 1, ml: 5, display: {xs: 'none', md: 'flex'}}}>
                        نمایش بر اساس:
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        <Button onClick={() => handleSortData('mostSale')} color={'black'}
                                sx={{fontWeight: 'bold', display: 'block',":disabled":{color:'red'} }}>پر فروشترین</Button>
                        <Button onClick={() => handleSortData('mostOff')} color={'black'}
                                sx={{fontWeight: 'bold', display: 'block'}}>بیشترین تخفیف</Button>
                        <Button onClick={() => handleSortData('leastPrice')} color={'black'}
                                sx={{fontWeight: 'bold', display: 'block'}}>ارزانترین</Button>
                        <Button onClick={() => handleSortData('mostPrice')} color={'black'}
                                sx={{fontWeight: 'bold', display: 'block'}}>گرانترین</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default ShowBar;

