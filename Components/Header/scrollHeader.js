import React from 'react';
import LocationHeader from "./locationHeader";
import Slide from '@mui/material/Slide';
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

const ScrollHeader = (props) => {
    return (
        <div>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar sx={{backgroundColor:'white.main',zIndex:100,pb:4,boxShadow:'none'}}>
                        <LocationHeader/>
                </AppBar>
            </HideOnScroll>


        </div>
    );
};

export default ScrollHeader;
