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
            <Box style={{marginTop:'30px'}}>
                <SearchResults/>
                <CategorizeResults/>
                <BrandFilter/>
                <CommodityFilters/>
                <PriceFilter/>
            </Box>
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