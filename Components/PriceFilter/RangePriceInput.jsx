import React from 'react';
import {OutlinedInput} from "@material-ui/core";

const RangePriceInput = () => {
    return (
        <div>
            <OutlinedInput
                name='search'
                startAdornment='تا'
                endAdornment=' ریال'
                style={{width: '140px', height: '50px', backgroundColor: '#F8F8F8'}}/>
            <OutlinedInput name='search'
                           startAdornment='از '
                           endAdornment=' ریال'
                           style={{width: '140px', height: '50px', backgroundColor: '#F8F8F8'}}/>
        </div>
    );
};

export default RangePriceInput;
