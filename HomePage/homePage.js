import {Header,BannerSlider, DailyOffer,FourthBanner,DoubleBanner,ListBrands,ListMiddleNavbar, FooterContainer,OkalaBlogHeader, OkalaBlog, HeaderLower} from "../components";
function HomePage(){

    return(<div>
        <Header/>
        {/*<HeaderLower/>*/}
        <BannerSlider/>
        <ListMiddleNavbar/>
        <DailyOffer/>
        <FourthBanner/>
        <DoubleBanner/>
        <OkalaBlogHeader/>
        <OkalaBlog/>
        <ListBrands/>
        <FooterContainer/>
    </div>)
}
export default HomePage