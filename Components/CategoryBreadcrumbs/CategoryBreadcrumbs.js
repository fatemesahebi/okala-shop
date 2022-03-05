import Link from "@mui/material/Link";
import React, {useState,useEffect} from "react";
import {Box, Button, Container, Stack, Typography} from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import {styled} from "@mui/styles";
import Image from "next/image";
import grouping from "./../../public/SVG/grouping.svg"
import * as PropTypes from "prop-types";
import {menuData} from "../../lib/mirage/menuData";
import PN from "persian-number";
const MainContainer = styled('div')({
    maxWidth: '1280px!important',
    margin: 'auto',
    padding: '1rem 1.2rem 0 0!important',
    // position: 'relative',
    // overflowX: 'hidden',
    // overflowY: 'auto',

})
// const MyContainer = styled('div')({
//     // padding: '36px',
//     // position: 'relative',
//     background: ' #fff',
//     borderRadius: '12px',
//     margin: 'auto',
//     marginBottom: '2rem'
// });


//
// const ColorButton = styled(Button)(({theme}) => ({
//     position: "absolute",
//     bottom: 0,
//     width: '14rem !important',
//     // height: '3rem !important',
//     minWidth: '104px !important',
//     backgroundColor: 'rgb(240, 20, 54)',
//     borderRadius: ' 12px',
//     color: ' rgb(248, 248, 248) !important',
//     "&.MuiButtonBase-root:hover": {
//         color: 'rgb(230, 230, 230)',
//         backgroundColor: 'rgb(222, 8, 46) !important'
//     }
// }));
//
// ColorButton.propTypes = {children: PropTypes.node};
export default function CategoryBreadcrumbs({categoryName,dataCategory}){
const [breadState,setBreadState]=useState(["",dataCategory?.length||76])
    useEffect(()=>{
     setBreadState([categoryName,dataCategory?.length])
 },[categoryName])
    // console.log({breadState})
    // console.log(dataCategory?.length,"*8")
    function handleClick(event) {
        event.preventDefault(dataCategory?.length)
    }

    const breadcrumbs = [
        <Link underline={"none"} key="1" color="inherit" href="/" onClick={handleClick}>
            اکالا
        </Link>,
        <Link
            underline={"none"}
            key="2"
            color="inherit"
            href="/category/fruitsVegetables"
            onClick={handleClick}>
            {breadState[0]}

        </Link>

    ];

    return(
        <Box display={{md: "block" , xs: "block"}}>
            <Stack sx={{flexDirection:"row"}}>
                <Container maxWidth={'false'} >
                    <MainContainer>
                        <Stack sx={{direction: "rtl"}} spacing={2}>
                            <Breadcrumbs
                                sx={{
                                    fontSize: "small",
                                    fontWeight: "bold"
                                }}
                                separator={<NavigateBeforeIcon fontSize="small"/>}
                                aria-label="breadcrumb"
                            >
                                {breadcrumbs}
                            </Breadcrumbs>
                        </Stack>
                    </MainContainer>
                </Container>
                <Stack sx={{flexDirection:"row",padding:'.5rem 0 0 0!important',marginLeft:"2%"}}>
                    <Typography sx={{fontFamily:"iranSans",fontSize:".8rem",marginLeft:"1rem"}}>{PN.convertEnToPe(`${breadState[1]}`)}کالا</Typography>
                    <Box display={{md: "none" , xs: "block", xl:"none",lg:"none",sm:"block"}}>
                    <Image width={30} height={30} src={grouping}/>
                    </Box>
                </Stack>
            </Stack>
        </Box>
    )
}
