import * as React from 'react';

import Typography from '@mui/material/Typography';
import {Box, Chip, Stack} from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";

import Image from "next/image";
import close from "../../public/SVG/icons8-close.svg";



export default function AppliedFilters(){
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };
    return (
        <Box display={{xl:'block',lg:'block',md:'block',sm:'none',xs:'none'}} sx={{padding:"1rem 1rem 0 0"}}>
            <Box sx={{width:"20rem",boxShadow:"rgba(0, 0, 0, 0.04) 0px 3px 5px",borderRadius:".3rem",background:"white"}}>
                <AccordionSummary>
                    <Typography sx={{borderRight:"4px solid rgba(124, 200, 204, 1)",height:"1rem",top:".5rem",paddingRight:".41rem",right:"0",fontWeight:"bolder"}}>فیلتر های اعمال شده</Typography>
                    <button style={{color:"red",background:"white",border:"0",marginRight:"4.5rem",cursor:"pointer"}}>حذف همه </button>
                </AccordionSummary>

                <Stack direction="row" spacing={1} sx={{padding:"1rem"}}>
                    <Chip
                        label="بلوط"
                        onClick={handleClick}
                        onDelete={handleDelete}
                    />
                    <Chip
                        label="ناردون"
                        onClick={handleClick}
                        onDelete={handleDelete}
                    />
                </Stack>
            </Box>

        </Box>
    );
}
