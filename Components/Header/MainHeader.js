import Image from 'next/image'
import okalaLogo2 from './../../public/SVG/logo-okala2.svg'
import {SearchBox} from "../index";
import {Box, Typography, Stack} from "@mui/material";
import shopBascket from './../../public/SVG/shopBascket.svg'
import {styled} from "@mui/system";
import ShoppingCard from '../shoppingCard/shoppingCard'
import {useState} from "react";
import {useSelector} from "react-redux";
import PN from "persian-number";
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import profileBackground from "./../../public/SVG/profileBackground.svg"
import orderSvg from '../../public/SVG/order.svg';
import exitSvg from './../../public/SVG/exit.svg'
import profileSvg from './../../public/SVG/profile.svg'

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
const MenuItemsRow = styled(MenuItem)(
    () => `
    border-bottom:1px solid rgba(240, 240, 240, 1);
  
    `
)

function MainHeader() {
    const [open, setOpen] = useState(false)
    const handleOpenShoppingCard = () => {
        setOpen(true)
    }
    const totalOrder = useSelector(state => state?.cart?.items?.length)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <Stack display={{xs:"none",md:"flex"}} alignItems={"center"} justifyContent={"center"} sx={{
            width: "100vw", height: '80px', backgroundColor: 'white.main',
            position: 'fixed',
            zIndex: '1000',
            top:0,

        }}>
            <Stack sx={{
                // display: {md: "flex", xs: "none"},
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                // px: '40px',
                width: {md: '90%', lg: "1280px"},
                height: '80px',

            }}>
                <Image src={okalaLogo2} alt={"فروشگاه اکالا"}/>
                <SearchBox/>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    columnGap: '18px'
                }}>

                    {/************************************dropDown profile************************************************/}
                    <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
                        <IconHeader sx={{
                            backgroundColor: 'lightGray.dark',
                        }}><Image onClick={handleClick} src={profileSvg}/>
                        </IconHeader>
                    </Box>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={openMenu}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                width: '210px',
                                height: "228px",
                                border: "1px solid rgba(230, 230, 230, 1)",
                                backgroundColor: 'lightGray.light',
                                borderRadius: "10px",
                                animation: "MoveUpDown .3s linear",
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 3.2,
                                "&:hover": {
                                    backgroundColor: "none",
                                },
                                "&:select": {
                                    mozAppearance: "none",
                                    webkitAppearance: "none",
                                    appearance: "none",
                                },


                                '& .MuiAvatar-root': {
                                    width: 100,
                                    height: 100,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 180,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'lightGray.light',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{horizontal: 'left', vertical: 'top'}}
                        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    >
                        <MenuItem sx={{height: '1px', display: "none"}}>hi</MenuItem>
                        <MenuItem sx={{
                            color: 'white.main', "&:hover": {
                                bgcolor: "none",
                            },
                            p: 0.5,
                        }}>
                            <Box component='img' src={profileBackground.src}
                                 sx={{width: "100%", color: "white.main"}}></Box>
                            <Typography sx={{
                                position: 'absolute',
                                right: 75,
                                fontWeight: 700
                            }}>{PN.convertEnToPe('09130602241')}</Typography>
                        </MenuItem>
                        <MenuItemsRow>
                            <Box component='img' src={profileSvg.src}/>
                            <DropDownTypo sx={{color: 'darkGray.dark'}}>حساب کاربری</DropDownTypo>
                        </MenuItemsRow>
                        <MenuItemsRow>
                            <Box component='img' src={orderSvg.src}/>

                            <DropDownTypo sx={{color: 'darkGray.dark'}}>سفارش های من</DropDownTypo>
                        </MenuItemsRow>

                        <MenuItem>
                            <Box component='img' src={exitSvg.src}/>
                            <DropDownTypo sx={{color: 'red.main'}}>خروج</DropDownTypo>
                        </MenuItem>
                    </Menu>
                    {/************************************dropDown************************************************/}


                    <IconHeader sx={{backgroundColor: 'aqua.light'}} onClick={handleOpenShoppingCard}>
                        {
                            (totalOrder != 0) && <Typography sx={{
                                backgroundColor: 'red.main',
                                color: 'white.main',
                                fontWeight: 700,
                                borderRadius: '100%',
                                width: 20,
                                heigh: 20,
                                textAlign: "center",
                            mb:2.5,
                                zIndex: '100',
                                fontSize: '0.8rem',

                            }}>{PN.convertEnToPe(totalOrder)}</Typography>
                        }
                        <Image src={shopBascket}/>

                    </IconHeader>


                </Box>
                <ShoppingCard open={open} setOpen={setOpen}/>
            </Stack>
        </Stack>

    )
}

export default MainHeader