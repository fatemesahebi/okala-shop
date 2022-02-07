import React from 'react';
import {specialOffer} from "../../lib/mirage/data";
import {Box} from "@mui/material";
import SingleProduct from "../productCard/ProductCardElements";
import ShowBar from "./ShowBar";

const Products = () => {
    return (
        <Box>
            <Box>
                <ShowBar/>
            </Box>
            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                {specialOffer.slice(0, 20).map(item =>
                    <Box sx={{border:'solid 1px #f9f9f9'}}><SingleProduct product={item}/></Box>)}
            </Box>
        </Box>
    );
};

export default Products;
