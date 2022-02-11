import React, {useState} from 'react';
import {Box} from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import {labelData} from "./labelData";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {InputAdornment, OutlinedInput} from "@material-ui/core";
import Image from "next/image";
import search from "../../public/SVG/search.svg";
const FormSection = ({filterBrand,setFilterBrand,brandsOfCategory}) => {
    const [filter, setFilter] = useState('')
    const handleChangeFilterBrand=(e,item)=>{
        (e.target.checked)?
            setFilterBrand([...filterBrand,item])
            : setFilterBrand(filterBrand.filter(filter=> filter!== item))
    }
    return (
        <div>
            <Box
                component="form"
                noValidate autoComplete="off">
                <OutlinedInput onChange={e => setFilter(e.target.value)} value={filter} name='search'
                               startAdornment={<InputAdornment position="start"><Image src={search}/></InputAdornment>}
                               style={{borderRadius: '12px', width: '253px', height: '50px'}}
                               placeholder={'جستجوی نام برند ...'}/></Box>
            <Box component="div">
                <FormGroup>
                    {brandsOfCategory?.filter(item => item.includes(filter)).length === 0 ? null :
                        brandsOfCategory.filter(item => item.includes(filter)).map(item =>
                        <FormControlLabel key={item} control={<Checkbox
                            onChange={(e)=>handleChangeFilterBrand(e,item)}/>} label={item}/>)}
                </FormGroup>
            </Box>
        </div>
    );
};

export default FormSection;
