import {Box, Container} from "@mui/material";
import CategoryBar from "./CategoryBar/CategoryBar";
import CategorySidebar from "./CategorySidebar/CategorySidebar";
import Subcategories from "./Subcategories/Subcategories";

const HeaderCategories = () => {
    return (
        <Container maxWidth={"100vw"} sx={{
            position: "fixed",
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            zIndex: "12",
            top: "9.2rem",
            margin: "0 !important",
            padding: "0 !important",
        }}>
                <CategoryBar/>
        </Container>
    )
}

export default HeaderCategories