import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Image from 'next/image'
import FilterSelection from "./FilterSelection";
import {useState} from "react";
import FilterMobileDrawer from "./FilterMobileDrawer";
import arrow from './arrow.svg'
const MobileShowBar = () => {
    const [visible, setVisible] = useState(false)
    return (
        <AppBar position="static" color={'white'} elevation={0}>
            <Container maxWidth="xl">
                {visible && <FilterSelection display={{xs: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'none'}}/>}
                <Typography><Image width={15} src={arrow}/><FilterMobileDrawer/></Typography>
            </Container>
        </AppBar>
    );
};

export default MobileShowBar;

