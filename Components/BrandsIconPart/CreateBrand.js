import React,{Component} from "react";
import {Stack} from "@mui/material";

function CreateBrand({imageBrand,amongs}){
    return(
        <>
            <Stack
                direction="row-reverse"
                // spacing={2}
                paddingTop={2}
                sx={{width:"3rem",height:"3rem"}}
            >
                <img style={{width:"50px",height:"50px"}} src={imageBrand}/>
                <p style={{marginTop:'.4rem',paddingLeft:"1.4rem", color:"#ededed",fontSize:"1rem"}}>{amongs}</p>
            </Stack>
        </>
    )
}
export default CreateBrand;