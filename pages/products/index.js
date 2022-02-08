import React from 'react';
import ProductPage from "../../productPage/ProductPage";
import Productmobile from "../../productPage/mobile/mobileproductpage"

const ProductPageInformation = () => {
    return (
        <div>
            <Productmobile/>
            <ProductPage/>
        </div>
    );
};

export default ProductPageInformation;