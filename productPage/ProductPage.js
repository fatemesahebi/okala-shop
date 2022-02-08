import React from 'react';
import ProductInfo from "./ProductInfo";
import ImageMagnifire from "./imageMagnifire";
import {HeaderFooterProvider} from "../components";
import {Button, Container} from "@mui/material";
import { Paper,Box } from '@mui/material';
import {styled} from "@mui/styles";
import CategoryProducts from "../components/CategoryProducts/CategoryProducts";
import BasicTabs from "./tabs";
import {Typography} from "@mui/material";
import {Pricewrapper, Usersrate} from "./mobile";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import AddIcon from "@mui/icons-material/Add";


const ColorButton = styled(Button)(({theme}) => ({
    width: '104px !important',
    height: '38px !important',
    minWidth: '104px !important',
    backgroundColor: 'rgb(240, 20, 54)',
    borderRadius: ' 12px',
    color: ' rgb(248, 248, 248) !important',
}));

const MainContainer = styled('div')({
    maxWidth:'1280px',
    margin:'auto'
})
const MyContainer = styled('div')({
    maxWidth:'1280px',
    height:'1300px',
    padding: '36px',
    position: 'relative',
    background:' #fff',
    borderRadius: '12px',
});

const Infosection = styled('div')({
    display: 'flex',
    position: 'relative',
    flexFlow: 'row wrap',
    marginBottom: '50px',
});

const Thumbnailwrapper = styled('div')({
    width: '600px',
    height: '408px',
    display: 'flex',
    marginLeft: '16px',
    paddingLeft:' 24px',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between'
})

const InformationWrapper = styled('div')({
    display: 'flex',
    flexGrow: '1',
    paddingLeft: "50px",
    flexDirection: 'column',
});

const Brandwrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '22px',
})
const Categorywrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '22px',

})
const ProductPage = () => {
    return (
        <HeaderFooterProvider>
            <ProductInfo/>
            {/*<ImageMagnifire/>*/}
            <Container maxWidth={"false"} sx={{background:'#f8f8f8'}}>
                <MainContainer>
                    <MyContainer>
                        <Box>
                            <Infosection>
                               <Thumbnailwrapper>

                               </Thumbnailwrapper>
                            </Infosection>
                            <InformationWrapper>
                                <Typography sx={{
                                    fontSize: '1.25rem',
                                    fontWeight: 'bold',
                                    marginBottom: '47px'
                                }}>
                                    شامپو بدن مناسب پوست چرب
                                    بامبو 400 میلی لیتری دیپ سنس
                                </Typography>
                                <Brandwrapper>
                                    <Button>

                                    </Button>
                                </Brandwrapper>
                                <Categorywrapper>
                                        <Typography variant={"h6"} component={"span"}>
                                            دسته بندی
                                        </Typography>
                                </Categorywrapper>
                                <Usersrate sx={{position:'inherit'}}>
                                    <StarOutlineIcon/>
                                    <span>4.0</span>
                                </Usersrate>
                                <Pricewrapper>

                                <span style={{
                                    color: 'rgba(54, 54, 54, 1)',
                                    fontSize: '0.75rem',
                                    marginRight: ' 2px',
                                }}>
                                    ریال
                                </span>
                                    <span style={{
                                        color: 'rgba(54, 54, 54, 1)',
                                        fontSize: '1.25rem',
                                        fontWeight: '400',
                                        marginRight: ' 8px',
                                    }}>۳۵۲٬۰۰۰</span>

                                    <span style={{
                                        color: '#fff',
                                        width: '46px',
                                        fontSize: '0.875rem',
                                        textAlign: 'center',
                                        fontWeight: '500',
                                        lineHeight: '26px',
                                        borderRadius: '8px',
                                        backgroundColor: '#4CB04C',
                                    }}>20%</span>

                                    <span style={{
                                        position: 'absolute',
                                        top: '-19px',
                                        left: '0',
                                        color: 'rgba(175, 175, 175, 1)',
                                        fontSize: '0.75rem',
                                        textDecoration: 'line-through',
                                    }}>۴۴۰٬۰۰۰</span>
                                    {/*<ColorButton>*/}
                                    {/*    <AddIcon ml={20}/>*/}
                                    {/*    خرید*/}
                                    {/*</ColorButton>*/}
                                </Pricewrapper>
                            </InformationWrapper>
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