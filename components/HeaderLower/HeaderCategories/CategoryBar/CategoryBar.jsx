import {Container, Tabs, Tab, Box} from "@mui/material";
import CategorySidebar from "../CategorySidebar/CategorySidebar";

const CategoryBar = () => {
    return (
        <Box sx={{
            width: {
                lg: "85rem",
                md: "100%"
            },
            backgroundColor: "white !important",
            height: "35rem",
            borderRadius: "0 0 12px 12px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden"
        }}>
            <Container maxWidth={"100%"} sx={{
                margin: "0 !important",
                padding: "0 !important",
                width: "100%",
                backgroundColor: "#e6e6e6 !important",
                height: "3.5rem"
            }}>
                <Tabs>

                </Tabs>
            </Container>
            <CategorySidebar/>
        </Box>
    )
}

export default CategoryBar