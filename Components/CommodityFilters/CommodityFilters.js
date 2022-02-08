import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';
import {Box, Typography} from "@mui/material";

const GreenSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: pink[600],
        '&:hover': {
            backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
        },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: pink[600],
    },
}));

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function CommodityFilters() {
    return (
        <Box sx={{width:"19rem", height:"7rem",boxShadow:"rgba(0, 0, 0, 0.04) 0px 3px 5px",borderRadius:"1rem",padding:"1rem",margin:"2rem"}}>
            <GreenSwitch {...label} />
            <Typography sx={{display:"inline"}}>فقط کالاهای موجود</Typography>
            <hr style={{color:"rgba(236,236,236,0.21)"}}/>
            <GreenSwitch {...label} />
            <Typography sx={{display:"inline"}}>فقط کالاهای پیشنهاد روز</Typography>
        </Box>
    );
}
