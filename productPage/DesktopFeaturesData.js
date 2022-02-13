import React from 'react';
import { styled } from '@mui/system';

const StyledList = styled('ul')({
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    boxSizing:'Border-box',
});

const Content = styled('div')({
    display: 'flex',
    padding: '16px 12px',
    background: 'rgba(248, 248, 248, 1)',
    minHeight:' 48px',
    alignItems: 'center',
    boxSizing:'inherit'
})

const CustomSpan = styled('span')({
    ":first-child": {
        color: 'rgba(143, 143, 143, 1)',
        marginLeft: '12px',
    },
    fontSize: ' .875rem',
    fontWeight: '400',
    lineHeight: '16px',  boxSizing:'inherit'
});

const Customli = styled('li')({
    flexGrow: '0',
    flexShrink: '0',
    flexBasis:'33.3333%',
    padding: '0 2px',
    maxWidth: '33.3333%',
    marginBottom: '4px',
    boxSizing:'inherit'

})

export const Data = [
    {
        summary: 'ویژگی های محصول',
        detail:
            <StyledList >
                <Customli>
                    <Content>
                        <CustomSpan>
                            سایر ویژگی ها :
                        </CustomSpan>
                        <CustomSpan>
                            شوینده غیر صابونی با کف مطلوب.آبکشی آسان

                        </CustomSpan>
                    </Content>
                </Customli>
                <Customli>
                    <Content>
                        <CustomSpan>
                            حجم
                        </CustomSpan>
                        <CustomSpan>
                            400 میلی لیتر

                        </CustomSpan>
                    </Content>
                </Customli><Customli>
                <Content>
                    <CustomSpan>
                        کاربرد
                    </CustomSpan>
                    <CustomSpan>
                        متعادل کننده چربی پوست و از بین برنده آکنه.کمک به درمان جوش بدن

                    </CustomSpan>
                </Content>
            </Customli><Customli>
                <Content>
                    <CustomSpan>
                        جنس بسته بندی :

                    </CustomSpan>
                    <CustomSpan>
                        پلاستیک
                    </CustomSpan>
                </Content>
            </Customli><Customli>
                <Content>
                    <CustomSpan>
                        ویتامین ها :

                    </CustomSpan>
                    <CustomSpan>
                        ویتامین E

                    </CustomSpan>
                </Content>
            </Customli><Customli>
                <Content>
                    <CustomSpan>
                        شماره مجوز/ پروانه بهداشت :
                    </CustomSpan>
                    <CustomSpan>
                        4495/ظ/56
                    </CustomSpan>
                </Content>
            </Customli><Customli>
                <Content>
                    <CustomSpan>
                        بسته بندی قابل بازیافت :
                    </CustomSpan>
                    <CustomSpan>
                        بله
                    </CustomSpan>
                </Content>
            </Customli>
                <Customli>
                    <Content>
                        <CustomSpan>
                            مناسب برای نوع پوست :

                        </CustomSpan>
                        <CustomSpan>
                            مناسب پوست های چرب
                        </CustomSpan>
                    </Content>
                </Customli>
                <Customli>
                    <Content>
                        <CustomSpan>
                            شرایط نگهداری :

                        </CustomSpan>
                        <CustomSpan>
                            در دمای معمولی نگه داری شود.

                        </CustomSpan>
                    </Content>
                </Customli>
                <Customli>
                    <Content>
                        <CustomSpan>
                            مواد تشکیل دهنده (ترکیبات) :

                        </CustomSpan>
                        <CustomSpan>
                            آب، سدیم هیالورونات، عصاره درخت چای، سالیسیلیک اسید، آلانتوئین، عصاره بامبو، روغن آملا، بیزابولول، سورفاکتانت های غیر آنیونی و آمفوتریک، گلیسرین، پروپیلن گلیکول، کوکو گلوکوزید، دکسپانتنول، فنوکسی اتانول، سدیم کلراید، کاپریلیل گلیکول، عصاره آلوئه ورا، اسانس، ا.د.ت.آ، ویتامین E، سیتریک اسید.

                        </CustomSpan>
                    </Content>
                </Customli>
                <Customli>
                    <Content>
                        <CustomSpan>
                            وزن محصول :

                        </CustomSpan>
                        <CustomSpan>
                            400 گرم

                        </CustomSpan>
                    </Content>
                </Customli>
                <Customli>
                    <Content>
                        <CustomSpan>
                            مناسب
                        </CustomSpan>
                        <CustomSpan>
                            مناسب برای بانوان و آقایان

                        </CustomSpan>
                    </Content>
                </Customli>
                <Customli>
                    <Content>
                        <CustomSpan>
                            عصاره :

                        </CustomSpan>
                        <CustomSpan>
                            درخت چای، بامبو، آلوئه ورا

                        </CustomSpan>
                    </Content>
                </Customli>

            </StyledList>
    }
];