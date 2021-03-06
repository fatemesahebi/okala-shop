import * as React from 'react';
import home from "./../../public/SVG/home.svg"
import search from "./../../public/SVG/search.svg"
import cart from "./../../public/SVG/buy.svg";
import profile from "./../../public/SVG/profile.svg"
import grouping from "./../../public/SVG/grouping.svg"
import bottomCurve from "./../../public/SVG/bottomNavCurvedLine.svg"
import {Box, Stack, Typography} from "@mui/material";
import {Button} from "@mui/material";
import Image from "next/image"
import {styled} from "@mui/system";
import ShoppingCard from '../shoppingCard/shoppingCard'
import {useState} from "react";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";
import PN from "persian-number";


const IconHeader = styled('div')(
    () => `
                    height: 56px;
                    min-width: 56px;
                    display: inline-flex;
                    vertical-align: center;
                    align-items: center;
                    justify-content:center;
                    border-radius:10px;
   `,
);
const DropDownTypo = styled(Typography)(
    () => `
            font-size:0.85rem;
            font-weight:600;
            padding-right:6px ;
            line-height:40px;
            
   `,
);


export default function MenuMobile() {
    const [open , setOpen] = useState(false)
    const router=useRouter()
    const handleOpenShoppingCard = () => {
        setOpen(true)
    }
    const totalOrder = useSelector(state => state.cart.items.length)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{display: {lg: 'none', md: 'none', xs: 'flex'}, flexDirection: "column", alignItems: "center"}}>
            <Box item xs={1} sx={{
                display: {lg: 'none', md: 'none'},
                zIndex: 101,
                justifyContent: "space-between",
                flexShrink: "1",
                width: "100vw",
                position: "fixed",
                bottom: "-0.1rem",
            }}>
                <Stack sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", flexShrink: "1"}}>
                    <Box sx={{
                        height: '50px',
                        backgroundColor: "white !important",
                        width: {sm: "40%", xs: "33%"},
                        display: "inline-flex",
                        justifyContent: "space-around",
                        zIndex: 101
                    }}>
                        <Button
                            sx={{width: "50%", color: "#f01436", borderRadius: 0 , borderBottom: "4px solid #f01436"}}>
                            <Stack onClick={()=>{router.push('/')}}>
                                <Image fill={"#f01436"} src={home}/>
                                <Typography style={{fontWeight: "bold", fontSize: ".625rem"}}>????????</Typography>
                            </Stack>
                        </Button>
                        <Button sx={{width: "50%"}}>
                            <Stack>
                                <Image src={search}/>
                                <Typography style={{color: "#888a89", fontSize: ".625rem"}}>??????????</Typography>
                            </Stack>
                        </Button>
                    </Box>
                    <Box sx={{
                        position: "fixed",
                        bottom: "0.3rem",
                        width: "100vw",
                        display: "inline-flex",
                        justifyContent: "center"
                    }}>
                        <Button onClick={() => setOpen(true)} sx={{
                            minWidth: "0",
                            width: "55px",
                            height: "55px",
                            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                            borderRadius: "50%",
                            backgroundColor: "white !important"
                        }}>
                            <IconHeader  onClick={handleOpenShoppingCard}>
                                {
                                    (totalOrder != 0) && <Typography sx={{
                                        backgroundColor: '#02b2c9',
                                        color: 'white.main',
                                        fontWeight: 700,
                                        borderRadius: '100%',
                                        width: 20,
                                        height: 20,
                                        textAlign: "center",
                                        mb:6,

                                        zIndex: '10',
                                        fontSize: '0.8rem',

                                    }}>{PN.convertEnToPe(totalOrder)}</Typography>
                                }
                                <Box sx={{margin:".8rem 0 .5rem .8rem",padding:"0 0 0 .5rem"}}>
                                    <Image src={cart}/>
                                </Box>

                            </IconHeader>

                        </Button>

                    </Box>
                    <Box sx={{
                        backgroundColor: "white !important",
                        width: {sm: "40%", xs: "33%"},
                        display: "inline-flex",
                        justifyContent: "space-around",
                        zIndex: 101
                    }}>
                        <Button sx={{width: "50%"}}>
                            <Stack>
                                <Image src={grouping}/>
                                <Typography style={{color: "#888a89", fontSize: ".625rem"}}>???????? ????????</Typography>
                            </Stack>
                        </Button>

                        <Button sx={{width: "50%"}}>
                            <Stack>
                                <Image src={profile}/>
                                <Typography style={{color: "#888a89", fontSize: ".625rem"}}>??????????????</Typography>
                            </Stack>
                        </Button>
                    </Box>
                </Stack>
            </Box>
            <Box sx={{
                position: "fixed",
                bottom: "-1.7rem",
                zIndex: 11,
                display: "flex",
                width: "30rem",
                justifyContent: 'center'
            }}>
                <Image src={bottomCurve}/>
            </Box>
            <ShoppingCard open={open} setOpen={setOpen}/>
        </Box>

    );
}
