import React, { Component } from 'react';
import Row from './index';
import { Grid,Box,Typography,Link,Button,Stack } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
function Application() {
    return (
        <Row >
            <Grid
                container
                direction="row"
                sx={{
                    backgroundColor: 'rgb(230,230,230)',
                    borderRadius: '10px',
                    paddingTop: '.75rem',
                    paddingBottom: '.75rem',
                    paddingRight: '4rem',
                    paddingLeft: '4rem',
                    marginBottum:'6rem'}}>
                <Grid
                    container md={12}
                    justifyContent="space-between"
                    direction="row" >
                    <Grid item md={7} >
                        <Grid container
                              direction="column">
                            <Grid item>
                                <Typography variant="h5" gutterBottom component="div" sx={{fontSize:'1.25rem'}}>دانلود اپلیکیشن اُکالا
                                </Typography>
                                <Typography variant='body1' sx={{fontSize:'.875rem'}}>
                                    خرید آسان و راحت با تخفیف های جذاب لحظه ای، دانلود برای سیستم عامل های اندروید و آیفون (iOS)
                                    <Button
                                        sx={{ color: 'rgba(2, 160, 164, 1)', marginRight: '.5rem' }}
                                        href="#text-buttons"
                                        endIcon={<KeyboardArrowLeftIcon/>}
                                    >آموزش نصب
                                    </Button>
                                </Typography>
                                <Grid>
                                    <Box
                                        mt={3}
                                        sx={{
                                            flexWrap:'wrap',
                                            display:'flex',
                                            direction:"row",
                                            justifyContent:"center",
                                            alignItems:"center",
                                        }}>
                                        <img src="https://new.okala.com/_next/image?url=%2Fstatic%2Fimages%2FsiteImages%2FGooglePlay.png&w=256&q=75" alt=""/>
                                        <img src="https://new.okala.com/_next/image?url=%2Fstatic%2Fimages%2FsiteImages%2FCoffeBazar.png&w=256&q=75" alt=""/>
                                        <img src="https://new.okala.com/_next/image?url=%2Fstatic%2Fimages%2FsiteImages%2FMyket.png&w=256&q=75" alt=""/>
                                        <img src="https://new.okala.com/_next/image?url=%2Fstatic%2Fimages%2FsiteImages%2FDirectDownload.png&w=256&q=75" alt=""/>
                                        <img src="https://new.okala.com/_next/image?url=%2Fstatic%2Fimages%2FsiteImages%2FAppStore.png&w=256&q=75" alt=""/>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={2} sx={{display: {xs:'none', md:'block'}}} >
                        <Box >
                            <img
                                style={{
                                    width: '200px',
                                    height: '208px'
                                }}
                                src="https://new.okala.com/_next/image?url=%2Fstatic%2Fimages%2FsiteImages%2FmobileMockup.png&w=640&q=75" />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Row>
    )
}
export default Application;