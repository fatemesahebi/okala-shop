import React from 'react';
import {Stack, Typography} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import search from "../../public/SVG/search.svg";
import Image from "next/image";
import {Paper} from "@material-ui/core";

const MobileHeaderCategory = () => {
    return (
        <Paper elevation={0} style={{backgroundColor: '#02a0a4',display:'flex',justifyContent:'space-between',width:'600px'}}>
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <Typography> <ArrowForwardIcon/></Typography>
                <Typography>میوه و سبزیجات</Typography>
            </div>
            <div>
                <Typography><Image src={search}/></Typography>
            </div>
        </Paper>
    );
};

export default MobileHeaderCategory;
//display={{xl:'block',lg:'block',md:'none',sm:'none',xs:'none'}}