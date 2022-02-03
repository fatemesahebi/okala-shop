import React from 'react';
import {Box, Container} from "@mui/material";
import {productData} from "../components/productCard/ProductCardData";
import SingleProduct from "../components/productCard/ProductCardElements";


const ProductCard = () => {
    return (
        <Box sx={{marginTop: '50px', marginRight: '50px'}}>
            {productData.map(product => <SingleProduct key={product.id} product={product}/>)}
        </Box>
    );
};

export default ProductCard;
