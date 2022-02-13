import React from 'react';
import { styled } from '@mui/system';


const Content = styled('div')({
    display: 'flex',
    padding:' 8px 16px',
    alignItems: 'center',
})

const CustomSpan = styled('span')({
    fontSize: '.75rem',
    fontWeight: '400',
    lineHeight: '22px',
    ":first-child": {
        flex: '0 0 150px',
        color: 'rgba(143, 143, 143, 1)',
        marginLeft: '12px',
    }
});

const Customli = styled('li')({
    ":nth-child(2n+1)": {background: 'rgba(240, 240, 240, 1)'}
})

export const Data = [
    {
        summary: 'ویژگی های محصول',
        detail: [{
            summary: 'ویژگی های محصول',
            detail:
                <>
                    <Content>
                        <CustomSpan>
                            سایر ویژگی ها :
                        </CustomSpan>
                        <CustomSpan>
                            شوینده غیر صابونی با کف مطلوب.آبکشی آسان

                        </CustomSpan>
                    </Content>
                </>
        },
            {
                summary: 'ویژگی های محصول',
                detail:
                    <>
                        <Content>
                            <CustomSpan>
                                حجم
                            </CustomSpan>
                            <CustomSpan>
                                400 میلی لیتر

                            </CustomSpan>
                        </Content>
                    </>
            },
            {
                summary: 'ویژگی های محصول',
                detail:
                    <>
                        <Content>
                            <CustomSpan>
                                کاربرد
                            </CustomSpan>
                            <CustomSpan>
                                متعادل کننده چربی پوست و از بین برنده آکنه.کمک به درمان جوش بدن

                            </CustomSpan>
                        </Content>
                    </>
            },
            {
                summary: 'ویژگی های محصول',
                detail:
                    <>
                        <Content>
                            <CustomSpan>
                                جنس بسته بندی :

                            </CustomSpan>
                            <CustomSpan>
                                پلاستیک
                            </CustomSpan>
                        </Content>
                    </>
            },
            {
                summary: 'ویژگی های محصول',
                detail:
                    <>
                        <Content>
                            <CustomSpan>
                                ویتامین ها :

                            </CustomSpan>
                            <CustomSpan>
                                ویتامین E

                            </CustomSpan>
                        </Content>
                    </>
            },
            {
                summary: 'ویژگی های محصول',
                detail:
                    <>
                        <Content>
                            <CustomSpan>
                                شماره مجوز/ پروانه بهداشت :
                            </CustomSpan>
                            <CustomSpan>
                                4495/ظ/56
                            </CustomSpan>
                        </Content>
                    </>
            },
            {
                summary: 'ویژگی های محصول',
                detail:
                    <>
                        <Content>
                            <CustomSpan>
                                بسته بندی قابل بازیافت :
                            </CustomSpan>
                            <CustomSpan>
                                بله
                            </CustomSpan>
                        </Content>
                    </>
            },
            {
                summary: 'ویژگی های محصول',
                detail:
                    <>
                        <Content>
                            <CustomSpan>
                                مناسب برای نوع پوست :

                            </CustomSpan>
                            <CustomSpan>
                                مناسب پوست های چرب
                            </CustomSpan>
                        </Content>
                    </>
            },
            {
                summary: 'ویژگی های محصول',
                detail:
                    <>
                        <Content>
                            <CustomSpan>
                                شرایط نگهداری :

                            </CustomSpan>
                            <CustomSpan>
                                در دمای معمولی نگه داری شود.

                            </CustomSpan>
                        </Content>
                    </>
            },
            {
                summary: 'ویژگی های محصول',
                detail:
                    <>
                        <Content>
                            <CustomSpan>
                                مواد تشکیل دهنده (ترکیبات) :

                            </CustomSpan>
                            <CustomSpan>
                                آب، سدیم هیالورونات، عصاره درخت چای، سالیسیلیک اسید، آلانتوئین، عصاره بامبو، روغن آملا،
                                بیزابولول، سورفاکتانت های غیر آنیونی و آمفوتریک، گلیسرین، پروپیلن گلیکول، کوکو گلوکوزید،
                                دکسپانتنول، فنوکسی اتانول، سدیم کلراید، کاپریلیل گلیکول، عصاره آلوئه ورا، اسانس، ا.د.ت.آ،
                                ویتامین E، سیتریک اسید.

                            </CustomSpan>
                        </Content>
                    </>
            },
            {
                summary: 'ویژگی های محصول',
                detail:
                    <>
                        <Content>
                            <CustomSpan>
                                وزن محصول :

                            </CustomSpan>
                            <CustomSpan>
                                400 گرم

                            </CustomSpan>
                        </Content>
                    </>
            },
            {
                summary: 'ویژگی های محصول',
                detail:
                    <>
                        <Content>
                            <CustomSpan>
                                مناسب
                            </CustomSpan>
                            <CustomSpan>
                                مناسب برای بانوان و آقایان

                            </CustomSpan>
                        </Content>
                    </>
            },
            {
                summary: 'ویژگی های محصول',
                detail:
                    <>
                        <Content>
                            <CustomSpan>
                                عصاره :

                            </CustomSpan>
                            <CustomSpan>
                                درخت چای، بامبو، آلوئه ورا

                            </CustomSpan>
                        </Content>
                    </>
            }]
    },
    {
        summary: 'توضیحات محصول',
        detail: 'شامپو بدن مناسب پوست چرب بامبو 400 میلی لیتری دیپ سنس.'
    }

];
export const productInfo = [
    {
        title: "ویژگی محصول", items: [{feature: "سایر ویژگی ها", desc: "شوینده غیر صابونی با کف مطلوب، آبکشی آسان"},
            {feature: "حجم", desc: "400 میلی لیتر"},
            {feature: "کاربرد", desc: "متعادل کننده چربی پوست و از بین برنده آکنه، کمک به درمان جوش بدن"},
            {feature: "جنس بسته بندی", desc: "پلاستیک"},
            {feature: "ویتامین ها", desc: "ویتامین E"},
            {feature: "شماره مجوز/ پروانه بهداشت", desc: "56/ظ/4495"},
            {feature: "بسته بندی قابل بازیافت", desc: "بله"},
            {feature: "مناسب برای نوع پوست", desc: "مناسب پوست های چرب"},
            {feature: "شرایط نگهداری", desc: "در دمای معمولی نگهداری شود."},
            {
                feature: "مواد تشکیل دهنده ( ترکیبات)", desc: "آب، سدیم هیالورونات،" +
                    " عصاره درخت چای، سالیسیلیک اسید، آلانتوئین، عصاره بامبو، روغن آملا، بیزابولول،" +
                    " سورفاکتانت های غیر آنیونی و آمفوتریک، گلیسرین، پروپیلن گلیکول، " +
                    "کوکو گلوکوزید، دکسپانتنول، فنوکسی اتانول، سدیم کلراید، کاپریلیل گلیکول، " +
                    "عصاره آلوئه ورا، اسانس، ا.د.ت.آ، ویتامین E، سیتریک اسید."
            },
            {feature: "وزن محصول", desc: "400 گرم"},
            {feature: "مناسب برای ", desc: "مناسب برای بانوان و آقایان"},
            {feature: "عصاره", desc: "درهت چای، بامبو، آلوئه ورا"}
        ]
    },{title: "توضیحات محصول",items: ["شامپو بدن مناسب پوست چرب بامبو 400 میلی لیتری دیپ سنس"]}]