import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import {Grid} from "@material-ui/core";
import FilterSelection from "./FilterSelection";
import {useState} from "react";
import FilterMobileDrawer from "./FilterMobileDrawer";

const MobileShowBar = () => {
    const [visible, setVisible] = useState(false)
    return (
        <AppBar position="static" color={'white'} elevation={0}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Grid container sx={12}>
                        <Grid item sx={6}>
                            <Button onClick={() => setVisible(!visible)} color={'black'}
                                    sx={{fontWeight: 'bold', my: 2, display: 'block'}}>پر فروشترین</Button>
                        </Grid>
                        <Grid sx={6}>
                            <Button color={'black'} sx={{fontWeight: 'bold', my: 2, display: 'block'}}>فیلتر ها</Button>
                        </Grid>
                    </Grid>
                </Toolbar>
                {visible && <FilterSelection display={{xs: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'none'}}/>}
                <FilterMobileDrawer/>
            </Container>
        </AppBar>
    );
};

export default MobileShowBar;

