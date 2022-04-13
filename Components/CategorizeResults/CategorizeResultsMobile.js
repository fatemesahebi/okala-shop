import * as React from 'react';
import {styled} from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {Box} from "@mui/material";
import {menuData} from "../../lib/mirage/menuData";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({theme}) => ({

    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{fontSize: '0.9rem', transform: 'rotate(180deg)'}}/>}
        {...props}
    />
))(({theme}) => ({
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(-90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({}));

export default function CategorizeResultsMobile({categoryName}) {
    const [expanded, setExpanded] = React.useState('panel1');
    let categorizeResultsData = menuData.filter(item => item.mainTitle === categoryName)

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Box sx={{display: {sm: 'flex', md: 'flex', xs: 'flex'}, flexDirection: "column", cursor: "pointer"}}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">

                </AccordionSummary>
                <AccordionDetails>
                        {categorizeResultsData[0].items1.map((cat1, i) =>
                            <>
                            <Accordion key={i}>

                            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>
                                        {categorizeResultsData[0].items1[i].title}</Typography>
                                </AccordionSummary>
                                {categorizeResultsData[0].items1[i].items2.map((cat2, j) =>
                                    <>
                                        <Accordion key={j}>
                                            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                                <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>
                                                    {categorizeResultsData[0].items1[i].items2[j].title}
                                                </Typography>
                                            </AccordionSummary>
                                            {categorizeResultsData[0].items1[i].items2[j].items3.map((cat3, k) =>

                                                <Accordion key={k} sx={{paddingRight: "1rem"}}>
                                                    <AccordionSummary aria-controls="panel2d-content"
                                                                      id="panel2d-header">
                                                        <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>
                                                            {categorizeResultsData[0].items1[i].items2[j].items3[k].title}</Typography>
                                                    </AccordionSummary>
                                                </Accordion>
                                            )}
                                        </Accordion>

                                    </>
                                )}
                            </Accordion>


                            </>
                        )}
                </AccordionDetails>

            </Accordion>

        </Box>
    )
        ;
}
