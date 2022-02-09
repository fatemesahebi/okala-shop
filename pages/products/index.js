import React from 'react';
import ProductPage from "../../productPage/ProductPage";
import ProductMobile from "../../productPage/mobile/ProductMobile"

const ProductPageInformation = () => {
    return (
        <div>
            <ProductMobile/>
            <ProductPage/>
        </div>
    );
};

export default ProductPageInformation;