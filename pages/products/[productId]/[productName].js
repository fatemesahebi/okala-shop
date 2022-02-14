import React from 'react';
import ProductPage from "../../../productPage/ProductPage";
import ProductMobile from "../../../productPage/mobile/ProductMobile"
import {HeaderFooterProvider} from "../../../Components";

const ProductPageInformation = () => {
    return (
        <HeaderFooterProvider>
            <ProductMobile productId={1}/>
            <ProductPage productId={1}/>
        </HeaderFooterProvider>
    );
};

export default ProductPageInformation;

export async function getStaticPaths() {

    return {
        paths: [
            {params: {productId: 'food-stuff' , productName: 'food-stuff'}}
        ],
        fallback: 'blocking'
    };
}

export async function getStaticProps(context) {
    console.log(context)
    let ProductList = []

    return {
        props: {ProductList}, // will be passed to the page component as props
    }
}