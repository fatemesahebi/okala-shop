import React from 'react';
import {Input, OutlinedInput, Typography} from "@mui/material";

const RangePriceInput = ({priceFilter}) => {
    return (
        <div>
            <Input
                disableUnderline={true}
                name='search'
                startAdornment={<Typography> از </Typography>}
                value={priceFilter[1]}
                endAdornment=' ریال'
                style={{width: '140px', height: '50px', backgroundColor: '#F8F8F8',padding:'10px'}}/>
            <Input name='search'
                   startAdornment={<Typography> تا </Typography>}
                   value={priceFilter[0]}
                   disableUnderline={true}
                   endAdornment=' ریال'
                   style={{width: '140px', height: '50px', backgroundColor: '#F8F8F8',padding:'10px'}}/>
        </div>
    );
};

export default RangePriceInput;
