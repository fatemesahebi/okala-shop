import React from 'react';
import {Input, OutlinedInput} from "@material-ui/core";

const RangePriceInput = ({priceFilter}) => {
    return (
        <div>
            <Input
                disableUnderline={true}

                name='search'
                startAdornment='تا'
                value={priceFilter[1]}
                endAdornment=' ریال'
                style={{width: '140px', height: '50px', backgroundColor: '#F8F8F8',padding:'10px'}}/>
            <Input name='search'
                   startAdornment='از '
                   value={priceFilter[0]}
                   disableUnderline={true}
                   endAdornment=' ریال'
                   style={{width: '140px', height: '50px', backgroundColor: '#F8F8F8',padding:'10px'}}/>
        </div>
    );
};

export default RangePriceInput;
