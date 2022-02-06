
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import search from "./../../public/SVG/search.svg"
import Image from "next/image";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {Box} from "@mui/material";

export default function CategorizeResults() {
    return (
        <Box sx={{padding:"1rem"}}>
            <Accordion sx={{width:"20rem",boxShadow:"rgba(0, 0, 0, 0.04) 0px 3px 5px",borderRadius:"1rem"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{borderRight:"4px solid rgba(124, 200, 204, 1)",height:"1rem",top:".5rem",paddingRight:".41rem",right:"0",fontWeight:"bolder"}}> دسته بندی در نتایج</Typography>
                </AccordionSummary>
                <AccordionDetails>

                </AccordionDetails>
            </Accordion>

        </Box>
    );
}
