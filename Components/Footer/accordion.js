import React, {Component, useState} from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {Accordion, AccordionSummary, AccordionDetails} from "@mui/material";

export default function CustomizedAccordions() {
    const [expanded , setExpanded] = useState(false)

    const handleExpansion = (e) => {
        setExpanded(!expanded)
    }
    return (
        <div style={{borderBottom: "2px solid white"}}>
            <Accordion dir={"rtl"} expanded={expanded} onChange={handleExpansion} sx={{background:'#f0f0f0 !important', boxShadow: "none !important",
                maxWidth:'81rem',margin:'auto !important' ,}}>
                <AccordionSummary sx={{
                    height: "4rem !important",
                    width: {md:expanded? "6.5rem" : "23rem", xs:"100%"},
                    margin: "auto",
                }} expandIcon={<ExpandMoreIcon />}>
                    <Typography fontSize={{md:"1rem", xs:"0.9rem"}} align={'center'}>{expanded ? "بستن":"فروشگاه اُکالا، بزرگترین سوپرمارکت آنلاین ایران"}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{padding: "1rem 0" , fontWeight: "bold", fontSize: "1.2rem"}}>فروشگاه اُکالا، بزرگترین سوپرمارکت آنلاین ایران</Typography>
                    <Typography sx={{textAlign: "justify", lineHeight: "1.5rem", fontSize:"0.85rem",fontWeight: "bold"}}>
                        شرکت اکالا (توسعه تجارت الکترونک کوروش) یکی از زیرمجموعه‌های هولدینگ بزرگ گروه صنعتی گلرنگ است که به عنوان بزرگ‌ترین سوپرمارکت اینترنتی در ایران فعالیت می‌کند .کالاهایی که از طریق اکالا به فروش می‌رسند در دسته‌بندی‌های متنوع مواد غذایی، نوشیدنی‌ها، خواروبار، محصولات آرایشی و بهداشتی، میوه و سبزیجات، ابزار و ملزومات، لوازم تحریر و لوازم اداری، محصولات مادر و کودک و پوشاک طبقه‌بندی می‌شوند که با تخفیف‌های شگفت‌انگیز و حتی تا 50% تخفیف به فروش می‌رسند.
                        <br/>
                        این کالاها از فروشگاه های متنوعی به فروش می‌رسند. این مجموعه‌ها عبارت اند از:
                        <br/>
                        • فروشگاه‌های زنجیره‌ای افق کوروش
                        <br/>
                        • اکالا (با تنوع بیش از 5000 کالا)
                        <br/>
                        • (اکالا بیزینس (فروش عمده محصولات
                        <br/>
                        • هایپرفامیلی
                        <br/>
                        از بین این مجموعه‌ها، اکالا و اکالا بیزینس در تهران و کرج و هایپرفامیلی در تهران و برخی کلان‌شهرها خدمات‌رسانی می‌کنند. اما فروشگاه‌های زنجیره‌ای افق کوروش در بیش از 220 شهر ایران از طریق اپلیکیشن و وبسایت اکالا به مشتریان خدمت رسانی میکند.
                        <br/>
                        کاربران می‌توانند در 7 روز هفته و در 24 ساعت شبانه روز، خرید و سفارش‌های خود را ثبت کنند.
                        مشتریان می‌توانند پیگیری سفارش‌ها و خریدهای خود و هرگونه انتقاد و پیشنهاد از طریق تیم پشتیبانی و شماره تماس 1536 انجام دهند.

                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}