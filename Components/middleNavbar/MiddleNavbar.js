import React from "react";
import {Box} from "@mui/system";
import {useRouter} from "next/router";

function MiddleNavbar({imagesProducts, textProducts,group}) {
    const router=useRouter()
    return(
        <>
            <Box sx={{
                display: "flex",
                flexDirection:'column',
                m:1,
                textAlign: "center"
            }}
                 onClick={()=>{router.push('/category/' + textProducts)}}
            >
                <img src={imagesProducts}/>
                <p>{textProducts}</p>
            </Box>
        </>
    )
}
export default MiddleNavbar;