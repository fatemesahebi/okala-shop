import {
    Header,
    FooterContainer,
    SearchResults,
} from "../components";
import BrandFilter from "../components/BrandFilter/BrandFilter";


function CategoryPage() {

    return (<div>
        {/*<Header/>*/}
        <SearchResults/>
        <BrandFilter/>
        <FooterContainer/>
    </div>)
}

export default CategoryPage