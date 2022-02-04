import {Container, Tabs, Tab, Box} from "@mui/material";
import CategorySidebar from "../CategorySidebar/CategorySidebar";
import {useState} from "react";
import {menuData} from "../../../../lib/mirage/menuData"

const CategoryBar = () => {
    const [value, setValue] = useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
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
                height: "3rem",

            }}>
                <Tabs value={value}
                      onChange={handleChange}
                      aria-label="basic tabs example"
                      TabIndicatorProps={{
                          style: {
                              backgroundColor: "#f01436",
                          }
                      }}
                >
                    {menuData.map((item , index) => (
                        <Tab
                            sx={{
                                fontWeight: "bold",
                                color: value===index?"#f01436 !important":"black"
                            }}
                            onMouseOver={() => {
                                document.getElementById(`category-tab-${index}`).click();
                            }}
                            label={item.mainTitle}
                            id={`category-tab-${index}`}
                            aria-controls={`category-tabpanel-${index}`}/>
                    ))}
                </Tabs>
            </Container>
            {menuData.map((item, index) => (
                <Box role={"tabpanel"} id={`category-tabpanel-${index}`} aria-labelledby={`category-tab-${index}`} hidden={value !== index}>
                    {value === index && (
                        <CategorySidebar categories={item}/>
                    )}
                </Box>
            ))}
        </Box>
    )
}

export default CategoryBar