import {Header, DailyOffer,FourthBanner,DoubleBanner,ListBrands,ListMiddleNavbar, FooterContainer, CategoryProducts} from "../components";
function HomePage(){
    return(<div>
        <Header/>
        <ListMiddleNavbar/>
        <DailyOffer/>
        <FourthBanner/>
        <DoubleBanner/>
        <CategoryProducts/>
        <ListBrands/>
        <FooterContainer/>
    </div>)
}
export default HomePage