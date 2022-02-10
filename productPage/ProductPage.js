import React from 'react';
import ProductInfo from "./ProductInfo";
import {HeaderFooterProvider} from "../components";
import {Box, Button, Container, Typography} from "@mui/material";
import {styled} from "@mui/styles";
import CategoryProducts from "../components/CategoryProducts/CategoryProducts";
import BasicTabs from "./tabs";
import {Usersrate} from "./mobile";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import AddIcon from "@mui/icons-material/Add";
import useMediaQuery from '@mui/material/useMediaQuery';



const ColorButton = styled(Button)(({theme}) => ({
    width: '10rem !important',
    height: '38px !important',
    minWidth: '104px !important',
    backgroundColor: 'rgb(240, 20, 54)',
    borderRadius: ' 12px',
    color: ' rgb(248, 248, 248) !important',
}));

const MainContainer = styled('div')({
    maxWidth:'1280px !imprtant',
    margin: 'auto'
})
const MyContainer = styled('div')({
    padding: '36px',
    position: 'relative',
    background: ' #fff',
    borderRadius: '12px',
    margin:'auto'
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
    width:'32rem',
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
    marginTop:'2rem'
});

const ProductPage = () => {
    return (
        <HeaderFooterProvider>
            <ProductInfo/>
            {/*<ImageMagnifire/>*/}
            <Container maxWidth={'false'} sx={{background: '#f8f8f8'}}>
                <MainContainer >
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
                                            <a> شامپو بدن</a>
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
                                                <span style={{
                                                    color: 'rgba(175, 175, 175, 1)',
                                                    fontSize: '1rem',
                                                    textDecoration: 'line-through',
                                                }}>
                                                    ۴۴۰٬۰۰۰
                                                </span>
                                                <span style={{
                                                    // display:"inline-block",
                                                    // // marginLeft:'5px',
                                                    color: '#fff',
                                                    width: '60px',
                                                    fontSize: '1rem',
                                                    textAlign: 'center',
                                                    fontWeight: '500',
                                                    lineHeight: '26px',
                                                    borderRadius: '8px',
                                                    backgroundColor: '#4CB04C',
                                                }}>
                                                20%
                                            </span>
                                            </Box>
                                            <Box>
                                                <span style={{
                                                    color: 'rgba(54, 54, 54, 1)',
                                                    fontSize: '1.25rem',
                                                    fontWeight: '400',
                                                    marginRight: ' 8px',
                                                }}>
                                                    ۳۵۲٬۰۰۰
                                                </span>
                                                <span style={{
                                                    color: 'rgba(54, 54, 54, 1)',
                                                    fontSize: '0.75rem',
                                                    marginRight: ' 2px',
                                                }}>
                                                    ریال
                                                </span>
                                            </Box>
                                        </Box>
                                    </AmountWrapper>

                                </InformationWrapper>
                            </InfoSection>

                        </Box>
                        <Box>
                            <BasicTabs/>
                        </Box>

                    </MyContainer>
                    <CategoryProducts similarProducts={true} category={"محصولات جدید"}/>

                </MainContainer>
            </Container>
        </HeaderFooterProvider>
    );
};

export default ProductPage;

