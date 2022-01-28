import React from "react";
import {Box} from "@mui/system";

function CategoryProduct({imagesProducts, textProducts}) {
    return(
        <>
            <Box sx={{
                display: "flex",
                flexDirection:'column',
                m:3,
                p:2,
                textAlign: "center"
            }}
            >
                <img src={imagesProducts}/>
                <p>{textProducts}</p>
            </Box>
        </>
    )
}
export default CategoryProduct;