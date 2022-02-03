import {Header,BannerSlider, DailyOffer,FourthBanner,DoubleBanner,ListBrands,ListMiddleNavbar, FooterContainer, OkalaBlog} from "../components";
function HomePage(){
    return(<div>
        <Header/>
        <ListMiddleNavbar/>
        <BannerSlider/>
        <DailyOffer/>
        <FourthBanner/>
        <DoubleBanner/>
        <ListBrands/>
        <OkalaBlog/>
        <FooterContainer/>
    </div>)
}
export default HomePage