import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import {Typography} from "@mui/material";
import {useState} from "react";

const FilterSelection = () => {
    const [show, setShow] = useState('پرفروش ترین');
    const handleChange = (event) => {
        setShow(event.target.value);
    };

    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"><Typography>{}</Typography></FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
                <FormControlLabel value="پرفروش ترین" control={<Radio onChange={handleChange}/>} label="پرفروشترین"/>
                <FormControlLabel value="بیشترین تخفیف" control={<Radio onChange={handleChange}/>} label="بیشترین تخفیف"/>
                <FormControlLabel value="ارزانترین" control={<Radio onChange={handleChange}/>} label="ارزانترین"/>
                <FormControlLabel value="گرانترین" control={<Radio onChange={handleChange}/>} label="گرانترین"/>
            </RadioGroup>
        </FormControl>
)
    ;
};

export default FilterSelection;
