import {Box, Grid} from '@mui/material'
import coldDrink from '../../public/images/coldDrink.jpg'
import hotDrink from '../../public/images/hotDrink.jpg'
import protein from '../../public/images/protein.jpg'
import dairy from '../../public/images/dairy.jpg'
import Image from 'next/image'
import styled from '@emotion/styled'
const StyledImage = styled.image({
   borderRadius:'12px',
})
const FourthBanner = () => {
    return (
        <Box sx={{display:'flex',width:'100vw',justifyContent: 'center'}}>
            <Grid container spacing={1} sx={{width:'70vw',justifyItems: 'center'}}>
                <Grid item xs={6} container style={{justifyContent: 'center'}}>
                    <Image src={coldDrink}/>
                </Grid>
                <Grid item xs={6} container style={{justifyContent: 'center'}}>
                    <Image src={hotDrink}/>
                </Grid>
                <Grid item xs={6} container style={{justifyContent: 'center'}}>
                    <Image src={protein}/>
                </Grid>
                <Grid item xs={6} container style={{justifyContent: 'center'}}>
                    <Image src={dairy}/>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FourthBanner;
