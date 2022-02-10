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


function CategoryPage() {

    return (<div style={{backgroundColor: "#f8f8f8"}}>
        {/*<Header/>*/}
        {/*<SearchResults/>*/}
        {/*<CategorizeResults/>*/}
        {/*<BrandFilter/>*/}
        {/*<CommodityFilters/>*/}
        {/*<PaginationRounded/>*/}
        <MenuMobile/>
        <div style={{display: 'flex'}}>
            <div style={{marginTop:'30px'}}>
                <SearchResults/>
                <CategorizeResults/>
                <BrandFilter/>
                <CommodityFilters/>
                <PriceFilter/>
            </div>
            <Paper elevation={0} sx={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'30px',borderRadius:'2rem'}}>
                <Products/>
                <Paper elevation={0} sx={{my:'20px'}}>
                    <PaginationRounded/>
                </Paper>
            </Paper>
        </div>
        <BestBrandsFruitsVegetables/>
        <FooterContainer/>
    </div>)
}

export default CategoryPage