import React from 'react';
import {Button, Stack, Typography,Box} from "@mui/material";
import Image from 'next/image'
import okalaLogo from './../../public/SVG/logo-okala2.svg'
import garbejeIcon from './../../public/SVG/garbeje.svg'
import {useSelector} from "react-redux";
import CardItem from "./CardItem";
const FullCard = () => {
    const items = useSelector(state => state.cart.items)

    return (
        <div>
            <Stack sx={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',p:2,boxShadow:'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
                <Stack sx={{flexDirection:'row',alignItems:'center',gap:1.5}}>
                    <Box sx={{width:'40px'}}><Image  src={okalaLogo}/></Box>
                    <Typography sx={{fontWeight:700}}>فروشگاه افق کوروش</Typography>
                    <Typography sx={{fontWeight:700,color:'midGray.light',fontSize:'0.8rem'}}>( 2 کالا )</Typography>
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
            <Stack>
                {items.map((item)=><CardItem product={item}/>)}
            </Stack>

        </div>
    );
};

export default FullCard;