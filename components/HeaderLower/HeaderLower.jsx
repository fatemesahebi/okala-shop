import {Box, Container, Typography} from "@mui/material";
import HeaderLowerComponent from "./HeaderLowerComponent/HeaderLowerComponent";
import HeaderCategories from "./HeaderCategories/HeaderCategories";

const HeaderLower = () => {
    return (
        <Container>
            <Container>
                <Box>
                    <HeaderLowerComponent/>
                    <HeaderLowerComponent/>
                </Box>
                <Box>
                    <HeaderLowerComponent/>
                    <HeaderLowerComponent/>
                </Box>
            </Container>
            <HeaderCategories/>
        </Container>
    )
}

export default HeaderLower