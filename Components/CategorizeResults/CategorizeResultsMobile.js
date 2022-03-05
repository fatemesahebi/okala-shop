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


                {/*    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*        <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>سبزی</Typography>*/}
                {/*    </AccordionSummary>*/}
                {/*    <AccordionDetails>*/}
                {/*        <Accordion>*/}
                {/*            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>سبزی تازه</Typography>*/}
                {/*            </AccordionSummary>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>سبزیجات*/}
                {/*                        تازه</Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*        </Accordion>*/}
                {/*        <Accordion>*/}
                {/*            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>سبزیجات خشک و*/}
                {/*                    منجمد</Typography>*/}
                {/*            </AccordionSummary>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>سبزیجات*/}
                {/*                        منجمد</Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>سبزیجات خشک</Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*        </Accordion>*/}
                {/*    </AccordionDetails>*/}
                {/*</Accordion>*/}
                {/*<Accordion>*/}
                {/*    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*        <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>میوه</Typography>*/}
                {/*    </AccordionSummary>*/}
                {/*    <AccordionDetails>*/}
                {/*        <Accordion>*/}
                {/*            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>میوه منجمد</Typography>*/}
                {/*            </AccordionSummary>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>آلبالو*/}
                {/*                        منجمد</Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*        </Accordion>*/}
                {/*        <Accordion>*/}
                {/*            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}> صیفی جات</Typography>*/}
                {/*            </AccordionSummary>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>گل کلم</Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>لوبیا سبز</Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>باقلا تازه</Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>بامیه</Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>فلفل تند</Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>گوجه فرنگی</Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>چغندر</Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>زنجبیل</Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>فلفل شیرین</Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>کاهو و کلم</Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>لیمو ترش</Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>بلال </Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>سیر</Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography>شلغم</Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>کدو و*/}
                {/*                        بادمجان</Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>فلفل دلمه</Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>هویج</Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>پیاز و سیب*/}
                {/*                        زمینی</Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}

                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>قارچ</Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*        </Accordion>*/}

                {/*        <Accordion>*/}
                {/*            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>میوه تازه</Typography>*/}
                {/*            </AccordionSummary>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>هندوانه و*/}
                {/*                        طالبی</Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>نارنگی</Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>لیمو شیرین </Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>پرتقال</Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>انار </Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>موز </Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>سیب</Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>خیار</Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>کیوی </Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>گلابی</Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>خربزه </Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>انگور </Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography>گیلاس</Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>هلو و شلیل</Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>آلو و*/}
                {/*                        زردآلو</Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>گوجه سبز </Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>توت فرنگی</Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>آلبالو</Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>میوه های*/}
                {/*                        استوایی </Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>نارگیل </Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}> خرمالو</Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>گریپ فروت </Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>پسته خام</Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}> آلوئه ورا</Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>زغال اخنه </Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>انجیر تازه </Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>ملون و*/}
                {/*                        دستنبو</Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>زالزالک </Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>به</Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}
                {/*            <Accordion sx={{paddingRight: "1rem"}}>*/}
                {/*                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
                {/*                    <Typography style={{paddingRight: ".5rem", fontWeight: "bold"}}>نارنج </Typography>*/}
                {/*                </AccordionSummary>*/}
                {/*            </Accordion>*/}

                {/*    </Accordion>*/}
                {/*</AccordionDetails>*/}
            </Accordion>
            {/*        </AccordionDetails>*/}

            {/*</Accordion>*/}
        </Box>
    )
        ;
}
