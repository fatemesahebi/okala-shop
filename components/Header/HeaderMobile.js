import MobileLoactionHeader from "./MobileLoactionHeader";
import {SearchBox} from "../index";
import {Box} from "@mui/material";

function HeaderMobile() {
    return (
        <div>
            <MobileLoactionHeader/>
            <Box display={{md: "none" , xs: "block"}}>
                <SearchBox/>
            </Box>

        </div>
    )
}

export default HeaderMobile