import {Header, DailyOffer,FourthBanner,DoubleBanner,ListBrands,ListMiddleNavbar, FooterContainer} from "../components";
function HomePage(){
    return(<div>
        <Header/>
        <ListMiddleNavbar/>
        <DailyOffer/>
        <BigBanner/>
        <FourthBanner/>
        <DoubleBanner/>
        <ListBrands/>
        <FooterContainer/>
    </div>)
}
export default HomePage