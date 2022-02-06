import {Header, FooterContainer} from "../index";
import {Box} from "@material-ui/core";

const HeaderFooterProvider = ({children}) => {
    return (
        <>
            <Header/>
            <Box height={"11rem"}>

            </Box>
            {children}
            <FooterContainer/>
        </>
    )
}

export default HeaderFooterProvider