import React from 'react';
import {Typography} from "@mui/material";
import Button from "@mui/material/Button";

const DefaultValueButton = ({setValue,setPriceFilter,maxPrice}) => {
    const handleDefaultValue=()=>{
        setValue([0,100])
        setPriceFilter([0,maxPrice])
    }
    return (
        <Button sx={{
            ml: '10px',
            color: '#f01436',
            border: 'solid 1px #b9b9b9',
            borderRadius: '10px',
            '&hover': {color: 'transparent'}
        }}
        onClick={handleDefaultValue}
        ><Typography>مقدار پیش فرض</Typography></Button>
    );
};

export default DefaultValueButton;
