import React from 'react';
import {Typography} from "@mui/material";
import Button from "@mui/material/Button";

const DefaultValueButton = () => {
    return (
        <Button sx={{
            ml: '10px',
            color: '#f01436',
            border: 'solid 1px #b9b9b9',
            borderRadius: '10px',
            '&hover': {color: 'transparent'}
        }}><Typography>مقدار پیش فرض</Typography></Button>
    );
};

export default DefaultValueButton;
