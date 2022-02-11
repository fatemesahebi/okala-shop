import {Box, Container} from "@mui/material";
import CategoryBar from "./CategoryBar/CategoryBar";
import CategorySidebar from "./CategorySidebar/CategorySidebar";
import Subcategories from "./Subcategories/Subcategories";

const HeaderCategories = ({open , setOpen}) => {
    return (
        <Container maxWidth={"100vw"} sx={{
            position: "fixed",
            width: "100%",
            backgroundColor: "rgba(0,0,0,0.3)",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            zIndex: "12",
            top: "13.7rem",
            margin: "0 !important",
            padding: "0 !important",
        }}>
            <Box onClick={() => setOpen(!open)} width={"100vw"} height={"100vh"} position={"fixed"}>

            </Box>
                <CategoryBar/>
        </Container>
    )
}

export default HeaderCategories