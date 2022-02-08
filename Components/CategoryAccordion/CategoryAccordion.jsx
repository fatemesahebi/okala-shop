import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {Box} from "@mui/material";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
        '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowBackIosIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(() => ({
    gap: "0.5rem",
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(-90deg)',
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
}));

export default function CategoryAccordion({categories , items}) {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (event) => {
        setExpanded(!expanded);
    };

    return (
        <div dir={"rtl"}>
            <Accordion expanded={expanded} onChange={handleChange}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>{categories.mainTitle || categories.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    { items !== "noitems" ? categories[items].map(item => (
                        <Box>
                            <CategoryAccordion categories={item} items={items === "items1" ? "items2":items === "items2" ? "items3" : "noitems"}/>
                        </Box>

                    ))
                    :
                    <></>}
                </AccordionDetails>
            </Accordion>
        </div>
    );
}