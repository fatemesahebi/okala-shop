import React, {useEffect, useState} from 'react';
import ProductInfo from "./ProductInfo";
import {HeaderFooterProvider} from "../Components";
import {Box, Button, Container, Stack, Typography} from "@mui/material";
import {styled} from "@mui/system";
import CategoryProducts from "../Components/CategoryProducts/CategoryProducts";
import BasicTabs from "./tabs";
import {Usersrate} from "./mobile";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import AddIcon from "@mui/icons-material/Add";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
// import ImageMagnifire from "./imageMagnifire";
import PN from "persian-number";
import ImageMagnifire from "./imageMagnifire";
import {
    getProduct
} from "../lib/axios/getData";
import img0 from "../public/images/0.png";
import {Swiper , SwiperSlide} from "swiper/react";
import Image from "next/image"
import "swiper/css"
import {useDispatch, useSelector} from "react-redux";
import {addToCart, decreaseItem, removeItem} from "../redux/cartReducer";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const ColorButton = styled(Button)(({theme}) => ({
    position: "absolute",
    bottom: 0,
    width: '14rem !important',
    height: '3rem !important',
    minWidth: '104px !important',
    backgroundColor: 'rgb(240, 20, 54)',
    borderRadius: ' 12px',
    color: ' rgb(248, 248, 248) !important',
    "&.MuiButtonBase-root:hover": {
        color: 'rgb(230, 230, 230)',
        backgroundColor: 'rgb(222, 8, 46) !important'
    }
}));

const MainContainer = styled('div')({
    maxWidth: '1280px!important',
    margin: 'auto',
    padding: '36px !important',
    position: 'relative',
    overflowX: 'hidden',
    overflowY: 'auto',

})
const MyContainer = styled('div')({
    padding: '36px',
    // position: 'relative',
    background: ' #fff',
    borderRadius: '12px',
    margin: 'auto',
    marginBottom: '2rem'
});

const InfoSection = styled('div')({
    display: 'flex',
    position: 'relative',
    flexFlow: 'row wrap',
    marginBottom: '50px',
});

const ThumbnailWrapper = styled('div')({
    width: '600px',
    height: '408px',
    display: 'flex',
    marginLeft: '16px',
    paddingLeft: ' 24px',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between'
})

const InformationWrapper = styled('div')({
    width: '32rem',
    minHeight: "20rem",
    display: 'flex',
    flexGrow: '1',
    flexDirection: 'column',
});

const BrandWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '22px',
})
const CategoryWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '22px',
})

const AmountWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '2rem'
});

function handleClick(event) {
    event.preventDefault()
}

const breadcrumbs = [
    // <Typography key="3" color="text.primary">
    //     Breadcrumb
    // </Typography>,
];

