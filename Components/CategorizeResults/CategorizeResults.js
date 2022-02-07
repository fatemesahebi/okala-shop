
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
import {Box, Button, Stack} from "@mui/material";
import arrowdwon from "./../../public/SVG/arrowdwon.svg"
import arrowleft from "../../public/SVG/left.svg"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

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
                <AccordionDetails sx={{height:"11rem",overflowY:"scroll",fontSize:".8rem",lineHeight:"0",padding:"0"}}>

                    <Stack sx={{flexDirection:"row"}}>
                        <Image src={arrowdwon}/>
                    <Button>میوه و سبزیجات</Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"1rem"}}>
                        <Image src={arrowleft}/>
                        <Button> سبزی</Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2rem"}}>
                        <Image src={arrowdwon}/>
                        <Button> سبزی تازه</Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> سبزیجات تازه</Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2rem"}}>
                        <Image src={arrowdwon}/>
                        <Button> سبزیجات خشک و منجمد</Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> سبزیجات منجمد</Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> سبزی خشک </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"1rem"}}>
                        <Image src={arrowleft}/>
                        <Button> میوه </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2rem"}}>
                        <Image src={arrowdwon}/>
                        <Button> میوه منجمد</Button>
                    </Stack>

                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> آلبالو منجمد </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2rem"}}>
                        <Image src={arrowdwon}/>
                        <Button> صیفی جات </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> گل کلم </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> لوبیا سبز </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> باقلا تازه </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> بامیه </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> فلفل تند </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> گوجه فرنگی </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> چغندر </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> زنجبیل </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> فلفل شیرین </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> کاهو و کلم </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> لیمو ترش </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> بلال </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> سیر </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> شلغم </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> کدو بادمجان </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> فلفل دلمه </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> هویج </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> پیاز و سیب زمینی </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> قارچ </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2rem"}}>
                        <Image src={arrowdwon}/>
                        <Button> میوه تازه </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> هندوانه و طالبی </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> نارنگی </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> لیمو شیرین </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> پرتقال</Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> انار </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> موز </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> سیب </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> خیار </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> کیوی </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> گلابی </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> خربزه </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> انگور </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> گیلاس </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> هلو و شلیل </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> آلو و زرد آلو </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> گوجه سبز </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> توت فرنگی </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> آلبالو </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> میوه های استوایی </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> نارگیل </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> خرمالو </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> گریپ فروت </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> پسته خام  </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> آلوئه ورا </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> زغال اخته </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> انجیر تازه </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> ملون و دستنبو </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> زالزالک </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> به </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.5rem"}}>
                        <Button> نارنج </Button>
                    </Stack>

                </AccordionDetails>
            </Accordion>

        </Box>
    );
}
