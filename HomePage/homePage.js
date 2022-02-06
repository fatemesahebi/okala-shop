import {
    Header,
    BannerSlider,
    DailyOffer,
    FourthBanner,
    DoubleBanner,
    OkalaBlogHeader,
    ListBrands,
    CategoryProducts,
    ListMiddleNavbar,
    FooterContainer,
    OkalaBlog,
    HeaderFooterProvider
} from "../components";
import {Box} from "@material-ui/core";

function HomePage() {

    return (<div>
        <HeaderFooterProvider>
            <BannerSlider/>
            <ListMiddleNavbar/>
            <DailyOffer/>
            <FourthBanner/>
            <CategoryProducts category={"محصولات جدید"}/>
            <CategoryProducts category={"پرفروشترین در منطقه شما"}/>
            <CategoryProducts category={"پرتخفیف ترین ها"}/>
            <DoubleBanner/>
            <CategoryProducts category={"نوشیدنی"}/>
            <CategoryProducts category={"میوه و سبزیجات"}/>
            <CategoryProducts category={"غذا"}/>
            <CategoryProducts category={"لوازم بهداشتی"}/>
            <CategoryProducts category={"سایر غذاها"}/>
            <OkalaBlogHeader/>
            <OkalaBlog/>
            <ListBrands/>
        </HeaderFooterProvider>
    </div>)
}

export default HomePage