import React from 'react';
import {Button, Stack, Typography, Box, Slide} from "@mui/material";
import Image from 'next/image'
import okalaLogo from './../../public/SVG/logo-okala2.svg'
import garbejeIcon from './../../public/SVG/garbeje.svg'
import {useSelector} from "react-redux";
import CardItem from "./CardItem";
import PN from "persian-number";
import LinearProgress, {linearProgressClasses} from '@mui/material/LinearProgress';
import {styled} from "@mui/styles";

const minOrder = 500000
import attentionImg from './../../public/SVG/attention.svg'
import BuyButton from "../productCard/BuyButton";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useDispatch} from "react-redux";
import {removeAllItem} from "../../redux/cartReducer";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const BorderLinearProgress = styled(LinearProgress)(({theme}) => ({
    height: 10,
    width: "80%",

    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.red.main,

    },
    [`& .${linearProgressClasses.bar}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],

    },
}));


const DialogButtons = styled(Button)(
    () => `
        font-weight:700;
        height:55px;
        // margin: auto 10px;
        
    `
)
const FullCard = () => {
    const items = useSelector(state => state.cart.items)
    const totalOrder = useSelector((state => state.cart.items.reduce(
        (price, item) => price + (item.price * item.count),
        0)))
    const CountOrder = useSelector((state => state.cart.items.length))
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch()
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleDeleteShoppingCard = () => {
        setOpen(false);
        dispatch(removeAllItem())

    }

    return (
        <div>
            <Stack sx={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                p: 2,
                boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
            }}>
                <Stack sx={{flexDirection: 'row', alignItems: 'center', gap: 1.5}}>
                    <Box sx={{width: '40px'}}><Image src={okalaLogo}/></Box>
                    <Typography sx={{fontWeight: 700}}>فروشگاه افق کوروش</Typography>
                    <Typography sx={{fontWeight: 700, color: 'midGray.light', fontSize: '0.8rem'}}>
                        {PN.convertEnToPe(`(${CountOrder} کالا )`)}
                    </Typography>
                </Stack>
                <>
                    <Button
                        sx={{
                            fontWeight: '700',
                            backgroundColor: 'white.main',
                            color: 'darkGray.main',
                            width: '100px',
                            height: '35px',
                            '&:hover': {
                                backgroundColor: 'lightGray.main',
                                boxShadow: 'none',
                            },
                        }}
                        onClick={handleClickOpen}
                    >
                        <Image src={garbejeIcon}/>
                        حذف همه
                    </Button>
                    {/************************************* Dialog Box ****************************************/}
                    <Dialog
                        open={open}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleClose}
                        aria-describedby="alert-dialog-slide-description"
                        sx={{minWidth: "800px"}}
                    >
                        <DialogTitle sx={{
                            color: 'black.main',
                            fontWeight: 700,
                            fontSize: "1.5rem"
                        }}>{"حذف همه کالاها"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText sx={{color: 'black.main', fontWeight: 600, mb: 2}}
                                               id="alert-dialog-slide-description">
                                آیا از حذف همه کالاها از سبد خرید اطمینان دارید؟
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <DialogButtons
                                sx={{
                                    color: 'red.main',
                                    backgroundColor: 'white.main',
                                    borderRadius: '10px',
                                    fontSize: "1.2rem",
                                    fontWeight: 700,
                                    px: 5,
                                    "&:hover": {
                                        backgroundColor: 'white.main',
                                    },
                                    border: '1px solid #b9b5b5',
                                    mr: 10,
                                    ml: 1,
                                    mb: 2,
                                }}

                                onClick={handleClose}>انصراف </DialogButtons>
                            <DialogButtons sx={{
                                color: 'white.main',
                                backgroundColor: 'red.main',
                                borderRadius: '10px',
                                fontSize: "1.2rem",
                                fontWeight: 700,
                                px: 4,
                                ml: 3,
                                mb: 2,

                                "&:hover": {
                                    backgroundColor: 'red.mid',
                                }
                            }} onClick={handleDeleteShoppingCard}>بله، حذف کن</DialogButtons>
                        </DialogActions>
                    </Dialog>
                </>
            </Stack>

            {/******************************************* shopping card Items **********************************************/}
            <Stack justifyContent={"start"} sx={{height: `${(totalOrder >= minOrder) ? '65vh' : '49vh'}`, overflowY: 'scroll'}}>
                {items.map((item) => <CardItem product={item}/>)}
            </Stack>
            {/******************************************************Card Buy Buttons *********************************************************/}
            {(totalOrder >= minOrder) ?
                <BuyButton totalOrder={totalOrder} active={true}/>
                :
                <>
                    <Stack sx={{flexDirection: "row", p: 2}}>
                        <Image src={attentionImg}/>
                        <Typography variant={"body1"} sx={{fontWeight: 700, p: 1, fontSize: '0.8rem'}}>
                            حداقل مبلغ سفارش ۵۰۰٬۰۰۰ ريال می باشد
                        </Typography>
                    </Stack>
                    <Stack sx={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        borderBottom: "1px solid midGray.light"
                    }}>
                        <Typography variant={"body2"} sx={{fontWeight: 700, color: 'red.main'}}>
                            {PN.convertEnToPe(PN.sliceNumber(`${((totalOrder / minOrder * 100))}%`))}
                        </Typography>
                        <BorderLinearProgress variant="determinate" value={(100 - (totalOrder / minOrder * 100))}/>
                    </Stack>
                    <BuyButton totalOrder={totalOrder} active={false}/>
                </>


            }


        </div>
    );
};

export default FullCard;