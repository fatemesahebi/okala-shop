import React from 'react';
import {Button, Stack, Typography, Box} from "@mui/material";
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


const FullCard = () => {
    const items = useSelector(state => state.cart.items)
    const totalOrder = useSelector((state => state.cart.items.reduce(
        (price, item) => price + (item.price * item.count),
        0))) || 20000
    const CountOrder = useSelector((state => state.cart.items.reduce(
        (count, item) => count +item.count,
        0))) || 3

    console.log(items)
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
                >
                    <Image src={garbejeIcon}/>
                    حذف همه

                </Button>

            </Stack>

            <Stack sx={{height: `${(totalOrder >= minOrder) ? "400px" : "300px"}`, overflowY: 'scroll'}}>
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