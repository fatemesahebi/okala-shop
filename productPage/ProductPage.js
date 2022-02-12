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

const ColorButton = styled(Button)(({theme}) => ({
    width: '10rem !important',
    height: '38px !important',
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
    width: '550px',
    height: '408px',
    display: 'flex',
    marginLeft: '16px',
    paddingLeft: ' 24px',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between'
})

const InformationWrapper = styled('div')({
    width: '32rem',
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
        <HeaderFooterProvider>
            <ProductInfo/>
            {/*<ImageMagnifire/>*/}
            <Container maxWidth={'false'} sx={{background: '#f8f8f8'}}>

                <MainContainer>
                    <Stack sx={{direction: "rtl", marginBottom: '36px',}} spacing={2}>
                        <Breadcrumbs
                            separator={<NavigateBeforeIcon fontSize="small"/>}
                            aria-label="breadcrumb"
                        >
                            {breadcrumbs}
                        </Breadcrumbs>
                    </Stack>
                    <MyContainer>
                        <Box>
                            <InfoSection>
                                <ThumbnailWrapper>

                                </ThumbnailWrapper>
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
                                        <Button>
                                            <a> دیپ سنس </a>
                                        </Button>
                                    </BrandWrapper>
                                    <CategoryWrapper>
                                        <Typography variant={"h6"} component={"span"}>
                                            دسته بندی :
                                            <a style={{
                                                color: 'rgba(0, 134, 132, 1)',
                                                fontSize: '1rem',
                                                fontWeight: '500'
                                            }} href="/#"> شامپو بدن</a>
                                        </Typography>
                                    </CategoryWrapper>
                                    <Usersrate sx={{position: 'inherit'}}>
                                        <StarOutlineIcon/>
                                        <span>4.0</span>
                                    </Usersrate>
                                    <AmountWrapper>
                                        <ColorButton>
                                            <AddIcon ml={20}/>
                                            افزودن به سبد خرید
                                        </ColorButton>
                                        <Box sx={{display: 'flex', flexDirection: 'column',}}>
                                            <Box>
                                                <Typography component={"span"} sx={{
                                                    display: "inline-block",
                                                    marginLeft: '5px',
                                                    color: '#fff',
                                                    width: '45px',
                                                    fontSize: '1rem',
                                                    textAlign: 'center',
                                                    fontWeight: '500',
                                                    lineHeight: '30px',
                                                    borderRadius: '8px',
                                                    backgroundColor: '#4CB04C',
                                                }}>
                                                    20%
                                                </Typography>
                                                <Typography component={"span"} sx={{
                                                    color: 'rgba(175, 175, 175, 1)',
                                                    fontSize: '1rem',
                                                    textDecoration: 'line-through',
                                                }}>
                                                    ۴۴۰٬۰۰۰
                                                </Typography>

                                            </Box>
                                            <Box>
                                                <Typography component={"span"} sx={{
                                                    color: 'rgba(54, 54, 54, 1)',
                                                    fontSize: '1.25rem',
                                                    fontWeight: 'bold',
                                                }}>
                                                    ۳۵۲٬۰۰۰
                                                </Typography>
                                                <Typography component={"span"} sx={{
                                                    color: 'rgba(54, 54, 54, 1)',
                                                    fontSize: '1rem',
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
                    <MyContainer>
                        <CategoryProducts similarProducts={true} category={"محصولات جدید"}/>
                    </MyContainer>
                </MainContainer>
            </Container>
        </HeaderFooterProvider>
    );
};

export default ProductPage;

