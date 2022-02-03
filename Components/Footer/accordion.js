import React, { Component } from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:' #F0F0F0',
    justifyContent:'center',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        backgroundColor:' #F0F0F0',
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
}));

export default function CustomizedAccordions() {

    return (
        <div>
            <Accordion sx={{margin:'auto', background:'transparent',
                maxWidth:'1280px'}}>
                <AccordionSummary>
                    <Typography align={'center'}>فروشگاه اُکالا، بزرگترین سوپرمارکت آنلاین ایران</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{backgroundColor:' #F0F0F0',
                }}>
                    <Typography variant='h5'>فروشگاه اُکالا، بزرگترین سوپرمارکت آنلاین ایران</Typography>
                    <Typography>
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