import {Header, FooterContainer, MenuMobile} from "../index";
import {Box} from "@mui/material";

const HeaderFooterProvider = ({children}) => {
    return (
        <div>
            <Header/>
            <Box height={{md:"11rem", xs: "0"}}>
            </Box>
            {children}
            <MenuMobile/>
            <FooterContainer/>
        </div>
    )
}

export default HeaderFooterProvider