import React from 'react';
import Image from 'next/image'
import {Box, Grid} from '@mui/material'
import bigBanner from '../../public/images/okalabussines.jpg'
import styled from "@emotion/styled";
import {ImageList, ImageListItem} from "@mui/material";
import {ImageAspectRatioRounded, ImageRounded} from "@mui/icons-material";

const StyledImage = styled.img({
    borderRadius: '12px',


})
const BigBanner = () => {
    return (
        <Grid container>
            <Grid xs={12} container>
                <Image className={'banner'} src={bigBanner}/>
            </Grid>
        </Grid>

    );
};

export default BigBanner;
