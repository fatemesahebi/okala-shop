import {Box, Typography} from "@mui/material";
import CategoryBox from "./CategoryBox/CategoryBox";

const Subcategories = () => {
    return (
        <Box sx={{
            width: "68rem",
            display: "flex",
            flexWrap: "wrap",
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                width: "20rem",
                height: "31.5rem"
            }}>
                <CategoryBox/>
            </Box>
        </Box>
    )
}

export default Subcategories