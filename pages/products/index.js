import React from 'react';
import ProductPage from "../../productPage/ProductPage";
import ProductMobile from "../../productPage/mobile/ProductMobile"
import {HeaderFooterProvider} from "../../Components";

const ProductPageInformation = () => {
    return (
        <HeaderFooterProvider>
            <ProductMobile/>
            <ProductPage/>
        </HeaderFooterProvider>
    );
};

export default ProductPageInformation;