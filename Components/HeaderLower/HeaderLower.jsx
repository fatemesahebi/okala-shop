import {Box, Button, Container, Typography} from "@mui/material";
import HeaderLowerComponent from "./HeaderLowerComponent/HeaderLowerComponent";
import HeaderCategories from "./HeaderCategories/HeaderCategories";
import Category from "./HeaderLowerComponent/category.svg"
import Discount from "../../public/SVG/discountIcon.svg"
import Rank from "../../public/SVG/okalaRank.svg"
import Blog from "../../public/SVG/okalaBlog.svg"
import {useState} from "react";

const HeaderLower = () => {
    const [open , setOpen] = useState(false)

    const handleCategory = () => {
        if(open === false)
            setOpen(true)
        else
            setOpen(false)
    }
    return (
        <Container maxWidth="100vw" sx={{
            display: "flex",
            flexDirection: "column",
            width: "100vw !important",
            margin: "0 !important",
            padding: "0 !important",
            position: "fixed",
            top: "10.5rem",
            zIndex: 12
        }}>
            <Container maxWidth="100vw" sx={{
                display: "inline-flex",
                alignItems: "center",
                alignContent: "center",
                justifyContent: "center",
                justifyItems: "center",
                margin: "0 !important",
                padding: "0 !important",
                width: "100vw !important",
                height: "3.2rem",
                backgroundColor: "#f0f0f0 !important",
            }}>
                <Container maxWidth="100vw" sx={{
                    margin: "0 !important",
                    padding: "0 !important",
                    width: {
                        lg: "81rem !important",
                        md: "100% !important"
                    },
                    display: "inline-flex",
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <Box sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        alignContent: "center"
                    }}>
                        <Box onClick={() => setOpen(!open)}>
                            <HeaderLowerComponent icon={Category}>
                                دسته بندی محصولات
                            </HeaderLowerComponent>
                        </Box>

                        <Box sx={{
                            fontSize: "18px",
                            opacity: 0.4
                        }}>
                            |
                        </Box>
                        <HeaderLowerComponent icon={Discount}>
                            تخفیف ها
                        </HeaderLowerComponent>
                    </Box>
                    <Box>
                        <HeaderLowerComponent icon={Rank}>
                            اکالا رنک
                        </HeaderLowerComponent>
                        <HeaderLowerComponent icon={Blog}>
                            اکالا بلاگ
                        </HeaderLowerComponent>
                    </Box>
                </Container>
            </Container>
            {open ? (
                    <HeaderCategories/>
            ) : (<></>)}
        </Container>

    )
}

export default HeaderLower