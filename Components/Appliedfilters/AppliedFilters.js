import * as React from 'react';

import Typography from '@mui/material/Typography';
import {Box, Chip, Stack} from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";



export default function AppliedFilters({filterBrand, setFilterBrand,
                                           maxPrice, priceFilter, setPriceFilter}) {
    const handleDeleteAll = () => {
        setPriceFilter([0,maxPrice])
        setFilterBrand([])
    };

    const handleDelete = (deleteBrandFilter) => {
        setFilterBrand(filterBrand.filter(item=> item!== deleteBrandFilter))
    };
    return (
        <Box display={{xl: 'block', lg: 'block', md: 'block', sm: 'none', xs: 'none'}} sx={{padding: "1rem 1rem 0 0"}}>
            {((priceFilter[0]!==0)||(priceFilter[1]!== maxPrice)|| priceFilter.length!==0) &&

            <Box sx={{
                width: "20rem",
                boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
                borderRadius: ".3rem",
                background: "white",

            }}>

                <AccordionSummary>
                    <Typography sx={{
                        borderRight: "4px solid rgba(124, 200, 204, 1)",
                        height: "1rem",
                        top: ".5rem",
                        paddingRight: ".41rem",
                        right: "0",
                        fontWeight: "bolder"
                    }}>فیلتر های اعمال شده</Typography>
                    <button style={{
                        color: "red",
                        background: "white",
                        border: "0",
                        marginRight: "4.5rem",
                        cursor: "pointer",
                        fontFamily:"iranSans",
                        fontWeight:"bolder"
                    }}
                    onClick={handleDeleteAll}
                    >حذف همه
                    </button>
                </AccordionSummary>

                <Stack direction="row" spacing={1} sx={{padding: "1rem",
                    display:"flex",
                    flexWrap:"wrap"}}>

                    {(priceFilter[0]!==0)&& (priceFilter[1]!== maxPrice) &&  <Chip
                        label= {`از ${priceFilter[0]} تا ${priceFilter[1]}`}
                        onDelete={handleDelete}
                    />
                    }
                    {
                        filterBrand.map((brand,index) => <Chip key={index} sx={{marginLeft: ".7rem",marginBottom:".5rem"}}
                                                    label={brand}
                                                    onDelete={()=>handleDelete(brand)}/>)
                    }

                </Stack>
            </Box>
                }
        </Box>
    );
}
