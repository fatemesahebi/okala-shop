import React from 'react';
import ProductInfo from "./ProductInfo";
import {HeaderFooterProvider} from "../components";
import {Box, Button, Container, Stack, Typography} from "@mui/material";
import {styled} from "@mui/styles";
import CategoryProducts from "../components/CategoryProducts/CategoryProducts";
import BasicTabs from "./tabs";
import {Usersrate} from "./mobile";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import AddIcon from "@mui/icons-material/Add";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
// import ImageMagnifire from "./imageMagnifire";
import PN from "persian-number";

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
    <Link underline={"none"} key="1" color="inherit" href="/" onClick={handleClick}>
        اکالا
    </Link>,
    <Link
        underline={"none"}
        key="2"
        color="inherit"
        href="/getting-started/installation/"
        onClick={handleClick}
    >
        آرایشی بهداشتی
    </Link>,
    <Link
        underline={"none"}
        key="2"
        color="inherit"
        href="/getting-started/installation/"
        onClick={handleClick}
    >
        بهداشت فردی
    </Link>,
    <Link
        underline={"none"}
        key="2"
        color="inherit"
        href="/getting-started/installation/"
        onClick={handleClick}
    >
        بهداشت سر و بدن
    </Link>,
    <Link
        underline={"none"}
        key="2"
        color="inherit"
        href="/getting-started/installation/"
        onClick={handleClick}
    >
        شامپو بدن
    </Link>,
    // <Typography key="3" color="text.primary">
    //     Breadcrumb
    // </Typography>,
];

const ProductPage = () => {
    return (
        <Box display={{md: "block" , xs: "none"}}>
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
                                {breadcrumbs}
                            </Breadcrumbs>
                        </Stack>
                        <MyContainer>
                            <Box>
                                <InfoSection>
                                    <ImageMagnifire/>
                                    <InformationWrapper>
                                        <Typography variant={"h6"} component={"div"} sx={{
                                            fontSize: '1.25rem',
                                            fontWeight: 'bold',
                                            marginBottom: '47px'
                                        }}>
                                            شامپو بدن مناسب پوست چرب
                                            بامبو 400 میلی لیتری دیپ سنس
                                        </Typography>
                                        <BrandWrapper>
                                            <Button sx={{
                                                fontSize: '1.1rem',
                                                fontWeight: "700"
                                            }}>
                                                <a> دیپ سنس </a>
                                            </Button>
                                        </BrandWrapper>
                                        <CategoryWrapper>
                                            <Typography fontWeight={700} variant={"h6"} component={"span"}>
                                                دسته بندی :
                                                <a style={{
                                                    color: 'rgba(0, 134, 132, 1)',
                                                    fontSize: '1rem',
                                                    fontWeight: '700'
                                                }} href="/#"> شامپو بدن</a>
                                            </Typography>
                                        </CategoryWrapper>
                                        <Usersrate sx={{position: 'inherit'}}>
                                            <StarOutlineIcon/>
                                            <span>4.0</span>
                                        </Usersrate>
                                        <AmountWrapper>
                                            <ColorButton>
                                                <AddIcon sx={{
                                                    fontSize: "1.75rem"
                                                }} ml={20}/>
                                                <Typography fontSize={"1.15rem"} fontWeight={"bold"}>
                                                    افزودن به سبد خرید
                                                </Typography>
                                            </ColorButton>
                                            <Box sx={{display: 'flex', flexDirection: 'column', position: "absolute" , bottom: 0 , left: 0}}>
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
                                                        {PN.convertEnToPe(20)}%
                                                    </Typography>
                                                    <Typography component={"span"} sx={{
                                                        paddingRight:"1rem",
                                                        color: 'rgba(175, 175, 175, 1)',
                                                        fontSize: '1.3rem',
                                                        fontWeight: "700",
                                                        textDecoration: 'line-through',
                                                    }}>
                                                        ۴۴۰٬۰۰۰
                                                    </Typography>

                                                </Box>
                                                <Box>
                                                    <Typography component={"span"} sx={{
                                                        color: 'rgba(54, 54, 54, 1)',
                                                        fontSize: '1.75rem',
                                                        fontWeight: 'bold',
                                                    }}>
                                                        ۳۵۲٬۰۰۰
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
                                <BasicTabs/>
                            </Box>
                        </MyContainer>
                        <CategoryProducts similarProducts={true} category={"محصولات جدید"}/>
                    </MainContainer>
                </Container>
            </Box>
        </Box>

    );
};

export default ProductPage;

