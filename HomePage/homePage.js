import {Header,MenuMobile,BannerSlider, DailyOffer,FourthBanner,DoubleBanner,OkalaBlogHeader,ListBrands,CategoryProducts,ListMiddleNavbar, FooterContainer, OkalaBlog} from "../components";
import {Button} from '@mui/material'
import LinK from "next/link"
function HomePage(){

    return(<div>
        <Header/>
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
        {/*<MenuMobile/>*/}
        <FooterContainer/>
    </div>)
}
export default HomePage