import {HeaderDesktop,HeaderMobile, HeaderDrawer} from "../index";

function Header(){
    return(
        <div>
            <HeaderDrawer position={"fixed"}/>
            <HeaderMobile/>
            <HeaderDesktop/>
        </div>
    )
}
export default Header