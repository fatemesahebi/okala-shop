import MobileLoactionHeader from "./MobileLoactionHeader";
import {HeaderDrawer, SearchBox} from "../index";
import {Box} from "@mui/material";



function HeaderMobile() {
    return (
        <div>
            <HeaderDrawer position={"relative"}/>
            <MobileLoactionHeader/>
            <Box display={{md: "none" , xs: "block"}}>
                <SearchBox/>
            </Box>

        </div>
    )
}

export default HeaderMobile