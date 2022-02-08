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

const FilterSelection = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"><Typography>پرفروشترین</Typography></FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
                <FormControlLabel value="female" control={<Radio/>} label="بیشترین تخفیف"/>
                <FormControlLabel value="male" control={<Radio/>} label="ارزانترین"/>
                <FormControlLabel value="other" control={<Radio/>} label="گرانترین"/>
            </RadioGroup>
        </FormControl>
)
    ;
};

export default FilterSelection;
