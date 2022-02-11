import React from 'react';
import {specialOffer} from "../../lib/mirage/data";
import {Box, Paper} from "@mui/material";
import SingleProduct from "../productCard/ProductCardElements";
import ShowBar from "./ShowBar";
import MobileShowBar from "./MobileShowBar";
import MobileDialog from "./MobileDialog";

const Products = () => {
    return (
        <Paper elevation={0}
               sx={{padding: '20px', width: {xs: '80vw', sm: '80vw', md: '80vw', lg: '80vw', xl: '65vw'}}}>
            <Box display={{xl: 'flex', lg: 'flex', md: 'flex', sm: 'none', xs: 'none'}}>
                <ShowBar/>

            </Box>
            <Box sx={{display:'flex',justifyContent:'space-between'}}>
                <Box sx={{}} display={{xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none'}}>
                    <MobileShowBar/>

                </Box>
                <Box display={{xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none'}}>
                    <MobileDialog/>

                </Box>
            </Box>
            <Box>
                <Paper elevation={0}
                       sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                    {specialOffer.slice(0, 20).map(item =>
                        <Box sx={{border: 'solid 1px #f9f9f9'}}><SingleProduct product={item}/></Box>)}
                </Paper>
            </Box>
        </Paper>
    );
};

export default Products;
