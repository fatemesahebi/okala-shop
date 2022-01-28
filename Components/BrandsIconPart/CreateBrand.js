import React,{Component} from "react";
import {Stack} from "@mui/material";

function CreateBrand({imageBrand,amongs}){
    return(
        <>
            <Stack
                direction="row-reverse"
                spacing={2}>
                <img src={imageBrand}/>
                <p style={{marginTop:'1.5rem', color:"#ededed"}}>{amongs}</p>
            </Stack>
        </>
    )
}
export default CreateBrand;