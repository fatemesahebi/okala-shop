
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
        <Box display={{xl:'block',lg:'block',md:'none',sm:'none',xs:'none'}} sx={{padding:"1rem 1rem 0 0"}}>
            <Accordion sx={{width:"20rem",boxShadow:"rgba(0, 0, 0, 0.04) 0px 3px 5px",borderRadius:"1rem"}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{borderRight:"4px solid rgba(124, 200, 204, 1)",height:"1rem",top:".5rem",paddingRight:".41rem",right:"0",fontWeight:"bolder"}}> دسته بندی در نتایج</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{height:"11rem",overflowY:"scroll",lineHeight:"0",padding:"0"}}>

                    <Stack sx={{flexDirection:"row",paddingRight:"1rem"}}>
                        <Image src={arrowdwon}/>
                    <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}>میوه و سبزیجات</Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.2rem"}}>
                        <Image src={arrowleft}/>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",marginRight:"-.6rem",lineHeight:".7rem"}}> سبزی</Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3rem"}}>
                        <Image src={arrowdwon}/>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> سبزی تازه</Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> سبزیجات تازه</Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3rem"}}>
                        <Image src={arrowdwon}/>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> سبزیجات خشک و منجمد</Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> سبزیجات منجمد</Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> سبزی خشک </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"2.2rem"}}>
                        <Image src={arrowleft}/>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",marginRight:"-.6rem",lineHeight:".7rem"}}> میوه </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3rem"}}>
                        <Image src={arrowdwon}/>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> میوه منجمد</Button>
                    </Stack>

                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> آلبالو منجمد </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3rem"}}>
                        <Image src={arrowdwon}/>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> صیفی جات </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> گل کلم </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> لوبیا سبز </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> باقلا تازه </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> بامیه </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> فلفل تند </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> گوجه فرنگی </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> چغندر </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> زنجبیل </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> فلفل شیرین </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> کاهو و کلم </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> لیمو ترش </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> بلال </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> سیر </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> شلغم </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> کدو بادمجان </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> فلفل دلمه </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> هویج </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> پیاز و سیب زمینی </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> قارچ </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3rem"}}>
                        <Image src={arrowdwon}/>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> میوه تازه </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> هندوانه و طالبی </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> نارنگی </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> لیمو شیرین </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> پرتقال</Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> انار </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> موز </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> سیب </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> خیار </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> کیوی </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> گلابی </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> خربزه </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> انگور </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> گیلاس </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> هلو و شلیل </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> آلو و زرد آلو </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> گوجه سبز </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> توت فرنگی </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> آلبالو </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> میوه های استوایی </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> نارگیل </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> خرمالو </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> گریپ فروت </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> پسته خام  </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> آلوئه ورا </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> زغال اخته </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> انجیر تازه </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> ملون و دستنبو </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> زالزالک </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> به </Button>
                    </Stack>
                    <Stack sx={{flexDirection:"row",marginRight:"3.9rem"}}>
                        <Button style={{color:"gray",fontSize:".9rem",fontWeight:"bold",lineHeight:".7rem"}}> نارنج </Button>
                    </Stack>

                </AccordionDetails>
            </Accordion>

        </Box>
    );
}
