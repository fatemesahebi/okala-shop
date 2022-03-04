import {useRouter} from "next/router";
import React from "react";

import CategoryPage from "../../CategoryPage/CategoryPage";

const Category = ({ProductList}) => {
    const router = useRouter()
    return (
        <div>
            <CategoryPage  categoryName={router.query.categoryName}/>
        </div>
    )
}

export default Category

export async function getStaticPaths() {

    return {
        paths: [
            {params: {categoryName: 'foodStuffs'}}
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