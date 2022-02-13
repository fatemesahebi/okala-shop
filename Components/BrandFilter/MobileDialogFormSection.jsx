import React, {useState} from 'react';
import {Box} from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {InputAdornment, OutlinedInput} from "@material-ui/core";
import Image from "next/image";
import search from "../../public/SVG/search.svg";


const MobileDialogFormSection = ({filterBrand, setFilterBrand, brandsOfCategory}) => {
    const [filter, setFilter] = useState('')
    console.log(brandsOfCategory)
    const handleChangeFilterBrand = (e, item) => {
        (e.target.checked) ?
            setFilterBrand([...filterBrand, item])
            : setFilterBrand(filterBrand.filter(filter => filter !== item))
    }
    return (
        <div>
            <Box
                component="form" noValidate autoComplete="off">
                <OutlinedInput
                    style={{width: '95vw', overflowX: 'hidden'}}
                    onChange={e => setFilter(e.target.value)} value={filter} name='search'
                    startAdornment={<InputAdornment position="start"><Image src={search}/></InputAdornment>}
                    placeholder={'جستجوی نام برند ...'}/></Box>
            <Box component="div">
                <FormGroup sx={{width:'95vw',overflowY:'scroll'}}>
                    {brandsOfCategory?.filter(item => item.includes(filter)).length === 0 ? null :
                        brandsOfCategory?.filter(item => item.includes(filter)).map(item =>
                            <FormControlLabel key={item} control={<Checkbox sx={{
                                '&.Mui-checked': {
                                    color: ['#f01436']
                                }
                            }} onChange={(e) => handleChangeFilterBrand(e, item)}/>}
                                              label={item}/>)}
                </FormGroup>
            </Box>
        </div>
    );
};

export default MobileDialogFormSection;
