import {createTheme} from "@mui/material";
import * as url from "url";
import IRANSansNormal from '../public/fonts/woff2/IRANSansWeb.woff2'


const theme = createTheme({
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
            main:'#02a0a4',
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


        components: {
            MuiCssBaseline: {
                styleOverrides:{
                    body:{
                        fontFamily: 'IRANSans',
                    },
                    "@font-face":{
                        fontFamily: 'IRANSans',
                        fontWeight:300,
                        fontStyle:'normal',
                        src:`url(${IRANSansNormal}) format(woff2)`
                    },
                    // fallback:[
                    //
                    // ]
                }
            },},
        typography: {
            fontFamily: 'IRANSans',
        },
        direction: 'rtl',
    }
       });

export default theme;