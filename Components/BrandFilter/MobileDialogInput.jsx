import React from 'react';

import {Input, OutlinedInput, Typography} from "@mui/material";

export const MobileDialogInput = ({priceFilter}) => {
    return (
        <div style={{display:'flex',alignItems:'center'}}>
            <Typography>از</Typography>
            <Input
                disableUnderline={true}
                name='search'
                value={priceFilter[1]}
                style={{width: '100px', height: '50px', padding: '10px',borderRadius:'5px',border:'solid 2px lightgray',marginRight:'10px'}}/>
            <Typography style={{marginRight:'10px'}}>ریال</Typography>
            <Typography style={{marginRight:'10px'}}>تا</Typography>
            <Input name='search'
                   value={priceFilter[0]}
                   disableUnderline={true}
                   style={{width: '100px', height: '50px', padding: '10px',borderRadius:'5px',border:'solid 2px lightgray',marginRight:'10px'}}/>
            <Typography style={{marginRight:'10px'}}>ریال</Typography>
        </div>
    )
}


