import {
    Header,
    FooterContainer,
    SearchResults,
    BrandFilter,
    PriceFilter,
    CommodityFilters,
    PaginationRounded,
    MenuMobile,
    CategorizeResults,
    Products,
    BestBrandsFruitsVegetables

} from "../components";
import * as React from "react";
import {Paper} from "@mui/material";
import {Box} from "@material-ui/core";
import {useEffect, useState} from "react";
import {getCategoryProducts} from "../lib/axios/getData";
import MobileHeaderCategory from "../Components/BrandFilter/MobileHeaderCategory";
import MobileProduct from "../Components/BrandFilter/MobileProduct";


function CategoryPage() {
    let maxPrice = 1185000
    const [dataCategory, setDataCategory] = useState([])
    const [page, setPage] = useState(1)
    const [filterBrand, setFilterBrand] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [priceFilter, setPriceFilter] = useState([0, maxPrice])
    const [offerFilter, setOfferFilter] = useState(false)
    const [sort, setSort] = useState("mostSale")
    let finalData = []
    let pageCount = 1


    useEffect(() => {
        getCategoryProducts("میوه و سبزیجات").then(data => setDataCategory(data.products))
            .catch(error => console.log(error))

    }, [])


    // useEffect(() => {
    //     finalData = dataMange()
    // }, [dataCategory,page,filterBrand,searchTerm,priceFilter,offerFilter])
    //

    const dataMange = () => {
        let filterData = []
        let result = []
        const productNumPerPage = 32
        if (filterBrand.length === 0) filterData = dataCategory
        else {
            for (let filter of filterBrand) {
                dataCategory.map(item => (item.brand === filter) ? filterData.push(item) : null)
            }
        }

        filterData = filterData.filter(item => item.productName.includes(searchTerm))
            .filter(item => (item.price >= priceFilter[0] && item.price <= priceFilter[1]))

        if (offerFilter) filterData = filterData.filter(item => item.offPercent > 0)

         if (sort === "mostSale") filterData = filterData.sort((a, b)=>( b.selerCount - a.selerCount))
        else if (sort === "mostOff") filterData = filterData.sort((a, b) =>(b.offPercent - a.offPercent))
       else if (sort === "leastPrice") filterData = filterData.sort((a,b)=>(a.price - b.price))
        else  filterData = filterData.sort((a, b) => (b.price - a.price) )


        pageCount = (Math.floor((filterData.length) / productNumPerPage)) + 1

        for (let i = 0; i < pageCount; i++) {
            result.push(filterData.slice(productNumPerPage * i, productNumPerPage * (i + 1)))

        }

        return result
    }
    const getBrandsOfCategory = () => {
        let brandsOfCategory = []
        dataCategory.map(item => (!brandsOfCategory.includes(item.brand)) ? brandsOfCategory.push(item.brand) : null)
        return brandsOfCategory
    }


    let brandsOfCategory = getBrandsOfCategory()
    finalData = dataMange()


    return (<div style={{backgroundColor: "#f8f8f8"}}>
        {/*<Header/>*/}
        {/*<SearchResults/>*/}
        {/*<CategorizeResults/>*/}
        {/*<BrandFilter/>*/}
        {/*<CommodityFilters/>*/}
        {/*<PaginationRounded/>*/}
        <MobileHeaderCategory/>
        <MobileProduct/>
        <MenuMobile/>
        <div style={{display: 'flex'}}>
            <Box style={{marginTop: '30px'}}>
                <SearchResults searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                <CategorizeResults/>
                <BrandFilter brandsOfCategory={brandsOfCategory} filterBrand={filterBrand}
                             setFilterBrand={setFilterBrand}/>
                <CommodityFilters offerFilter={offerFilter} setOfferFilter={setOfferFilter}/>
                <PriceFilter maxPrice={maxPrice} priceFilter={priceFilter} setPriceFilter={setPriceFilter}/>
            </Box>
            <Paper elevation={0} sx={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '30px',
                borderRadius: '2rem'
            }}
            >
                <Products finalData={finalData} page={page} setSort={setSort}/>
                <Paper elevation={0} sx={{my: '20px'}}>
                    <PaginationRounded setPage={setPage} pageCount={pageCount}/>
                </Paper>
            </Paper>
        </div>
        <BestBrandsFruitsVegetables/>
        <FooterContainer/>
    </div>)
}

export default CategoryPage