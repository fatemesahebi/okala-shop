import Link from "@mui/material/Link";
import React from "react";
import {Box, Button, Container, Stack, Typography} from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import {styled} from "@mui/styles";
import Image from "next/image";
import grouping from "./../../public/SVG/grouping.svg"
import * as PropTypes from "prop-types";
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
function handleClick(event) {
    event.preventDefault()
}

const breadcrumbs = [
    <Link underline={"none"} key="1" color="inherit" href="/" onClick={handleClick}>
        اکالا
    </Link>,
    <Link
        underline={"none"}
        key="2"
        color="inherit"
        href="/getting-started/installation/"
        onClick={handleClick}
    >
        میوه و سبزیجات
    </Link>

];

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
export default function CategoryBreadcrumbs(){
    return(
        <Box display={{md: "block" , xs: "block"}}>
            <Stack sx={{flexDirection:"row"}}>
                <Container maxWidth={'false'} sx={{background: 'white'}}>
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
                <Stack sx={{flexDirection:"row",padding:'1rem 0 0 0!important',marginLeft:"2%"}}>
                    <Typography sx={{fontFamily:"iranSans",fontSize:".8rem",marginLeft:"1rem"}}>290کالا</Typography>
                    <Image width={30} height={30} src={grouping}/>
                </Stack>
            </Stack>
        </Box>
    )
}
