import React from 'react';
import ProductPage from "../../../productPage/ProductPage";
import ProductMobile from "../../../productPage/mobile/ProductMobile"
import {HeaderFooterProvider} from "../../../Components";
import {useRouter} from "next/router";

const ProductPageInformation = () => {
    const router = useRouter()
    return (
        <HeaderFooterProvider>
            <ProductMobile productId={router.query.productId}/>
            <ProductPage productId={router.query.productId}/>
        </HeaderFooterProvider>
    );
};

export default ProductPageInformation;

export async function getStaticPaths() {

    return {
        paths: [
            {params: {productId: '1' , productName: 'food-stuff'}}
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