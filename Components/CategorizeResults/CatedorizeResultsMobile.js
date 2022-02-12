import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {Box} from "@mui/material";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({

    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({

}));

export default function CatedorizeResultsMobile() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Box sx={{display: {lg: 'none', md: 'none', xs: 'flex'}, flexDirection: "column"}}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">

                </AccordionSummary>
                <AccordionDetails>
                    <Accordion >
                        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                            <Typography>سبزی</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Accordion >
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>سبزی تازه</Typography>
                                </AccordionSummary>
                                <Accordion>
                                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                        <Typography>سبزیجات تازه</Typography>
                                    </AccordionSummary>
                                </Accordion>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>سبزیجات خشک و منجمد</Typography>
                                </AccordionSummary>
                                <Accordion>
                                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                        <Typography>سبزیجات منجمد</Typography>
                                    </AccordionSummary>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                        <Typography>سبزیجات خشک</Typography>
                                    </AccordionSummary>
                                </Accordion>
                            </Accordion>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography>میوه</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Accordion >
                            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                <Typography>میوه منجمد</Typography>
                            </AccordionSummary>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>آلباو منجمد</Typography>
                                </AccordionSummary>
                            </Accordion>
                        </Accordion>
                        <Accordion >
                            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                <Typography> صیفی جات</Typography>
                            </AccordionSummary>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>گل کلم</Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>لوبیا سبز</Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>باقلا تازه</Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>بامیه</Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>فلفل تند</Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>گوجه فرنگی</Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>چغندر</Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>زنجبیل</Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>فلفل شیرین</Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>کاهو و کلم</Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>لیمو ترش</Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>بلال </Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>سیر</Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>شلغم</Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>کدو و بادمجان</Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>فلفل دلمه</Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>هویج</Typography>
                                </AccordionSummary>
                            </Accordion><Accordion>
                            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                <Typography>پیاز و سیب زمینی</Typography>
                            </AccordionSummary>
                        </Accordion>

                            <Accordion >
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>قارچ</Typography>
                                </AccordionSummary>
                            </Accordion>
                        </Accordion>

                        <Accordion >
                            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                <Typography>میوه تازه</Typography>
                            </AccordionSummary>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>هندوانه و طالبی</Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>نارنگی</Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>لیمو شیرین </Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>پرتقال</Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>انار </Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>موز </Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>سیب</Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>خیار</Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>کیوی </Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>گلابی</Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>خربزه </Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>انگور </Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>گیلاس</Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>هلو و شلیل</Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>آلو و زردآلو</Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>گوجه سبز </Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>توت فرنگی</Typography>
                                </AccordionSummary>
                            </Accordion><Accordion>
                            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                <Typography>آلبالو</Typography>
                            </AccordionSummary>
                        </Accordion>
                            <Accordion >
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>میوه های استوایی </Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>نارگیل </Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography> خرمالو</Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>گریپ فروت </Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>پسته خام</Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography> آلوئه ورا</Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>زغال اخنه </Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>انجیر تازه </Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>ملون و دستنبو</Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>زالزالک </Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>به</Typography>
                                </AccordionSummary>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                    <Typography>نارنج </Typography>
                                </AccordionSummary>
                            </Accordion>

                        </Accordion>
                    </AccordionDetails>
            </Accordion>
                </AccordionDetails>
            {/*    ننننننننننننننننننننننننننننننننننن*/}
            </Accordion>
            {/*<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>*/}
            {/*    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">*/}
            {/*        <Typography>Collapsible Group Item #2</Typography>*/}
            {/*    </AccordionSummary>*/}
            {/*    <AccordionDetails>*/}
            {/*        <Typography>*/}
            {/*            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse*/}
            {/*            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor*/}
            {/*            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,*/}
            {/*            sit amet blandit leo lobortis eget.*/}
            {/*        </Typography>*/}
            {/*    </AccordionDetails>*/}
            {/*</Accordion>*/}
            {/*<Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>*/}
            {/*    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">*/}
            {/*        <Typography>Collapsible Group Item #3</Typography>*/}
            {/*    </AccordionSummary>*/}
            {/*    <AccordionDetails>*/}
            {/*        <Typography>*/}
            {/*            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse*/}
            {/*            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor*/}
            {/*            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,*/}
            {/*            sit amet blandit leo lobortis eget.*/}
            {/*        </Typography>*/}
            {/*    </AccordionDetails>*/}
            {/*</Accordion>*/}
        </Box>
    );
}
