import React, { Component } from 'react';
import {Paper, Grid, Stack, Box, Link, Typography, Button} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Row from './index';
import { LicenseList } from './licenses';
import Divider from "@mui/material/Divider";
import { styled } from '@mui/material/styles';
import Image from "next/image";
import Instagram from "../../public/SVG/Instagram.svg"
import Twitter from "../../public/SVG/Twitter.svg"
import Telegram from "../../public/SVG/Telegram.svg"
import Aparat from "../../public/SVG/Aparat.svg"

const okalaItems = [
    {text: "بلاگ",},
    {text: "درباره اکالا",},
    {text: "معرفی اپلیکیشن",},
    {text: "تماس با اُکالا",},
    {text: "اُکالارنک",},
]
const costumerServiceItems = [
    {text: "حمل و نقل",},
    {text: " سوالات متداول",},
    {text: "شرایط مرجوعی کالا ",},
    {text: " حریم خصوصی ",},
]
const SocialLink = styled(Link)(({theme}) => ({
    marginLeft:' 1.758rem',
    marginRight: '1.758rem',
    position: 'relative',
    color: 'inherit',
    textDecoration: 'inherit',
    cursor:'pointer'
}));

const GodDamnSocialButtons = styled('div')({
    paddingTop: '1.5rem',
    paddingBottom: '1rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    backgroundColor: '#f8f8f8',
    borderRadius: '0.75rem',
    flexDirection: 'row',
    height: '3.5rem',
    display: 'flex',
    marginBottom: '2.5rem,',
    alignItems: 'center',
    width: 'fit-content',
});

export function BottomRow() {
    return (
        <Row>
            <Grid
                pb={"5rem"}
                sx={{marginTop:'1rem' , borderBottom: "1px solid rgba(0,0,0,0.05)"}}
                container
                spacing={3}
                direction="row"
            >
                <Grid item xs={12} md={4}>
                    <Box >
                        <Typography
                            fontWeight={"bold"}
                            variant="h6"
                            gutterBottom
                            component="div">
                            راه های ارتباطی
                        </Typography>
                        <List sx={{
                            fontWeight: "normal"
                        }}>
                                <ListItem sx={{paddingRight: "0"}}>
                                    <Typography
                                        textAlign={"right"}
                                        variant="body1"
                                        gutterBottom>
                                        تلفن پشتیبانی: ۱۵۳۶
                                        <br/>
                                        آدرس: خیابان احمد قصیر (بخارست)،
                                        خیابان پانزدهم
                                        غربی (احمدیان)، پلاک ۱۱، طبقه ۳
                                        <br/>
                                        ایمیل: info@okala.com
                                    </Typography>
                                </ListItem>
                        </List>
                        <GodDamnSocialButtons>
                            <SocialLink><Box ><Image src={Instagram}/></Box></SocialLink>
                            <Divider orientation="vertical" variant="middle" flexItem />
                            <SocialLink><Box ><Image src={Telegram}/></Box></SocialLink>
                            <Divider orientation="vertical" variant="middle" flexItem />
                            <SocialLink><Box ><Image src={Twitter}/></Box></SocialLink>
                            <Divider orientation="vertical" variant="middle" flexItem />
                            <SocialLink><Box ><Image src={Aparat}/></Box></SocialLink>
                        </GodDamnSocialButtons>
                    </Box>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Box >
                        <Typography fontWeight={"bold"} variant="h6"  component="div">
                            اکالا
                        </Typography>
                        <List sx={{
                            fontWeight: "normal"
                        }}>
                            {okalaItems.map(item => (
                                <ListItem sx={{paddingRight: "0"}} key={item.text}>
                                    <Link href="#" underline="none" color="inherit" >{item.text}
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Box >
                        <Typography fontWeight={"bold"} variant="h6" gutterBottom component="div">
                            خدمات مشتریان
                        </Typography>
                        <List sx={{
                            fontWeight: "normal"
                        }}>
                            {costumerServiceItems.map(item => (
                                <ListItem sx={{paddingRight: "0"}} key={item.text}>
                                    <Link href="#" underline="none" color="inherit" >{item.text}</Link>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <LicenseList/>
                </Grid>
            </Grid>
            <Grid pb={"5rem"} xs={12}>
                <Typography
                    variant='body1'
                    component="div"
                    sx={{
                        marginTop: '1rem',
                        textAlign: 'center',
                        fontSize: "0.8rem"
                    }}>
                    © کلیه حقوق مادی و معنوی این سایت محفوظ و متعلق به شرکت توسعه تجارت الکترونیک کوروش است.
                    تیر ۱۴۰۰
                </Typography>
            </Grid>
        </Row>
    )
}