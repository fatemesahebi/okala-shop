import React,{Component} from "react";
import {Stack} from "@mui/material";

function CreateBrand({imageBrand}){
    return(
        <>
            <Stack
                direction="row-reverse"
                sx={{width:"3rem",height:"3rem" ,margin: "3rem auto"}}
            >
                <img style={{width:"50px",height:"50px"}} src={imageBrand}/>
            </Stack>
        </>
    )
}
export default CreateBrand;