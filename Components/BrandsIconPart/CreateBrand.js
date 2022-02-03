import React,{Component} from "react";
import {Stack} from "@mui/material";

function CreateBrand({imageBrand,amongs}){
    return(
        <>
            <Stack
                direction="row-reverse"

                sx={{width:"3rem",height:"3rem"}}
            >
                <img style={{width:"50px",height:"50px"}} src={imageBrand}/>
                <p style={{marginTop:'.6rem',paddingLeft:"2rem", color:"#ededed",fontSize:"1rem"}}>{amongs}</p>
            </Stack>
        </>
    )
}
export default CreateBrand;