import React from 'react';
import {Box, Typography, Button} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image'
import empetyCart from './../../public/images/emptyCart.png'
import Modal from '@mui/material/Modal';

const ShoppingCard = ({open,setOpen}) => {
 const handleCloseShoppingCard=()=>{
        setOpen(false)

 }
    return (
        <Modal
            open={open}
            onClose={handleCloseShoppingCard}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
        <Box sx={{
            position: 'fixes',
            transform:(open)? 'translateX(-63.5vw)' : 'translate(-100vw)',
            top: 0,
            width: '500px',
            zIndex: '100',
            color: 'black',
            height: '100vh',
            transition:'translateX 10s linear',
            background: 'white',
            // -webkitTapHighlightColor: "transparent",
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                p: 2.5,
                alignItems: 'center'
            }}>
                <Typography sx={{fontSize: '0.6rem', fontWeight: '700'}}>سبد خرید شما</Typography>
                <Button onClick={handleCloseShoppingCard} sx={{
                    fontSize: '0.6rem',
                    fontWeight: '700',
                    backgroundColor: 'lightGray.main',
                    color: 'darkGray.main',
                    gap: '15px',
                    width: '90px',
                    height: '35px',
                    '&:hover': {
                        backgroundColor: 'lightGray.main',
                        boxShadow: 'none',
                    },
                }} endIcon={<CloseIcon/>}>بستن</Button>
            </Box>
            <Box sx={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center',rowGap:'20px',mt:10}}>
                <Image src={empetyCart}/>
                <Typography sx={{fontSize: '0.6rem',fontWeight:'700'}}>درحال حاضر سبد خرید شما خالی است!</Typography>
                <Typography sx={{fontSize: '0.6rem', fontWeight: '700',color:'midGray.dark'}}>کالاهایی که دوست داری داشته باشی رو بهش اضافه کن</Typography>
            </Box >


        </Box>
        </Modal>
    );
};

export default ShoppingCard;