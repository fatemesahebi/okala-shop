import React, {useEffect} from 'react';
import {Box, Typography, Button} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import {useSelector} from "react-redux";
import EmpetyCard from "./EmpetyCard";
import FullCard from "./FullCard";

const ShoppingCard = ({open,setOpen}) => {
    const items = useSelector(state => state.cart.items)

    // const totalCount= useSelector(state=>state.cart.items.reduce(
    //     (count, item) => count + item.count,
    //     0))
    // console.log(totalCount)

let totalCount=2
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
            position: 'fixes',
            transform:(open)? 'translateX(-63.5vw)' : 'translate(-100vw)',
            top: 0,
            width: '500px',
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

            {(totalCount===0)?<EmpetyCard/>:<FullCard/>}

        </Box>
        </Modal>
    );
};

export default ShoppingCard;