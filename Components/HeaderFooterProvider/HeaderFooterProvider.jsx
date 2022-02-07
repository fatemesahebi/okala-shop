import {Header, FooterContainer, MenuMobile} from "../index";
import {Box} from "@mui/material";

const HeaderFooterProvider = ({children}) => {
    return (
        <div>
            <Box height={{md:"11rem", xs: "4rem"}}>
            </Box>
            <Header/>
            {children}
            <MenuMobile/>
            <FooterContainer/>
        </div>
    )
}

export default HeaderFooterProvider