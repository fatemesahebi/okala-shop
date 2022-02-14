// import React, {useEffect, useState} from 'react';
// import ProductPage from "../../../productPage/ProductPage";
// import ProductMobile from "../../../productPage/mobile/ProductMobile"
// import {HeaderFooterProvider} from "../../../Components";
// import {useRouter} from "next/router";
// import Box from "@mui/material/Box";
// import {getProduct} from "../../../lib/axios/getData";
//
// const Products = ({Product}) => {
//     const router = useRouter()
//     return (
//         <HeaderFooterProvider>
//             <Box>{router.query.productId}</Box>
//             <ProductMobile productId={1}/>
//             <ProductPage productId={1}/>
//         </HeaderFooterProvider>
//     );
// };
//
// export default Products
//
// export async function getStaticPaths() {
//
//     return {
//         paths: [
//             {params: {productId: "1" , productName: ""}}
//         ],
//         fallback: 'blocking'
//     };
// }
//
// export async function getStaticProps(context) {
//     console.log(context)
//     let Product = {}
//
//     return {
//         props: {Product}, // will be passed to the page component as props
//     }
// }