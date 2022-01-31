import {createTheme} from '@mui/material/styles';
import IranSans100 from "../public/fonts/woff2/IRANSansWeb_UltraLight.woff2";
import IranSans200 from "../public/fonts/woff2/IRANSansWeb_Light.woff2";
import IranSans300 from "../public/fonts/woff2/IRANSansWeb.woff2";
import IranSans400 from "../public/fonts/woff2/IRANSansWeb_Medium.woff2";
import IranSans500 from "../public/fonts/woff2/IRANSansWeb_Bold.woff2";
import IranSans600 from "../public/fonts/woff2/IRANSansWeb_Black.woff2";


// Create a theme instance.
const theme = createTheme({
    direction: 'rtl',
    components: {
        MuiCssBaseline: {
            styleOverrides:
                {
                    body:{
                        fontWeight: 400,
                        fontsize:14,
                    }
                    ,
                    "@font-face": {
                        fontFamily: "iranSans",
                        fontStyle: "normal",
                        fontWeight: 100,
                        src: `url(${IranSans100}) format('woff')`,
                    },
                    fallbacks:[{
                        fontFamily: "iranSans",
                        fontStyle: "normal",
                        fontWeight: 200,
                        src: `url(${IranSans200}) format('woff')`,
                    },{
                        fontFamily: "iranSans",
                        fontStyle: "normal",
                        fontWeight: 300,
                        src: `url(${IranSans300}) format('woff')`,
                    },{
                        fontFamily: "iranSans",
                        fontStyle: "normal",
                        fontWeight: 400,
                        src: `url(${IranSans400}) format('woff')`,
                    },{
                        fontFamily: "iranSans",
                        fontStyle: "normal",
                        fontWeight: 500,
                        src: `url(${IranSans500}) format('woff')`,
                    },{
                        fontFamily: "iranSans",
                        fontStyle: "normal",
                        fontWeight: 600,
                        src: `url(${IranSans600}) format('woff')`,
                    }],

                }
        },
    },
    typography: {
        fontFamily: "iranSans",
    },
     palette: {
        white:{
            main : '#FFFFFF',
        } ,
        black:{
            main : '#000',
        } ,
        red:{
            main:'#f01436',
        },
        aqua:{
            light:'rgba(208,243,245,0.8)',
            main:'#02a0a4',
            dark:'rgba(176, 222, 224, 1)',

        },
        lightGray:{
            light:'#F8F8F8',
            main:'#F0F0F0',
            dark:"#E6E6E6",
        },
        midGray:{
            light:'#8f8f8f',
            main:'#686868',
            dark:'#545454',
        },
        darkGray:{
            main:'rgba(28,27,27,0.82)',
        },

    }});

export default theme;