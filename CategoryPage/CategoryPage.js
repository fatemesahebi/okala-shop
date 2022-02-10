import {
    Header,
    FooterContainer,
    SearchResults,
    BrandFilter,
    CommodityFilters,
    PaginationRounded,
    CategorizeResults,
    MenuMobile
} from "../components";




function CategoryPage() {

    return (<div style={{backgroundColor:"#f8f8f8"}}>
        {/*<Header/>*/}
        <SearchResults/>
        <CategorizeResults/>
        <BrandFilter/>
        <CommodityFilters/>
        <PaginationRounded/>
        <MenuMobile/>
        <FooterContainer/>
    </div>)
}

export default CategoryPage