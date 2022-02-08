import * as React from 'react';
import {Box, Typography} from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormSection from "./FormSection";
import Products from "./Products";
import ShowBar from "./ShowBar";
import {Paper} from "@material-ui/core";

const BrandFilter = () => {
    return (
        <Box sx={{display: 'flex',justifyContent:'flex-start'}}>
            <Box display={{xl:'block',lg:'block',md:'none',sm:'none',xs:'none'}}>
                <Accordion sx={{width:"20rem",boxShadow:"rgba(0, 0, 0, 0.04) 0px 3px 5px",borderRadius:"1rem"}}>
                    <AccordionSummary sx={{width: '308px', height: '83px', borderRadius: '42px'}}
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
                    <AccordionDetails sx={{height: '300px', width: '308px', overflow: "scroll", overflowX: 'hidden'}}>
                        <FormSection/>
                    </AccordionDetails>
                </Accordion>
            </Box>
            <Paper elevation={0} sx={{padding:"10px"}}>
                <Paper elevation={0} >
                    <Products/>
                </Paper>
            </Paper>
        </Box>
    );

};

export default BrandFilter;
