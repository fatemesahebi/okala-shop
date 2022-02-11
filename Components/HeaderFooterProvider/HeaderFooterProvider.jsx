import {Header, FooterContainer} from "../index";
import {Box} from "@mui/material";

const HeaderFooterProvider = ({children}) => {
    return (
        <div>
            <Box height={{md:"14rem", xs: "0"}}>
            </Box>
            <Header/>
            {children}
            <FooterContainer/>
        </div>
    )
}

export default HeaderFooterProvider