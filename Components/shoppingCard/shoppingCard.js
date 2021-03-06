import React, {useEffect} from 'react';
import {Box, Typography, Button} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import {useSelector} from "react-redux";
import EmpetyCard from "./EmpetyCard";
import FullCard from "./FullCard";

const ShoppingCard = ({open,setOpen}) => {
let CountOrder=useSelector(state=>state.cart.items.length)
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

        {/*    **************************************shopping card Header*********************************************/}
        <Box sx={{
            // position: 'fixed',
            // transform:(open)? {lg:'translateX(-63.5vw)',md:'translateX(-50.5vw)'} : 'translate(-100vw)',
            // top: 0,
            // left:0,
            position:"absolute",
            left:0,
            top:0,
            bottom:0,
            width: {md:'520px', xs: "100vw"},
            zIndex: '100',
            color: 'black',
            height: '100vh',
            transition:'translateX 10s linear',
            background: 'white',
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                p: 2.5,
                alignItems: 'center'
            }}>
                <Typography sx={{fontWeight: '700'}}>سبد خرید شما</Typography>
                <Button onClick={handleCloseShoppingCard} sx={{
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
            {/*    ***********************************************************************************/}

            {(CountOrder===0)?<EmpetyCard/>:<FullCard/>}

        </Box>
        </Modal>
    );
};

export default ShoppingCard;