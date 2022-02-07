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

export default function SearchResults() {
    return (
        <Box sx={{padding:"1rem"}}>
            <Accordion sx={{width:"20rem",boxShadow:"rgba(0, 0, 0, 0.04) 0px 3px 5px",borderRadius:"1rem"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{borderRight:"4px solid rgba(124, 200, 204, 1)",height:"1rem",top:".5rem",paddingRight:".41rem",right:"0",fontWeight:"bolder"}}> جستجو در نتایج</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Paper
                        component="form"
                        sx={{ p: '.55rem .7rem', display: 'flex', alignItems: 'center', width: "18rem" , borderRadius:".43rem",border:"1px solid rgba(175, 175, 175, 1)",boxShadow:"0",fontSize:".875rem"}}
                    >
                        <Image src={search}/>

                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="نام کالا یا برند ..."
                            inputProps={{ 'aria-label': 'search okala' }}
                        />
                    </Paper>
                </AccordionDetails>
            </Accordion>

        </Box>
    );
}
