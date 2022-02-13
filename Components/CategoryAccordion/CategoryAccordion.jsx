import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {Box} from "@mui/material";
import {useRouter} from "next/router";
import Link from '@mui/material/Link';
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
    const router=useRouter()

    return (
        <div dir={"rtl"}>
            <Accordion expanded={expanded} onChange={handleChange}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">

                    <Link href={'/category/' + categories.mainUrl|| "#"} underline="none" color="inherit">
                        <Typography onClick={()=>{router.push('/category/' + categories.mainUrl|| "#")}}>
                            {categories.mainTitle || categories.title}</Typography>
                    </Link>

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