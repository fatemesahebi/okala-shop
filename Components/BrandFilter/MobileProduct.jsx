import React from 'react';
import {Box, Paper} from "@mui/material";
import SingleProduct from "../productCard/ProductCardElements";
import {FruitsVegetables} from "../../lib/mirage/dataFV";

const MobileProduct = () => {
    return (
        <Box sx={{marginTop:'12rem'}} display={{xl: 'none', lg: 'none', md: 'none', sm: 'block', xs: 'block'}}
        >
            <Paper elevation={0}
                   sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
                {FruitsVegetables.map(item =>
                    <Box sx={{border: 'solid 1px #f9f9f9'}}><SingleProduct product={item}/></Box>)}
            </Paper>
        </Box>
    );
};

export default MobileProduct;
