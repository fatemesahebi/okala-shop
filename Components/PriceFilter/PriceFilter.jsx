import React from 'react';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {Box, Typography} from "@mui/material";
import AccordionDetails from "@mui/material/AccordionDetails";
import PriceFilterSlider from "./PriceFilterSlider";
import FilterPriceButton from "./FilterPriceButton";
import DefaultValueButton from "./DefaultValueButton";
import RangePriceInput from "./RangePriceInput";
import {useState} from "react";

const PriceFilter = ({setPriceFilter,priceFilter,maxPrice}) => {
const [value,setValue]=useState([0,100])
    return (
        <Box sx={{ justifyContent: 'flex-start', padding: "1rem",display:{xl:'block',lg:'block',md:'none',sm:'none',xs:'none'}}}>
            <div style={{display:{xl:'block',lg:'block',md:'none',sm:'none',xs:'none'}}}>
                <Accordion square={false}
                           sx={{
                               width: "20rem", boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
                               borderRadius: "1rem"
                           }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}
                                      aria-controls="panel1a-content"
                                      id="panel1a-header">
                        <Typography sx={{
                            borderRight: "4px solid rgba(124, 200, 204, 1)",
                            height: "1rem", top: ".5rem", paddingRight: ".41rem",
                            right: "0", fontWeight: "bolder"
                        }}> فیلتر قیمت</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <PriceFilterSlider
                            maxPrice={maxPrice}
                            value={value} setValue={setValue}
                            priceFilter={priceFilter} setPriceFilter={setPriceFilter}
                        />
                        <Box
                            component="form"
                            sx={{
                                display: 'flex', justifyContent: 'center',
                                mb: '2rem', outline: 'none'
                            }} noValidate
                            autoComplete="off">
                            <RangePriceInput priceFilter={priceFilter}/>
                        </Box>
                        <Box spacing={2} sx={{display: 'flex', justifyContent: 'center', mb: '1rem'}}>
                            <DefaultValueButton
                                maxPrice={maxPrice}
                               setValue={setValue}
                               setPriceFilter={setPriceFilter}
                            />
                            <FilterPriceButton/>
                        </Box>
                    </AccordionDetails>
                </Accordion>
            </div>
        </Box>
    );
};

export default PriceFilter;
