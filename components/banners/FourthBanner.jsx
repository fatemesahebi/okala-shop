import {Box, Grid} from '@mui/material'
import coldDrink from '../../public/images/coldDrink.jpg'
import hotDrink from '../../public/images/hotDrink.jpg'
import protein from '../../public/images/protein.jpg'
import dairy from '../../public/images/dairy.jpg'
import Image from 'next/image'
import styled from '@emotion/styled'
const StyledImage = styled.img({
   borderRadius:'12px',
})
const FourthBanner = () => {
    return (
        <Box xs={12}  sx={{margin:'auto',width:{lg:'81rem', xs: "100%"},marginTop:'20px'}}>
            <Grid container  spacing={1} >
                <Grid item  xs={6}  >
                    <Image className={'banner'} src={coldDrink}/>
                </Grid>
                <Grid item xs={6}  >
                    <Image className={'banner'} src={hotDrink}/>
                </Grid>
                <Grid item xs={6} container >
                    <Image className={'banner'} src={protein}/>
                </Grid>
                <Grid item xs={6} container>
                    <Image className={'banner'} src={dairy}/>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FourthBanner;
