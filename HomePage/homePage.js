import {Header,BannerSlider, DailyOffer,FourthBanner,DoubleBanner,ListBrands,ListMiddleNavbar, FooterContainer, OkalaBlog} from "../components";
import {Button} from '@mui/material'
import LinK from "next/link"
function HomePage(){
    return(<div>
        <Header/>
        <ListMiddleNavbar/>
        <Button>
            <LinK href={'/products/1'}>
                <a>
                    click

                </a>
            </LinK>
        </Button>
        <BannerSlider/>
        <DailyOffer/>
        <FourthBanner/>
        <DoubleBanner/>
        <OkalaBlog/>
        <ListBrands/>
        <FooterContainer/>
    </div>)
}
export default HomePage