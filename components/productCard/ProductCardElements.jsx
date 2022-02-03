import React from 'react';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {Container, Grid} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import styled from '@emotion/styled'
import {Image} from "@mui/icons-material";
import PN from "persian-number";
const StyledCard = styled.div({
    height: '312px',
    width: '220px',
    display: 'flex',
    flexDirection: 'column',
    border: 'solid lightgray 1px',
    borderRadius:'5px',
    backgroundColor:'#ffffff'

})
const StyledImage = styled.img({
    width: '153px',
    position: 'block'
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
    position: 'absolute'
})
const StyledPrice = styled.div({
    textDecoration: 'line-through',
    fontSize: '14px',
    position: 'absolute',
    left: '10px',
    top: '60px'
})
const StyledOffPercent = styled.div({
    backgroundColor: '#49aa49',
    borderRadius: '5px',
    color: 'white',
    padding: '2px 10px 2px 10px',
    fontWeight: 'bold',
    fontSize:'13px',
    position: 'absolute',
    right: '10px',
    top: "90px"
})
const StyledPriceOffer = styled.div({
    position: "absolute",
    fontSize:'14px',
    left: '20px',
    bottom: '20px'
})


const SingleProduct = ({product}) => {

    return (
        <Container sx={{padding: "0 !important"}} maxWidth='xs'>

            <Grid container spacing={4}>
                <Grid item>
                    <StyledCard>
                        <StyledCardMedia>
                            <StyledIcon>
                                <AddIcon/>
                            </StyledIcon>
                            <StyledImage src={product.productImage}/>
                        </StyledCardMedia>
                        {product.offPercent > 0 ? (
                                <StyledCardContent>
                                    <StyledProductName variant='paragraph'>{product.productName}</StyledProductName>
                                    <StyledPrice gutterBottom variant='paragraph'>{product.price}</StyledPrice>
                                    <div>
                                        <Grid container>
                                            <Grid item>
                                                <StyledOffPercent variant='paragraph'>{PN.convertEnToPe(PN.sliceNumber(`${product.offPercent}`))}%</StyledOffPercent>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <StyledPriceOffer
                                                variant='paragraph'>{PN.convertEnToPe(PN.sliceNumber(`${product.priceOffer}`))} ریال</StyledPriceOffer>
                                        </Grid>
                                    </div>
                                </StyledCardContent>)
                            :
                            (<CardContent>
                                <StyledProductName variant='paragraph'>{product.productName}</StyledProductName>
                                <StyledPriceOffer variant='paragraph'>{product.priceOffer} </StyledPriceOffer>
                            </CardContent>)}
                    </StyledCard>
                </Grid>
            </Grid>
        </Container>

    );
};

export default SingleProduct;
