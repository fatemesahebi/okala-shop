import React from 'react';
import { styled } from '@mui/system';

const styledlist = styled('ul')({
    paddingRight: '0',
});

const Content = styled('div')({
    display: 'flex',
    padding:' 8px 16px',
    background: 'rgba(248, 248, 248, 1)',
    alignItems: 'center',
})


export const Data = [
    {
        summary: 'ویژگی های محصول',
        detail: <styledlist className='attributesContainer' style={{listStyle:'none'}}>
            <li>
                <Content>
          <span>
            سایر ویژگی ها :
          </span>
                    <span>
            شوینده غیر صابونی با کف مطلوب.آبکشی آسان

         </span>
                </Content>
            </li>
            <li>
                <Content>
          <span>
            حجم
          </span>
                    <span>
            400 میلی لیتر

         </span>
                </Content>
            </li><li>
            <Content>
          <span>
            کاربرد
           </span>
                <span>
            متعادل کننده چربی پوست و از بین برنده آکنه.کمک به درمان جوش بدن

         </span>
            </Content>
        </li><li>
            <Content>
          <span>
            جنس بسته بندی :

           </span>
                <span>
            پلاستیک
         </span>
            </Content>
        </li><li>
            <Content>
          <span>
            ویتامین ها :

           </span>
                <span>
            ویتامین E

         </span>
            </Content>
        </li><li>
            <Content>
          <span>
            شماره مجوز/ پروانه بهداشت :

           </span>
                <span>
            4495/ظ/56

         </span>
            </Content>
        </li><li>
            <Content>
          <span>
            بسته بندی قابل بازیافت :
           </span>
                <span>
            بله
         </span>
            </Content>
        </li>
            <li>
                <Content>
          <span>
            مناسب برای نوع پوست :

           </span>
                    <span>
            مناسب پوست های چرب
         </span>
                </Content>
            </li>
            <li>
                <Content>
          <span>
            شرایط نگهداری :

           </span>
                    <span>
            در دمای معمولی نگه داری شود.

         </span>
                </Content>
            </li>
            <li>
                <Content>
          <span>
            مواد تشکیل دهنده (ترکیبات) :

           </span>
                    <span>
            آب، سدیم هیالورونات، عصاره درخت چای، سالیسیلیک اسید، آلانتوئین، عصاره بامبو، روغن آملا، بیزابولول، سورفاکتانت های غیر آنیونی و آمفوتریک، گلیسرین، پروپیلن گلیکول، کوکو گلوکوزید، دکسپانتنول، فنوکسی اتانول، سدیم کلراید، کاپریلیل گلیکول، عصاره آلوئه ورا، اسانس، ا.د.ت.آ، ویتامین E، سیتریک اسید.

         </span>
                </Content>
            </li>
            <li>
                <Content>
          <span>
            وزن محصول :

           </span>
                    <span>
            400 گرم

         </span>
                </Content>
            </li>
            <li>
                <Content>
          <span>
            مناسب
           </span>
                    <span>
            مناسب برای بانوان و آقایان

         </span>
                </Content>
            </li>
            <li>
                <Content>
          <span>
            عصاره :

           </span>
                    <span>
            درخت چای، بامبو، آلوئه ورا

         </span>
                </Content>
            </li>
            <li>
                <Content>
          <span>

           </span>
                    <span>

         </span>
                </Content>
            </li>

        </styledlist>

    },
    {
        summary: 'توضیحات محصول',
        detail: 'شامپو بدن مناسب پوست چرب بامبو 400 میلی لیتری دیپ سنس.'
    }

];