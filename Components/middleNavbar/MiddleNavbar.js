import React from "react";
import {Box} from "@mui/system";
import {useRouter} from "next/router";
import Link from '@mui/material/Link';

function MiddleNavbar({imagesProducts, textProducts,group}) {
    const router=useRouter()
    return(
        <>
            <Link href={'/category/' + group} underline="none" color="inherit">
            <Box sx={{
                display: "flex",
                flexDirection:'column',
                m:1,
                textAlign: "center"
            }}
                 onClick={()=>{router.push('/category/' + group)}}
            >
                <img src={imagesProducts}/>
                <p>{textProducts}</p>
            </Box>
            </Link>
        </>
    )
}
export default MiddleNavbar;