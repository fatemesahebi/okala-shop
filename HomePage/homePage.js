import {Header,BannerSlider, DailyOffer,FourthBanner,DoubleBanner,ListBrands,ListMiddleNavbar, FooterContainer, OkalaBlog} from "../components";
import {Button} from '@mui/material'
import LinK from "next/link"
function HomePage(){

    return(<div>
        <Header/>
        <ListMiddleNavbar/>
        <BannerSlider/>
        <ListMiddleNavbar/>
        <DailyOffer/>
        <FourthBanner/>
        <DoubleBanner/>
        <OkalaBlog/>
        <ListBrands/>
        <FooterContainer/>
    </div>)
}
export default HomePage