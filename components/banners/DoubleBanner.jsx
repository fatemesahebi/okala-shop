import {Box, Grid} from '@mui/material'
import Image from 'next/image'
import leftBanner from '../../public/images/banner_2_l.jpg'
import rightBanner from '../../public/images/banner_2_r.jpg'

const DoubleBanner = () => {

    return (
        <Box   sx={{display:'flex',width:'100vw',justifyContent: 'center'}}>
            <Grid container spacing={1} sx={{width:'70vw',justifyItems: 'center'}}>
                <Grid item xs={6} container style={{justifyContent: 'center'}}>
                    <Image borderRadius= {12} src={rightBanner}/>
                </Grid>
                <Grid item xs={6} container style={{justifyContent: 'center'}}>
                    <Image style={{borderRadius: '12px'}} src={leftBanner}/>
                </Grid>
            </Grid>
        </Box>
    );
};
export default DoubleBanner;
