import React from 'react';
import { styled } from '@mui/system';

const Styledlist = styled('ul')({
    paddingRight: '0',
    listStyle: 'none',
});

const Content = styled('div')({
    display: 'flex',
    padding:' 8px 16px',
    background: 'rgba(248, 248, 248, 1)',
    alignItems: 'center',
})

const Customspan = styled('span')({
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
        detail: <Styledlist>
            <Customli>
                <Content>
                    <Customspan>
                        سایر ویژگی ها :
                    </Customspan>
                    <Customspan>
                        شوینده غیر صابونی با کف مطلوب.آبکشی آسان

                    </Customspan>
                </Content>
            </Customli>
            <Customli>
                <Content>
                    <Customspan>
                        حجم
                    </Customspan>
                    <Customspan>
                        400 میلی لیتر

                    </Customspan>
                </Content>
            </Customli><Customli>
            <Content>
                <Customspan>
                    کاربرد
                </Customspan>
                <Customspan>
                    متعادل کننده چربی پوست و از بین برنده آکنه.کمک به درمان جوش بدن

                </Customspan>
            </Content>
        </Customli><Customli>
            <Content>
                <Customspan>
                    جنس بسته بندی :

                </Customspan>
                <Customspan>
                    پلاستیک
                </Customspan>
            </Content>
        </Customli><Customli>
            <Content>
                <Customspan>
                    ویتامین ها :

                </Customspan>
                <Customspan>
                    ویتامین E

                </Customspan>
            </Content>
        </Customli><Customli>
            <Content>
                <Customspan>
                    شماره مجوز/ پروانه بهداشت :

                </Customspan>
                <Customspan>
                    4495/ظ/56

                </Customspan>
            </Content>
        </Customli><Customli>
            <Content>
                <Customspan>
                    بسته بندی قابل بازیافت :
                </Customspan>
                <Customspan>
                    بله
                </Customspan>
            </Content>
        </Customli>
            <Customli>
                <Content>
                    <Customspan>
                        مناسب برای نوع پوست :

                    </Customspan>
                    <Customspan>
                        مناسب پوست های چرب
                    </Customspan>
                </Content>
            </Customli>
            <Customli>
                <Content>
                    <Customspan>
                        شرایط نگهداری :

                    </Customspan>
                    <Customspan>
                        در دمای معمولی نگه داری شود.

                    </Customspan>
                </Content>
            </Customli>
            <Customli>
                <Content>
                    <Customspan>
                        مواد تشکیل دهنده (ترکیبات) :

                    </Customspan>
                    <Customspan>
                        آب، سدیم هیالورونات، عصاره درخت چای، سالیسیلیک اسید، آلانتوئین، عصاره بامبو، روغن آملا،
                        بیزابولول، سورفاکتانت های غیر آنیونی و آمفوتریک، گلیسرین، پروپیلن گلیکول، کوکو گلوکوزید،
                        دکسپانتنول، فنوکسی اتانول، سدیم کلراید، کاپریلیل گلیکول، عصاره آلوئه ورا، اسانس، ا.د.ت.آ،
                        ویتامین E، سیتریک اسید.

                    </Customspan>
                </Content>
            </Customli>
            <Customli>
                <Content>
                    <Customspan>
                        وزن محصول :

                    </Customspan>
                    <Customspan>
                        400 گرم

                    </Customspan>
                </Content>
            </Customli>
            <Customli>
                <Content>
                    <Customspan>
                        مناسب
                    </Customspan>
                    <Customspan>
                        مناسب برای بانوان و آقایان

                    </Customspan>
                </Content>
            </Customli>
            <Customli>
                <Content>
                    <Customspan>
                        عصاره :

                    </Customspan>
                    <Customspan>
                        درخت چای، بامبو، آلوئه ورا

                    </Customspan>
                </Content>
            </Customli>
            <Customli>
                <Content>
                    <Customspan>

                    </Customspan>
                    <Customspan>

                    </Customspan>
                </Content>
            </Customli>

        </Styledlist>

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