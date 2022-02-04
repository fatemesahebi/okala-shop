import {Header,BannerSlider, CategoryProducts, DailyOffer,FourthBanner,DoubleBanner,ListBrands,ListMiddleNavbar, FooterContainer, OkalaBlog} from "../components";
function HomePage(){
    return(<div>
        <Header/>
        <ListMiddleNavbar/>
        <BannerSlider/>
        <DailyOffer/>
        <FourthBanner/>
        <DoubleBanner/>
        <CategoryProducts/>
        <OkalaBlog/>
        <ListBrands/>
        <FooterContainer/>
    </div>)
}
export default HomePage