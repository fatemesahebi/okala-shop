import React from 'react';
import { useRouter } from 'next/router'
import BrandFilter from "./‌BrandFilter/BrandFilter";

const ProductPage = () => {
    const router = useRouter()
    console.log(router.query)
    return (
        <div>
            {/*productsId*/}
            <BrandFilter/>
        </div>
    );
};

    export default ProductPage;