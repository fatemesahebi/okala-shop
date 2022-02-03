import {Box} from "@mui/material";
import SidebarCategories from "./SidebarCategories/SidebarCategories"
import Subcategories from "../Subcategories/Subcategories";

const CategorySidebar = () => {
    return (
        <Box sx={{
            display: "inline-flex",
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                width: "17rem",
                borderLeft: "1px solid rgba(0,0,0,0.1)",
                height: "31.5rem"
            }}>
                <Box>
                    <SidebarCategories>
                        مواد غذایی
                    </SidebarCategories>
                </Box>
                <Box>
                    <SidebarCategories>
                        مواد غذایی
                    </SidebarCategories>
                </Box>
                <Box>
                    <SidebarCategories>
                        مواد غذایی
                    </SidebarCategories>
                </Box>
                <Box>
                    <SidebarCategories>
                        مواد غذایی
                    </SidebarCategories>
                </Box>
                <Box>
                    <SidebarCategories>
                        مواد غذایی
                    </SidebarCategories>
                </Box>
            </Box>
            <Subcategories/>
        </Box>
    )
}

export default CategorySidebar