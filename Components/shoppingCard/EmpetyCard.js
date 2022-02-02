import React from 'react';
import {Box, Typography} from "@mui/material";
import Image from "next/image";
import empetyCart from "../../public/images/emptyCart.png";

const EmpetyCard = () => {
    console.log("empety")
    return (
    <Box sx={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center',rowGap:'20px',mt:10}}>
        <Image src={empetyCart}/>
        <Typography sx={{fontWeight:'700'}}>درحال حاضر سبد خرید شما خالی است!</Typography>
        <Typography sx={{fontWeight: '700',color:'midGray.dark'}}>کالاهایی که دوست داری داشته باشی رو بهش اضافه کن</Typography>
    </Box >
    );
};

export default EmpetyCard;