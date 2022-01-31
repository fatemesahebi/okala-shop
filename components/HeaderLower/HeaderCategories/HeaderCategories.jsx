import {Box, Container} from "@mui/material";
import CategoryBar from "./CategoryBar/CategoryBar";
import CategorySidebar from "./CategorySidebar/CategorySidebar";
import Subcategories from "./Subcategories/Subcategories";

const HeaderCategories = () => {
    return (
        <Container>
            <CategoryBar/>
            <Box>
                <CategorySidebar/>
                <Subcategories/>
            </Box>
        </Container>
    )
}

export default HeaderCategories