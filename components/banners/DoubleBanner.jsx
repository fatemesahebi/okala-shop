import {Box, Grid} from '@mui/material'
import Image from 'next/image'
import leftBanner from '../../public/images/banner_2_l.jpg'
import rightBanner from '../../public/images/banner_2_r.jpg'
import styled from "@emotion/styled";

const DoubleBanner = () => {

    return (
        <Box   sx={{width:'83vw',marginRight:'8vw'}}>
            <Grid container >
                <Grid item xs={6} container style={{justifyContent: 'center'}}>
                    <Image className={'banner'}  src={rightBanner}/>
                </Grid>
                <Grid item xs={6} container style={{justifyContent: 'center'}}>
                    <Image className={'banner'}  src={leftBanner}/>
                </Grid>
            </Grid>
        </Box>
    );
};
export default DoubleBanner;
