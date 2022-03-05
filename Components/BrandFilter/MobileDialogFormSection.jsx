import React, {useState} from 'react';
import {Box, Stack, Typography} from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {InputAdornment, OutlinedInput} from "@material-ui/core";
import Image from "next/image";
import search from "../../public/SVG/search.svg";
import PN from "persian-number";


const MobileDialogFormSection = ({filterBrand, setFilterBrand, brandsOfCategory}) => {
    const [filter, setFilter] = useState('')
    console.log(brandsOfCategory)
    const handleChangeFilterBrand = (e, item) => {
        (e.target.checked) ?
            setFilterBrand([...filterBrand, item.title])
            : setFilterBrand(filterBrand.filter(filter => filter !== item.title))

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
                <FormGroup sx={{width: '95vw', overflowY: 'scroll'}}>
                    {brandsOfCategory?.filter(item => item.title.includes(filter)).length === 0 ? null :
                        brandsOfCategory?.filter(item => item.title.includes(filter)).map((item,i) =>
                            <Stack key={i} justifyContent={"start"} alignItems={"center"} direction={"row"}>
                                <FormControlLabel key={item} control={<Checkbox checked={item.active} sx={{
                                    color: "lightGray.main",
                                    fontSize: "0.7 rem",
                                    '&.Mui-checked': {
                                        color: ['#f01436']
                                    }
                                }} onChange={(e) => handleChangeFilterBrand(e, item)}/>}
                                                  label={item.title}/>
                                <Typography fontSize={"0.7rem"} color={"lightgray.main"}
                                            p={2}>{PN.convertEnToPe(`(${item.count})`)}</Typography>
                                <Typography fontSize={"0.7rem"} textTransform={"capitalize"} color={"lightgray.main"}
                                            sx={{marginRight: "auto", pl: 3}}>{item.brandEn}</Typography>
                            </Stack>
                        )}
                </FormGroup>
            </Box>
        </div>
    );
};

export default MobileDialogFormSection;
