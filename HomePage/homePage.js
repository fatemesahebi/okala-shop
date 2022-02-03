import {Header, DailyOffer,FourthBanner,DoubleBanner,ListBrands,ListMiddleNavbar, FooterContainer} from "../components";

import React from "react";


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