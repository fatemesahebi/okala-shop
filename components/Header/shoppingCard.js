import React from 'react';
import {Box, Typography, Button} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image'
import empetyCart from './../../public/images/emptyCart.png'

const ShoppingCard = () => {
    return (
        <Box sx={{
            position: 'absolute',
            left: -500,
            top: 0,
            width: '500px',
            background: 'red',
            zIndex: '100',
            color: 'black',
            height: '100vh'
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                p: 2.5,
                alignItems: 'center'
            }}>
                <Typography sx={{fontSize: '0.6rem', fontWeight: '700'}}>سبد خرید شما</Typography>
                <Button sx={{
                    fontSize: '0.6rem',
                    fontWeight: '700',
                    backgroundColor: 'lightGray.dark',
                    color: 'darkGray.main',
                    gap: '15px',
                    width: '90px',
                    height: '35px',
                    '&:hover': {
                        backgroundColor: 'lightGray.dark',
                        boxShadow: 'none',
                    },
                }} endIcon={<CloseIcon/>}>بستن</Button>
            </Box>
            <Box>
                <Image src={empetyCart}/>
                <Typography sx={{fontSize: '0.6rem',fontWeight:'700'}}>درحال حاضر سبد خرید شما خالی است!</Typography>
                <Typography sx={{fontSize: '0.6rem', fontWeight: '700',color:'midGray.dark'}}>کالاهایی که دوست داری داشته باشی رو بهش اضافه کن</Typography>
            </Box>


        </Box>
    );
};

export default ShoppingCard;