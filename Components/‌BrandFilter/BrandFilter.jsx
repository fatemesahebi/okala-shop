import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Box, Typography} from '@mui/material'
import {InputAdornment, OutlinedInput} from "@material-ui/core";
import search from '../../public/SVG/search.svg'
import Image from 'next/image'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from '@emotion/styled'
import {useState} from "react";
import {useEffect} from "react";
import axios from "axios";
import {specialOffer} from '../../lib/mirage/data'
import SingleProductCard from '../productCard/ProductCard'
import SingleProduct from "../productCard/ProductCardElements";
import {productData} from "../productCard/ProductCardData";

const label = [
    {name: 'خشک پاک', id: 100}, {name: 'گلها', id: 101}, {name: 'نوبر سبز', id: 102}, {name: 'فله', id: 103},
    {name: 'ملارد', id: 104}, {name: 'راوک', id: 105}, {name: 'پمینا', id: 106}, {
        name: 'بلوط',
        id: 107
    }, {name: 'ارمغان پارس', id: 108},
    {name: 'برتر', id: 109}, {name: ' یک و یک', id: 110}, {name: 'دکتر بیژن', id: 111}, {
        name: 'سرد وتازه', id: 112
    }, {name: 'کرالیچین', id: 113}, {name: 'باملیکا', id: 114}, {name: 'سحرخیز', id: 115}, {
        name: ' رضوانی',
        id: 116
    },
    {name: 'نصر خاتم', id: 117}, {name: 'فارسی', id: 118}]


const BrandFilter = () => {
    const [filter, setFilter] = useState('')

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: "row",
            justifyContent: 'flex-start',
            alignItems: 'start',
            justifyItems: 'center',
            alignContent: 'center'
        }}>
            <div>
                <Accordion sx={{width: '308px'}}>
                    <AccordionSummary sx={{width: '308px', height: '83px'}}
                                      expandIcon={<ExpandMoreIcon/>}
                                      aria-controls="panel1a-content"
                                      id="panel1a-header">

                        <Box sx={{display: "inline-flex", gap: "10px"}}>
                            <Box sx={{
                                height: "1.5rem",
                                border: "4px solid rgba(124, 200, 204, 1)",
                                borderRadius: "100px"
                            }}>
                            </Box>
                            <Typography>برندهای موجود</Typography>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails sx={{height: '300px', width: '308px', overflow: "scroll"}}>
                        <Box
                            component="form"
                            sx={{'& > :not(style)': {m: 1},}} noValidate autoComplete="off">
                            <OutlinedInput onChange={e => setFilter(e.target.value)} value={filter} name='search'
                                           startAdornment={
                                               <InputAdornment position="start"><Image src={search}/></InputAdornment>}
                                           style={{borderRadius: '12px', width: '253px', height: '50px'}}
                                           placeholder="جستجوی نام برند ..."/></Box>
                        <Box component="div">
                            <FormGroup>

                                {label.filter(item => item.name.includes(filter)).length === 0 ? null : label.filter(item => item.name.includes(filter)).map(item =>
                                    <FormControlLabel key={item.id} control={<Checkbox/>}
                                                      label={item.name}/>)}
                            </FormGroup>
                        </Box>
                    </AccordionDetails>
                </Accordion>
            </div>
            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                {specialOffer.slice(0, 20).map(item =>
                    <Box sx={{display: 'flex', flexWrap: 'wrap'}}><SingleProduct product={item}/></Box>)}
            </Box>



        </Box>
    );

};

export default BrandFilter;
