import React, { Component } from 'react';
import { Grid,Box,Link,Typography} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Row from './index';
import { LicenseList } from './licenses';

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

export function BottomRow() {
    return (
        <Row>
            <Grid
                sx={{marginTop:'1rem'}}
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
                                        تلفن پشتیبانی: 1536
                                        <br/>
                                        آدرس: خیابان احمد قصیر (بخارست)،
                                        خیابان پانزدهم
                                        غربی (احمدیان)، پلاک 11، طبقه 3
                                        <br/>
                                        ایمیل: info@okala.com
                                    </Typography>
                                </ListItem>
                        </List>

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
            <Grid xs={12}>
                <hr className='line' style={{color:'rgba(230, 230, 230, 1)'}}/>
                <Typography
                    variant='body1'
                    component="div"
                    sx={{
                        marginTop: '1rem',
                        textAlign: 'center',
                    }}>
                    © کلیه حقوق مادی و معنوی این سایت محفوظ و متعلق به شرکت توسعه تجارت الکترونیک کوروش است.
                    تیر 1400
                </Typography>
            </Grid>
        </Row>
    )
}