import React, { Component } from 'react';
import Feature from './feature';
import { Grid } from '@mui/material';

const featuresData = [
    {src: "https://new.okala.com/_next/image?url=%2Fstatic%2Fimages%2FsiteImages%2Fbackgrounds%2FLayer%2001.png&w=128&q=75", text: "ارسال سریع" },
    { src: "https://new.okala.com/_next/image?url=%2Fstatic%2Fimages%2FsiteImages%2Fbackgrounds%2FLayer%2002.png&w=128&q=75", text: "ضمانت بازگشت کالا" },
    { src: "https://new.okala.com/_next/image?url=%2Fstatic%2Fimages%2FsiteImages%2Fbackgrounds%2FLayer%2003.png&w=128&q=75", text: "پرداخت در محل" },
    {src: "https://new.okala.com/_next/image?url=%2Fstatic%2Fimages%2FsiteImages%2Fbackgrounds%2FLayer%2004.png&w=128&q=75",text :"تا 50 درصد تخفیف"},
]
function Features() {
    return (<Grid
        container
        justifyContent="space-around"
        alignItems="center"
    >
        {featuresData.map(item => <Feature imagesrc={item.src} text={item.text} key={item.text}/>) }
    </Grid>)
}

export default Features;
