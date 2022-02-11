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

export default function OnlyOfferProducts({setOfferFilter,offerFilter}) {
    const handleChangeSwitchOffer = (e) => {
      setOfferFilter(e.target.checked)
    }
    return (
        <Box>
            <GreenSwitch {...label} onChange={handleChangeSwitchOffer} />
            <Typography sx={{display:"inline"}}>فقط کالاهای پیشنهاد روز</Typography>
        </Box>
    );
}
