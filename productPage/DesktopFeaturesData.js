import React from 'react';
import {styled} from '@mui/system';

const StyledList = styled('ul')({
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    boxSizing: 'Border-box',
});

const Content = styled('div')({
    display: 'flex',
    padding: '16px 12px',
    // background: 'rgba(248, 248, 248, 1)',
    minHeight: ' 48px',
    alignItems: 'center',
    boxSizing: 'inherit'
})

const CustomSpan = styled('span')({
    ":first-child": {
        color: 'rgba(143, 143, 143, 1)',
        marginLeft: '12px',
    },
    fontSize: ' .875rem',
    fontWeight: '700',
    lineHeight: '16px', boxSizing: 'inherit'
});

export const Data = [
    {
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
    },
];