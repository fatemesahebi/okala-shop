import {HeaderDesktop,HeaderMobile, HeaderDrawer} from "../index";
function Header(){
    return(
        <div>
            <HeaderDrawer/>
            <HeaderMobile/>
            <HeaderDesktop/>
        </div>
    )
}
export default Header