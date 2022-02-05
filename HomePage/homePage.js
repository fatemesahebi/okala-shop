import {Header,BannerSlider, DailyOffer,FourthBanner,DoubleBanner,ListBrands,ListMiddleNavbar, FooterContainer, OkalaBlog} from "../components";
import {Button} from '@mui/material'
import LinK from "next/link"
function HomePage(){

    return(<div>
        <Header/>
        {/*<HeaderLower/>*/}
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
        <FooterContainer/>
    </div>)
}
export default HomePage