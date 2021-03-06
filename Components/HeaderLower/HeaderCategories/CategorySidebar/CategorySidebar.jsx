import {Box, Tab, Tabs, TabsUnstyled, TabUnstyled} from "@mui/material";
import SidebarCategories from "./SidebarCategories/SidebarCategories"
import Subcategories from "../Subcategories/Subcategories";
import {useState} from "react";
import {menuData} from "../../../../lib/mirage/menuData";

const CategorySidebar = ({categories}) => {
    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
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
                <Tabs value={value}
                      orientation={"vertical"}
                      onChange={handleChange}
                      aria-label="basic tabs example"
                      TabIndicatorProps={{
                          style: {
                              backgroundColor: "transparent",
                          }
                      }}
                >
                    {categories.items1.map((item, index) => (
                        <Tab
                            key={index}
                            sx={{
                                width: "17rem",
                                alignItems: "flex-start",
                                alignSelf: "flex-start",
                                fontWeight: "bold",
                                color: "#f01436 !important",
                                backgroundColor: value===index?"#f0f0f0":"white"
                            }}
                            onMouseOver={() => {
                                document.getElementById(`sidebar-tab-${index}`).click();
                            }}
                            icon={<SidebarCategories value={value} index={index}>{item.title}</SidebarCategories>}
                            id={`sidebar-tab-${index}`}
                            aria-controls={`sidebar-tabpanel-${index}`}/>
                    ))}
                </Tabs>
            </Box>
            {categories.items1.map((item, index) => (
                <Box key={index} role={"tabpanel"} id={`sidebar-tabpanel-${index}`} aria-labelledby={`sidebar-tab-${index}`} hidden={value !== index}>
                    {value === index && (
                        <Subcategories categories={item}/>
                    )}
                </Box>
            ))}

        </Box>
    )
}

export default CategorySidebar