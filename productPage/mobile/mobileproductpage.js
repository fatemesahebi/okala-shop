import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ShareOutlined from '@mui/icons-material/ShareOutlined';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Link from '@mui/material/Link';
import Accordion from './customAccordion';
import {Button} from '@mui/material';
import {styled} from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import Breadcrumbs from './breadcrumb';
import CategoryProducts from '../../components/CategoryProducts/CategoryProducts'
import {HeaderFooterProvider} from "../../components";
import chat from "../../public/SVG/chat.svg"

import {
    Addtocart,
    Bottomwrapper,
    Brandwrapper,
    Infosection,
    Pricewrapper,
    Showcomments,
    Slidercontainer,
    Topsection,
    Topwrapper,
    Usersrate
} from './index';
import Image from "next/image";

const ColorButton = styled(Button)(({theme}) => ({
    width: '104px !important',
    height: '38px !important',
    minWidth: '104px !important',
    backgroundColor: 'rgb(240, 20, 54)',
    borderRadius: ' 12px',
    color: ' rgb(248, 248, 248) !important',
}));


export default function Productmobile() {
    return (
        <HeaderFooterProvider>
            <React.Fragment sx={{
                backgroundColor: '#F8F8F8',
                height: '100%',
                position: 'relative',
                direction: 'rtl',
                overflowX: 'hidden',
                overflowY: 'auto',
                paddingBottom: '56px',
            }}>
                <Topsection>
                    <IconButton>
                        <ArrowForwardOutlinedIcon/>
                    </IconButton>
                    <IconButton>
                        <ShareOutlined/>
                    </IconButton>
                </Topsection>
                <Box sx={{backgroundColor: '#f8f8f8'}}>
                    <Slidercontainer>

                    </Slidercontainer>
                    <Infosection sx={{backgroundColor: '#F8F8F8'}}>
                        <Topwrapper sx={{fontSize: '1rem'}}>
                            <Typography sx={{
                                color: 'rgba(22, 22, 22, 1)',
                                fontSize:' 1rem',
                                fontWeight: 'bold',
                                lineHeight: '24px',
                            }} variant='h6' component='h1'>
                                شامپو بدن مناسب پوست چرب بامبو 400 میلی لیتری دیپ سنس
                            </Typography>
                            <Usersrate>
                                <StarOutlineIcon/>
                                <span>4.0</span>
                            </Usersrate>
                        </Topwrapper>
                        <Bottomwrapper>
                            <Brandwrapper>
                                <Link href="#" underline="none">
                                    <span style={{
                                        color: 'rgba(84, 84, 84, 1)',
                                        fontSize: '0.9rem',
                                        marginRight: '8px',
                                    }}>
                                        دیپ سنس</span>
                                </Link>
                            </Brandwrapper>
                            <Pricewrapper>
                                <span style={{
                                    color: 'rgba(54, 54, 54, 1)',
                                    fontSize: '0.75rem',
                                    marginRight: ' 2px',
                                }}>
                                    ریال</span>
                                <span style={{
                                    color: 'rgba(54, 54, 54, 1)',
                                    fontSize: '1.25rem',
                                    fontWeight: '400',
                                    marginRight: ' 8px',
                                }}>۳۵۲٬۰۰۰</span>

                                <span style={{
                                    color: '#fff',
                                    width: '46px',
                                    fontSize: '0.875rem',
                                    textAlign: 'center',
                                    fontWeight: '500',
                                    lineHeight: '26px',
                                    borderRadius: '8px',
                                    backgroundColor: '#4CB04C',
                                }}>20%</span>

                                <span style={{
                                    position: 'absolute',
                                    top: '-19px',
                                    left: '0',
                                    color: 'rgba(175, 175, 175, 1)',
                                    fontSize: '0.75rem',
                                    textDecoration: 'line-through',
                                }}>۴۴۰٬۰۰۰</span>
                            </Pricewrapper>
                        </Bottomwrapper>
                    </Infosection>
                    <div>
                        <Accordion/>
                    </div>
                    <Showcomments sx={{background: '#F8F8F8'}}>
                        <Box sx={{display: 'flex'}}>
                            <span>
                                <Image src={chat}/>
                                <span>1نظر ثبت شده</span>
                            </span>
                        </Box>
                        <Box sx={{display: 'flex'}}>
                            <span>مشاهده نظرات</span>
                        </Box>
                    </Showcomments>
                    <Breadcrumbs/>
                    <CategoryProducts similarProducts={true} category={"محصولات جدید"}/>

                </Box>

                <Addtocart>
                    <ColorButton>
                        <AddIcon ml={20}/>
                        خرید
                    </ColorButton>
                    <Pricewrapper sx={{flexDirection: 'column'}}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            direction: 'rtl'
                        }}>
                            <span style={{
                                color: '#fff',
                                fontSize: '0.75rem',
                                textAlign: 'center',
                                fontWeight: '500',
                                lineHeight: '18px',
                                backgroundColor: '#4CB04C',
                                paddingRight: '0.5rem',
                                paddingLeft: '0.5rem',
                                borderRadius: '0.25rem',
                                marginLeft: '0.5rem',
                            }}>
                                20%
                            </span>
                            <span style={{
                                color: 'rgba(175, 175, 175, 1)',
                                fontSize: '0.75rem',
                                textDecoration: 'line-through',
                            }}>
                                ۴۴۰٬۰۰۰
                            </span>
                        </Box>
                        <Box>
                            <span style={{
                                color: 'rgba(54, 54, 54, 1)',
                                fontSize: '0.75rem',
                            }}>
                                ریال
                            </span>
                            <span style={{
                                color: 'rgba(54, 54, 54, 1)',
                                fontSize: '1.1rem',
                                fontWeight: '400',
                                marginRight: ' 2px',
                            }}>۳۵۲٬۰۰۰</span>
                        </Box>
                    </Pricewrapper>
                </Addtocart>
            </React.Fragment>
        </HeaderFooterProvider>

    )
}