import React, {useState} from 'react';
import PN from "persian-number"
import {Input, OutlinedInput, Typography} from "@mui/material";

export const MobileDialogInput = ({priceFilter,maxPrice}) => {
    const [inputPrice,setInputPrice]=useState([0,maxPrice])
const handleChangePrice=(id,e)=>{
    // (id===0)? setInputPrice([e.target.value,inputPrice[1]]) :
    //     setInputPrice([inputPrice[0],e.target.value])
}
    return (
        <div style={{display:'flex',alignItems:'center'}}>
            <Typography>از</Typography>
            <Input
                disableUnderline={true}
                name='search'
                onChange={(e)=>handleChangePrice(e,0)}

                value={PN.convertEnToPe(`${priceFilter[0]}`)}
                style={{width: '100px', height: '50px', padding: '10px',borderRadius:'5px',border:'solid 2px lightgray',marginRight:'10px'}}/>
            <Typography style={{marginRight:'10px'}}>ریال</Typography>
            <Typography style={{marginRight:'10px'}}>تا</Typography>
            <Input name='search'


                   value={PN.convertEnToPe(`${priceFilter[1]}`)}
                   onChange={(e)=>handleChangePrice(e,1)}
                   disableUnderline={true}
                   style={{width: '100px', height: '50px', padding: '10px',borderRadius:'5px',border:'solid 2px lightgray',marginRight:'10px'}}/>
            <Typography style={{marginRight:'10px'}}>ریال</Typography>
        </div>
    )
}


