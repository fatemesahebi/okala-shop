import React from 'react';

import {Input, OutlinedInput, Typography} from "@material-ui/core";

export const MobileDialogInput = ({priceFilter}) => {
    return (
        <div>
            <Input
                disableUnderline={true}
                name='search'
                value={priceFilter[1]}
                style={{width: '140px', height: '50px', padding: '10px',borderRadius:'5px',border:'solid 2px lightgray'}}/>
            <Input name='search'
                   value={priceFilter[0]}
                   disableUnderline={true}
                   style={{width: '140px', height: '50px', padding: '10px',borderRadius:'5px',border:'solid 2px lightgray'}}/>
        </div>
    )
}


