import React from 'react';
import {Button, Stack, Typography, Box, CardMedia, colors} from "@mui/material";
import {styled} from "@mui/system";
import PN from "persian-number";
import AddIcon from '@mui/icons-material/Add';
import MinimizeIcon from '@mui/icons-material/Minimize';
import deleteIcon from '../../public/SVG/delete.svg'
import { useDispatch } from 'react-redux'
import { addToCart, decreaseItem, removeItem } from '../../redux/cartReducer'
const ShoppingCardTex = styled('p')(
    () => `
    font-size:0.85rem;
    font-weight:700
    `
)


const CardItem = ({product}) => {

    const dispatch=useDispatch()
    return (
        <>
            <Stack sx={{flexDirection: 'row', height: '18vh', alignItems: 'center', p: 2, mb: 3}}>
                <Box
                    component="img"
                    sx={{
                        height: 92,
                        width: 92,
                        objectFit: 'conver'
                    }}
                    alt="عکس محصول"
                    src={product.productImage.src}
                />
                <Stack sx={{justifyContent: "space-around"}}>
                    <ShoppingCardTex>{PN.convertEnToPe(`${product.productName}`)}</ShoppingCardTex>
                    <Stack sx={{
                        flexDirection: 'row',
                        width: 160,
                        height: 40,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        verticalAlign: 'middle',
                        backgroundColor: 'lightGray.light',
                        borderRadius: 16,
                        m: 1
                    }}>
                        <Box sx={{
                            backgroundColor: 'red.main',
                            height: '100%',
                            p: 1,
                            borderTopRightRadius: 16,
                            borderBottomRightRadius: 16

                        }}>
                            <AddIcon onClick={()=>dispatch(addToCart(product))} color={'white'}/>
                        </Box>
                        <Box sx={{width: 70, height: '100%', verticalAlign: 'middle', textAlign: 'center'}}>
                            <Typography sx={{fontWeight: 700, p: 1}}>
                                {PN.convertEnToPe(product.count)}</Typography>
                        </Box>
                        <Box sx={{
                            backgroundColor: 'lightGray.main',
                            height: '100%',
                            width: 40,
                            borderTopLeftRadius: 16,
                            borderBottomLeftRadius: 16

                        }}>
                            {
                                (product.count===1)?
                                    <Box component='img' src={deleteIcon.src} width='50%' sx={{m:1}} onClick={()=>{dispatch(removeItem(product))}}/>
                                    :
                                    <MinimizeIcon fontSize="large" sx={{color:'red.main',pb:1.2}} onClick={()=>{dispatch(decreaseItem(product))}}/>
                            }
                            </Box>
                    </Stack>
                </Stack>

                <Stack sx={{
                    justifyContent: "center",
                    mr: 'auto',
                    pt: 3,
                    pl: 2,
                    alignItems: "center",
                }}>

                    {
                        (product.offPercent!==0) &&
                            <>
                                <ShoppingCardTex sx={{
                                    color: 'white.main',
                                    backgroundColor: 'green.light',
                                    borderRadius: 2,
                                    height: 25,
                                    textAlign: "center",
                                    p: 0.5,

                                }}>
                                    <Box sx={{color: 'white.main', width: 30}}>
                                        {PN.convertEnToPe(`${product.offPercent}%`)}
                                    </Box>
                                </ShoppingCardTex>
                                <ShoppingCardTex><Box sx={{
                                    textDecoration: 'line-through',
                                    color: 'midGray.light'
                                }}>{PN.convertEnToPe(`${product.price}`)}</Box></ShoppingCardTex>
                            </>

                    }

                    <Typography
                        sx={{fontWeight: 700,justifySelf:'flex-end'}}>
                        {PN.convertEnToPe(`${product.priceOffer}`)}
                        <Typography component={"span"} variant={"body2"}> ریال</Typography>
                    </Typography>

                </Stack>
            </Stack>
        </>
    );
};

export default CardItem;