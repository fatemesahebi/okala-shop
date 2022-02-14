import React from 'react';
import {Box, Paper} from "@mui/material";
import SingleProduct from "../productCard/ProductCardElements";

const MobileProduct = ({finalData,page}) => {
    return (
        <Box sx={{marginTop:'0'}} display={{xl: 'none', lg: 'none', md: 'none', sm: 'block', xs: 'block'}}
        >
            <Paper elevation={0}
                   sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
                {finalData[page - 1]?.map(item =>
                    <Box sx={{border: 'solid 1px #f9f9f9'}}><SingleProduct product={item}/></Box>)}
            </Paper>
        </Box>
    );
};

export default MobileProduct;
