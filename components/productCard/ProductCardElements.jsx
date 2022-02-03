import React from 'react';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {Container, Grid} from "@mui/material";
import {useStyles} from "./style.productCard";
import AddIcon from '@mui/icons-material/Add';

const SingleProduct = ({product}) => {
    const classes = useStyles()
    return (
        <Container sx={{padding: "0 !important"}} className={classes.cardGrid} maxWidth='xs'>

            <Grid container spacing={4}>
                <Grid item>
                    <Card className={classes.card}>
                        <CardMedia className={classes.cardMedia}>
                            <AddIcon className={classes.icon}/>
                            <img className={classes.image} src={product.productImage}/>
                        </CardMedia>
                        <CardContent className={classes.cardContent}>
                            <div className={classes.productName}>
                                <Typography variant='paragraph'>{product.productName} </Typography>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'left'}}>
                                <Typography className={classes.oldPriceCard} gutterBottom variant='paragraph'>{product.price} </Typography>
                            </div>

                            <div className={classes.newPrice}>
                                <Typography className={classes.offPercent}
                                            variant='paragraph'>{product.offPercent}</Typography>
                                <Typography className={classes.cardPrice}
                                            variant='paragraph'>{product.priceOffer}</Typography>

                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>

    );
};

export default SingleProduct;
