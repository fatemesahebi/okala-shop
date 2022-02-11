import React from 'react';
import CardContent from "@mui/material/CardContent";
import {Container, Grid} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import styled from '@emotion/styled'
import PN from "persian-number";
import {addToCart, decreaseItem, removeItem} from "../../redux/cartReducer";
import {useSelector, useDispatch} from "react-redux";

const StyledCard = styled.div({
    height: '312px',
    width: '220px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    ['@media (max-width: 768px)']:{
        height: '258px',
        width: '176px'
    }

})
const StyledImage = styled.img({
    width: '153px',
    position: 'block',
    ['@media (max-width: 768px)']:{
        width: '100px'
    }
})
const StyledIcon = styled.text({
    backgroundColor: '#f01436',
    color: 'white',
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    padding: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: '1',
    right: '10px'
})
const StyledShoppingCount = styled.text({
    backgroundColor: '#f8f8f8',
    color: 'black',
    width: '110px',
    height: '40px',
    padding: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: '1',
    right: '45px',
    animation: "ease-in",
    animationDelay: '4s'
})
const StyledRemoveIcon = styled.text({
    backgroundColor: '#f0f0f0',
    color: '#f01436',
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    padding: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: '1',
    right: '150px',
    animation: "ease-in",
    animationDelay: '4s'
})
const StyledMinusIcon = styled.text({
    backgroundColor: '#f0f0f0',
    color: '#f01436',
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    padding: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: '1',
    right: '150px',
    animation: "ease-in",
    animationDelay: '4s'
})
const StyledCardMedia = styled.div({
    display: "flex",
    justifyContent: 'center',
    marginTop: '15px',
    position: "relative",
})
const StyledCardContent = styled.div({
    position: 'relative',
    marginTop: '15px',
    padding: '10px'

})
const StyledProductName = styled.div({
    fontSize: '14px',
    fontWeight: 'bold',
    // position: 'absolute'
})
const StyledPrice = styled.div({
    textDecoration: 'line-through',
    fontSize: '14px',
    position: 'absolute',
    left: '20px',
    top: '60px'
})
const StyledOffPercent = styled.div({
    backgroundColor: '#49aa49',
    borderRadius: '5px',
    color: 'white',
    padding: '2px 10px 2px 10px',
    fontWeight: 'bold',
    fontSize: '13px',
    position: 'absolute',
    right: '20px',
    top: "90px"
})
const StyledPriceOffer = styled.div({
    position: "absolute",
    fontSize: '14px',
    left: '20px',
    top: '90px'
})
const StyledNoneOffer = styled.div({
    position: "absolute",
    fontSize: '14px',
    left: '20px',
    bottom: '18px'
})


const SingleProduct = ({product}) => {

    const dispatch = useDispatch()
    let shoppingCardId = useSelector(state => state.cart.items.findIndex((item) => item.id === product.id) > -1
            ? state.cart.items.findIndex((item) => item.id === product.id) : -1)
      let  shoppinCardCount = useSelector(state => shoppingCardId === -1 ? 0 : state.cart.items[shoppingCardId].count)

    return (
        <Container sx={{padding: "0 !important"}} maxWidth='xs'>

            <Grid container spacing={4}>
                <Grid item>
                    <StyledCard>
                        <StyledCardMedia>
                            <StyledIcon>
                                {(shoppinCardCount >= 0) && <AddIcon onClick={() => {
                                    dispatch(addToCart(product));
                                    // setVisible(true);
                                    // setCounter(counter + 1)
                                }}/>}
                            </StyledIcon>
                            {(shoppinCardCount > 1) && <div>
                                <StyledShoppingCount>{PN.convertEnToPe(shoppinCardCount)}</StyledShoppingCount>
                                <StyledMinusIcon>
                                    <RemoveIcon onClick={() => {
                                        dispatch(decreaseItem(product))
                                    }}/></StyledMinusIcon>
                            </div>}

                            {
                                (shoppinCardCount === 1) && <div>
                                    <StyledShoppingCount>{PN.convertEnToPe(shoppinCardCount)}</StyledShoppingCount>
                                    <StyledRemoveIcon><DeleteOutlineOutlinedIcon
                                        onClick={() => dispatch(removeItem(product))}/></StyledRemoveIcon>
                                </div>
                            }


                            <StyledImage src={product.productImage.src}/>
                        </StyledCardMedia>
                                <StyledCardContent>
                                    <StyledProductName variant='paragraph'>{product.productName}</StyledProductName>
                                    <StyledPrice style={{
                                        visibility: product.offPercent === 0 ? "hidden":"visible"
                                    }} gutterBottom variant='paragraph'>{PN.convertEnToPe(PN.sliceNumber(`${product.price}`))}</StyledPrice>
                                    <div>
                                        <Grid container>
                                            <Grid item>
                                                <StyledOffPercent style={{
                                                    visibility: product.offPercent === 0 ? "hidden":"visible"
                                                }}
                                                    variant='paragraph'>{PN.convertEnToPe(PN.sliceNumber(`${product.offPercent}`))} %</StyledOffPercent>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <StyledPriceOffer
                                                variant='paragraph'>{PN.convertEnToPe(PN.sliceNumber(`${product.priceOffer}`))} ریال</StyledPriceOffer>
                                        </Grid>
                                    </div>
                                </StyledCardContent>
                    </StyledCard>
                </Grid>
            </Grid>

        </Container>

    );
};

export default SingleProduct;
