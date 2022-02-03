import React from 'react';
import {Button, Stack, Typography} from "@mui/material";
import Image from 'next/image'
import okalaLogo from './../../public/SVG/logo-okala2.svg'


const CardItem = ({product}) => {
    console.log(product)
    return (
        <>
            <Stack sx={{flexDirection:'row'}}>
                <Image src={okalaLogo}/>
                <Stack>
                    <Typography>{product.productName}</Typography>
                    <Button>add-delete</Button>
                </Stack>
                <Stack>
                    <Typography>{product.offPercent}%</Typography>
                    <Typography>{product.price}</Typography>
                    <Typography>{product.priceOffer}</Typography>

                </Stack>
            </Stack>
        </>
    );
};

export default CardItem;