const ProductPage = ({productId , productInitial}) => {
    const [product, setProduct] = useState(productInitial? productInitial :{
        id: 0,
        productImage: {src: ""},
        productName: "",
        brand: "",
        brandEn: "",
        categories: "" ,
        category: "",
        batchType: "",
        Type: "",
        price: 0,
        get isOff() {
            return !this.offPercent
        },
        get priceOffer() {
            return (this.price - (this.price / 100) * this.offPercent)
        },
        date: new Date(),
        selerCount: 1,

        offPercent: 19
    })
    const dispatch = useDispatch()
    let shoppingCardId = useSelector(state => state.cart.items.findIndex((item) => item.id === product.id) > -1
        ? state.cart.items.findIndex((item) => item.id === product.id) : -1)
    let  shoppinCardCount = useSelector(state => shoppingCardId === -1 ? 0 : state.cart.items[shoppingCardId].count)
    useEffect(() => {
        getProduct(productId)
            .then(data => setProduct(data.product))
            .catch(error => alert(error))
    }, [])
    return (
        <Box display={{md: "block", xs: "none"}}>
            <Box>
                <Container maxWidth={'false'} sx={{background: '#f8f8f8'}}>

                    <MainContainer>
                        <Stack sx={{direction: "rtl", marginBottom: '36px',}} spacing={2}>
                            <Breadcrumbs
                                sx={{
                                    fontSize: "small",
                                    fontWeight: "bold"
                                }}
                                separator={<NavigateBeforeIcon fontSize="small"/>}
                                aria-label="breadcrumb"
                            >
                                <Link underline={"none"} key="1" color="inherit" href="/" onClick={handleClick}>
                                    اکالا
                                </Link>
                                <Link
                                    underline={"none"}
                                    key="2"
                                    color="inherit"
                                    href="/getting-started/installation/"
                                    onClick={handleClick}
                                >
                                    {product.categories}
                                </Link>
                                <Link
                                    underline={"none"}
                                    key="2"
                                    color="inherit"
                                    href="/getting-started/installation/"
                                    onClick={handleClick}
                                >
                                    {product.batchType}
                                </Link>
                                <Link
                                    underline={"none"}
                                    key="2"
                                    color="inherit"
                                    href="/getting-started/installation/"
                                    onClick={handleClick}
                                >
                                    {product.Type}
                                </Link>
                            </Breadcrumbs>
                        </Stack>
                        <MyContainer>
                            <Box>
                                <InfoSection>
                                    {product.productImage.src !== "" &&
                                    <Box sx={{
                                        display: "inline-flex",
                                    }}>

                                        <Box>
                                            <Swiper spaceBetween={0} slidesPerView={"auto"} style={{height: "15rem", width: "60px"}} direction={"vertical"}>
                                                <SwiperSlide>
                                                    <Box sx={{
                                                        my: ".5rem",
                                                        width: "60px",
                                                        height: "60px",
                                                        border: "1px solid rgba(0,0,0,0.1)",
                                                        borderRadius: "5px",
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        alignItems: "center",
                                                        justifyContent: "center"
                                                    }}>
                                                        <Image width={"50px"} height={"50px"} src={product.productImage}/>
                                                    </Box>
                                                    <Box sx={{
                                                        my: ".5rem",
                                                        width: "60px",
                                                        height: "60px",
                                                        border: "1px solid rgba(0,0,0,0.1)",
                                                        borderRadius: "5px",
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        alignItems: "center",
                                                        justifyContent: "center"
                                                    }}>
                                                        <Image width={"50px"} height={"50px"} src={product.productImage}/>
                                                    </Box>
                                                </SwiperSlide>
                                            </Swiper>
                                        </Box>
                                        <ImageMagnifire image={String(product.productImage.src)}/>
                                    </Box>}
                                    <InformationWrapper>
                                        <Typography variant={"h6"} component={"div"} sx={{
                                            fontSize: '1.25rem',
                                            fontWeight: 'bold',
                                            marginBottom: '47px'
                                        }}>{product.productName}
                                        </Typography>
                                        <BrandWrapper>
                                            <Button sx={{
                                                fontSize: '1.1rem',
                                                fontWeight: "700"
                                            }}>
                                                <a> {product.brand} </a>
                                            </Button>
                                        </BrandWrapper>
                                        <CategoryWrapper>
                                            <Typography fontWeight={700} variant={"h6"} component={"span"}>
                                                دسته بندی :
                                                <a style={{
                                                    color: 'rgba(0, 134, 132, 1)',
                                                    fontSize: '1rem',
                                                    fontWeight: '700'
                                                }} href="/#"> {product.Type}</a>
                                            </Typography>
                                        </CategoryWrapper>
                                        <Usersrate sx={{position: 'inherit'}}>
                                            <StarOutlineIcon/>
                                            <span>۴.۰</span>
                                        </Usersrate>
                                        <AmountWrapper>
                                            { shoppinCardCount === 0 && <ColorButton onClick={() => {
                                                dispatch(addToCart(product));
                                            }}>
                                                <AddIcon sx={{
                                                    fontSize: "1.75rem"
                                                }} ml={20}/>
                                                <Typography fontSize={"1.15rem"} fontWeight={"bold"}>
                                                    افزودن به سبد خرید
                                                </Typography>
                                            </ColorButton>
                                            }
                                            {(shoppinCardCount === 1) && <ColorButton >
                                                <AddIcon onClick={() => {
                                                    dispatch(addToCart(product));
                                                }} sx={{
                                                    fontSize: "1.75rem"
                                                }} ml={20}/>
                                                <Typography fontSize={"1.15rem"} fontWeight={"bold"}>
                                                    تعداد در سبد: {PN.convertEnToPe(shoppinCardCount)}
                                                </Typography>
                                                <DeleteOutlineOutlinedIcon
                                                    onClick={() => dispatch(removeItem(product))} sx={{
                                                    fontSize: "1.75rem"
                                                }} ml={20}/>
                                            </ColorButton>}
                                            {(shoppinCardCount > 1) && <ColorButton >
                                                <AddIcon onClick={() => {
                                                    dispatch(addToCart(product));
                                                }} sx={{
                                                    fontSize: "1.75rem"
                                                }} ml={20}/>
                                                <Typography fontSize={"1.15rem"} fontWeight={"bold"}>
                                                    تعداد در سبد: {PN.convertEnToPe(shoppinCardCount)}
                                                </Typography>
                                                <RemoveIcon
                                                    onClick={() => dispatch(decreaseItem(product))} sx={{
                                                    fontSize: "1.75rem"
                                                }} ml={20}/>
                                            </ColorButton>}


                                            <Box sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                position: "absolute",
                                                bottom: 0,
                                                left: 0
                                            }}>
                                                <Box>
                                                    <Typography component={"span"} sx={{
                                                        padding: "0.2rem 0.8rem",
                                                        display: "inline-block",
                                                        marginLeft: '5px',
                                                        color: '#fff',
                                                        fontSize: '1rem',
                                                        textAlign: 'center',
                                                        fontWeight: '700',
                                                        lineHeight: '30px',
                                                        borderRadius: '8px',
                                                        backgroundColor: '#4CB04C',
                                                    }}>
                                                        {PN.convertEnToPe(product.offPercent)}%
                                                    </Typography>
                                                    <Typography component={"span"} sx={{
                                                        paddingRight: "1rem",
                                                        color: 'rgba(175, 175, 175, 1)',
                                                        fontSize: '1.3rem',
                                                        fontWeight: "700",
                                                        textDecoration: 'line-through',
                                                    }}>
                                                        {PN.convertEnToPe(PN.sliceNumber(product.price))}
                                                    </Typography>

                                                </Box>
                                                <Box>
                                                    <Typography component={"span"} sx={{
                                                        color: 'rgba(54, 54, 54, 1)',
                                                        fontSize: '1.75rem',
                                                        fontWeight: 'bold',
                                                    }}>
                                                        {PN.convertEnToPe(PN.sliceNumber(product.priceOffer))}
                                                    </Typography>
                                                    <Typography component={"span"} sx={{
                                                        color: 'rgba(54, 54, 54, 1)',
                                                        fontSize: '1.55rem',
                                                        marginRight: ' 2px',
                                                        fontWeight: 'bold',
                                                    }}>
                                                        ریال
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </AmountWrapper>

                                    </InformationWrapper>
                                </InfoSection>
                            </Box>
                            <Box sx={{maxWidth: '100%'}}>
                                {product.productName !== "" && <BasicTabs description={product.productName}/>}
                            </Box>
                        </MyContainer>
                        {product.categories !== "" && <CategoryProducts similarProducts={true} category={product.categories}/>}
                    </MainContainer>
                </Container>
            </Box>
        </Box>

    );
};

export default ProductPage;

