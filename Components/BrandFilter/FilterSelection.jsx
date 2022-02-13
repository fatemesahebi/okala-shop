import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import {Typography} from "@mui/material";

const FilterSelection = ({setSort,setSortLable}) => {

    const handleChange = (sortType,e) => {
        setSort(sortType)
        setSortLable(e.target.value)
    };

    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"><Typography>{}</Typography></FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
                <FormControlLabel value="پرفروشترین" control={<Radio onChange={(e)=>handleChange("mostSale",e)}/>} label="پرفروشترین"/>
                <FormControlLabel value="بیشترین تخفیف" control={<Radio onChange={(e)=>handleChange('mostOff',e)}/>} label="بیشترین تخفیف"/>
                <FormControlLabel value="ارزانترین" control={<Radio onChange={(e)=>handleChange('leastPrice',e)}/>} label="ارزانترین"/>
                <FormControlLabel value="گرانترین" control={<Radio onChange={(e)=>handleChange('mostPrice',e)}/>} label="گرانترین"/>
            </RadioGroup>
        </FormControl>
)
    ;
};

export default FilterSelection;
