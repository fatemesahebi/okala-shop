import React from 'react';
import { useRouter } from 'next/router'
import BrandFilter from "../../components/\u200CBrandFilter/BrandFilter";

const ProductPage = () => {
    const router = useRouter()
    console.log(router.query)
    return (
        <div>
            {/*productsId*/}

        </div>
    );
};

    export default ProductPage;