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
    BestBrandsFruitsVegetables,
    CategorizeResultsMobile,
    CategoryBreadcrumbs,
    SearchResultMobile,
    AppliedFilters,
    CategoryBreadcrumbsDesktop

} from "../components";
import * as React from "react";
import {Paper} from "@mui/material";
import {Box} from "@mui/material";
import {useEffect, useState} from "react";
import {getCategoryProducts} from "../lib/axios/getData";
import MobileHeaderCategory from "../Components/BrandFilter/MobileHeaderCategory";
import MobileProduct from "../Components/BrandFilter/MobileProduct";
import {categoryList} from "../lib/mirage/categoryList"


function CategoryPage({categoryName}) {
    let maxPrice = 1185000
    const [dataCategory, setDataCategory] = useState([])
    const [page, setPage] = useState(1)
    const [filterBrand, setFilterBrand] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [priceFilter, setPriceFilter] = useState([0, maxPrice])
    const [offerFilter, setOfferFilter] = useState(false)
    const [sort, setSort] = useState("mostSale")
    const [screanWidth,setScreanWidth]=useState(750)
    let finalData = []
    let pageCount = 1


    let categoryNamePe= categoryList.filter(item=>item.groupEn===categoryName)[0].groupPe
    useEffect(() => {
         getCategoryProducts(categoryNamePe).then(data => setDataCategory(data.products))

            .catch(error => console.log(error))
         setScreanWidth(window.innerWidth)

    }, [screanWidth])



    const dataMange = () => {
        let filterData = []
        let result = []
        const productNumPerPage = (screanWidth >750)? 32 : dataCategory?.length
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


    function getBrandsOfCategory(){
        let brandsOfCategory = []
        let brandCategoryEn=[]
         let result=[]
        dataCategory.map(item => {if(!brandsOfCategory.includes(item.brand)) {
            brandsOfCategory.push(item.brand)
            brandCategoryEn.push(item.brandEn)
            }})

        brandsOfCategory.map((item,index)=>
            result.push({title:item,active:false,count:1,brandEn:brandCategoryEn[index]}) )

        dataCategory.map(product=> result.map(brand=> (brand.title===product.brand)?
            {...brand,count:brand.count++,brandEn:product.brandEn} : null))

        // result.map(item=> filterBrand.includes(item.tiltle)? {...item,active:true} : item )
        for (let item of result){
            if (filterBrand.includes(item.title)) item.active=true
        }

        return result
    }



    finalData = dataMange()
    let brandsOfCategory= getBrandsOfCategory()
    console.log(brandsOfCategory)
    return (<div style={{backgroundColor: "#f8f8f8" , width: "100vw"}}>
        <Box sx={{
            display: {md: "block" , xs: "none"}
        }} >
            <Header/>
        </Box>
        <Box sx={{marginTop: {md:"15rem" , xs: "12rem"}}}>
            <CategoryBreadcrumbsDesktop/>
        <SearchResultMobile/>
        <MobileHeaderCategory categoryName={categoryNamePe} brandsOfCategory={brandsOfCategory}
                              filterBrand={filterBrand} setFilterBrand={setFilterBrand}
                              setOfferFilter={setOfferFilter} offerFilter={offerFilter}
                              setPriceFilter={setPriceFilter}
                              maxPrice={maxPrice} setSort={setSort} sort={sort} />

        <MobileProduct finalData={finalData} page={page}/>

        <MenuMobile/>
            <Box display={{md: "block" , xs: "none"}}>
                <div style={{display: "flex", width: "100vw"  , justifyContent: "center"}}>
                    <Box style={{maxWidth:"1280" , marginTop:"1rem" , paddingRight: "1rem"}}>
                        <AppliedFilters filterBrand={filterBrand} setFilterBrand={setFilterBrand}
                                        priceFilter={priceFilter} setPriceFilter={setPriceFilter}
                                        maxPrice={maxPrice}
                                        brandsOfCategory={brandsOfCategory}
                        />
                        <SearchResults searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                        <CategorizeResults categoryName={categoryNamePe}
                                           dataCategory={dataCategory}

                        />
                        <BrandFilter brandsOfCategory={brandsOfCategory} filterBrand={filterBrand}
                                     setFilterBrand={setFilterBrand}


                        />

                        <CommodityFilters offerFilter={offerFilter} setOfferFilter={setOfferFilter}/>
                        <PriceFilter maxPrice={maxPrice} priceFilter={priceFilter} setPriceFilter={setPriceFilter}/>
                    </Box>
                    <Paper elevation={0} sx={{
                        display:{xl: 'flex', lg: 'flex', md: 'flex', sm: 'none', xs: 'none'}, flexDirection: 'column', alignItems: 'center', marginTop: '30px',
                        borderRadius: '2rem'
                    }}
                    >
                        <Products finalData={finalData} page={page} setSort={setSort} sort={sort}
                                  brandsOfCategory={brandsOfCategory}
                                  filterBrand={filterBrand}
                                  setFilterBrand={setFilterBrand}
                                  setOfferFilter={setOfferFilter}
                                  offerFilter={offerFilter}
                                  maxPrice={maxPrice}
                                  setPriceFilter={setPriceFilter}


                        />
                        <Paper elevation={0} sx={{my: '20px'}}>
                            <PaginationRounded setPage={setPage} pageCount={pageCount}/>
                        </Paper>
                    </Paper>
                </div>
            </Box>
            <Box sx={{
                display: {md: "block" , xs:"none"}
            }}>
                <BestBrandsFruitsVegetables/>
                <FooterContainer/>
            </Box>
        </Box>
    </div>)
}

export default CategoryPage