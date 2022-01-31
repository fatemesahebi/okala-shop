import React,{Component} from "react";
import {Stack} from "@mui/material";

function CreateBrand({imageBrand,amongs}){
    return(
        <>
            <Stack
                direction="row-reverse"
                spacing={2}
                sx={{width:"3rem",height:"3rem"}}
            >
                <img src={imageBrand}/>
                <p style={{marginTop:'.7rem', color:"#ededed"}}>{amongs}</p>
            </Stack>
        </>
    )
}
export default CreateBrand;