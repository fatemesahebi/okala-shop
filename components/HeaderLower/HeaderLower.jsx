import {Box, Container, Typography} from "@mui/material";
import HeaderLowerComponent from "./HeaderLowerComponent/HeaderLowerComponent";
import HeaderCategories from "./HeaderCategories/HeaderCategories";
import Category from "./HeaderLowerComponent/category.svg"

const HeaderLower = () => {
    return (
        <Container maxWidth="100vw" sx={{
            display: "inline-flex",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
            justifyItems: "center",
            margin: "0 !important",
            padding: "0 !important",
            width: "100vw !important",
            backgroundColor: "#f0f0f0 !important",
        }}>
            <Container maxWidth="100vw" sx={{
                margin: "0 !important",
                padding: "0 !important",
                width: "70% !important",
                display: "inline-flex",
                alignContent: "center",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                <Box sx={{
                    display: "inline-flex",
                    alignItems: "center"
                }}>
                    <HeaderLowerComponent icon={Category}>
                        دسته بندی محصولات
                    </HeaderLowerComponent>
                    <Box sx={{
                        fontSize: "18px",
                        opacity: 0.4
                    }}>
                        |
                    </Box>
                    <HeaderLowerComponent icon={Category}>
                        دسته بندی محصولات
                    </HeaderLowerComponent>
                </Box>
                <Box>
                    <HeaderLowerComponent icon={Category}>
                        دسته بندی محصولات
                    </HeaderLowerComponent>
                    <HeaderLowerComponent icon={Category}>
                        دسته بندی محصولات
                    </HeaderLowerComponent>
                </Box>
            </Container>
            {/*<HeaderCategories/>*/}
        </Container>
    )
}

export default HeaderLower