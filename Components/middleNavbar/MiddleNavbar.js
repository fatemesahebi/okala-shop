import React from "react";
import {Box} from "@mui/system";

function MiddleNavbar({imagesProducts, textProducts}) {
    return(
        <>
            <Box sx={{
                display: "flex",
                flexDirection:'column',
                m:1,
                textAlign: "center"
            }}
            >
                <img src={imagesProducts}/>
                <p>{textProducts}</p>
            </Box>
        </>
    )
}
export default MiddleNavbar;