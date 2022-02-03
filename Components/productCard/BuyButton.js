import React from 'react';
import {Stack, Typography} from "@mui/material";
import PN from "persian-number";

const BuyButton = ({totalOrder,active}) => {

    return (
        <div>
            <Stack sx={{
                color: 'white.main',
                backgroundColor: 'red.main',
                flexDirection: 'row',
                alignItems: 'center',
                width: '90%',
                height: "55px",
                m: "auto",
                mt: 2,
                borderRadius: "10px",
                opacity:`${(active)? '100%': "30%"}`
            }}>
                <Typography variant={"h7"} sx={{m: "auto", fontWeight: 700, pr: 15}}>ثبت سفارش</Typography>
                <Stack
                    sx={{
                        flexDirection: 'row',
                        mr: 'auto',
                        backgroundColor: 'red.dark',
                        m: 1,
                        height:"70%" ,
                        borderRadius: "10px",
                        textAlign: 'center',
                        p: 1.2,
                    }}><Typography
                    sx={{fontWeight: 700}}>{PN.convertEnToPe(PN.sliceNumber(`${totalOrder}`))}</Typography>
                    <Typography
                        sx={{fontWeight: 700, pr: 1}} variant={"body2"}> ریال</Typography></Stack>
            </Stack>
        </div>
    );
};

export default BuyButton;