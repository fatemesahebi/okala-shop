import React from "react";
import {Box} from "@mui/system";
import Image from "next/image"
function MenuItem({iconMenu, textMenu}) {
    return(
        <>
            <Box sx={{
                display: "flex",
                flexDirection:'column',
                m:1,
                textAlign: "center"
            }}
            >
                <Image src={iconMenu}/>
                <p>{textMenu}</p>
            </Box>
        </>
    )
}
export default MenuItem;