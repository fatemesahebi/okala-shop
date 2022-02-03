import React from 'react';
import Image from 'next/image'
import {Box, Grid} from '@mui/material'
import bigBanner from '../../public/images/okalabussines.jpg'
import styled from "@emotion/styled";
const StyledImage = styled.img({
    borderRadius:'12px'
})
const BigBanner = () => {
    return (
        <div>
            <Grid container >
                <Grid item xs={12} container style={{justifyContent: 'center'}}>
                    <StyledImage src={'/images/okalabussines.jpg'}/>
                </Grid>
            </Grid>
        </div>
    );
};

export default BigBanner;
