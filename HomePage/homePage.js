import {Header,BannerSlider, DailyOffer,FourthBanner,DoubleBanner,ListBrands,ListMiddleNavbar, FooterContainer, OkalaBlog} from "../components";
function HomePage(){

    return(<div>
        <Header/>
        <ListMiddleNavbar/>
        {/*<DailyOffer/>*/}
        <FourthBanner/>
        <DoubleBanner/>
        <ListBrands/>
        <FooterContainer/>
    </div>)
}
export default HomePage