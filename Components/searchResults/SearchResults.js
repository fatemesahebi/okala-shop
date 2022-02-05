import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Input, TextField} from "@mui/material";

export default function SearchResults() {
    return (
        <div>
            <Accordion sx={{width:"20rem"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{borderRight:"4px solid rgba(124, 200, 204, 1)",height:"1rem",top:".5rem",paddingRight:".41rem",right:"0",fontWeight:"bolder"}}> جستجو در نتایج</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {/*<Typography>*/}
                    {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse*/}
                    {/*    malesuada lacus ex, sit amet blandit leo lobortis eget.*/}
                    {/*</Typography>*/}
                    <TextField id="outlined-basic" variant="outlined" placeholder="نام کالا یا برند ..." style={{borderRadius:"10px",width:"18rem"}}/>
                </AccordionDetails>
            </Accordion>

        </div>
    );
}
