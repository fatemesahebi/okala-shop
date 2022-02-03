import {Header, DailyOffer,FourthBanner,DoubleBanner,ListBrands,ListMiddleNavbar, FooterContainer} from "../components";
function HomePage(){

    return(<div>
        <Header/>
        <ListMiddleNavbar/>
        <DailyOffer/>
        <FourthBanner/>
        <DoubleBanner/>
        <ListBrands/>
        <OkalaBlog/>
        <FooterContainer/>
    </div>)
}
export default HomePage