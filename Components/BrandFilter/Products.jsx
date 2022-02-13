import React from 'react';
import {Box, Paper} from "@mui/material";
import SingleProduct from "../productCard/ProductCardElements";
import ShowBar from "./ShowBar";
import MobileShowBar from "./MobileProduct";


const Products = ({
                      finalData, page, setSort, sort, brandsOfCategory, setFilterBrand,
                      filterBrand, offerFilter, setOfferFilter, setPriceFilter, maxPrice
                  }) => {
    return (
        <Paper elevation={0}
               sx={{width: {xs: '80vw', sm: '80vw', md: '80vw', lg: '80vw', xl: '58vw'}}}>
            <Box display={{xl: 'flex', lg: 'flex', md: 'flex', sm: 'none', xs: 'none'}}>
                <ShowBar setSort={setSort}/>
            </Box>
            <Box>
                <Paper elevation={0}
                       sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
                    {finalData[page - 1]?.map(item =>
                        <Box sx={{border: 'solid 1px #f9f9f9'}}><SingleProduct product={item}/></Box>)}
                </Paper>
            </Box>
        </Paper>
    );
};

export default Products;
