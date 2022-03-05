import {Box, Typography} from "@mui/material";
import CategoryBox from "./CategoryBox/CategoryBox";

const Subcategories = ({categories}) => {
    return (
        <Box sx={{
            width: "68rem",
            display: "flex",
        }}>
            <Box sx={{
                display: "flex",
                padding: "1rem !important",
                gap: "1rem",
                flexDirection: "column",
                flexWrap: "wrap",
                width: "40rem",
                height: "31.5rem"
            }}>
                {categories.items2.map((item,index) => (
                    <CategoryBox key={index} categories={item}/>
                    ))}
            </Box>
        </Box>
    )
}

export default Subcategories