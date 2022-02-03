import {Header, DailyOffer,FourthBanner,DoubleBanner,ListBrands,ListMiddleNavbar, FooterContainer} from "../components";
import HeaderLower from "../components/HeaderLower/HeaderLower"
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