import React from 'react';
import ProductInfo from "./ProductInfo";
import ImageMagnifire from "./imageMagnifire";
import {HeaderFooterProvider} from "../components";
import {Container} from "@mui/material";
import { Paper,Box } from '@mui/material';
import {styled} from "@mui/styles";
import CategoryProducts from "../components/CategoryProducts/CategoryProducts";
import BasicTabs from "./tabs";


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
    flexDirection: 'colum',
});

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
                            <InformationWraper>
                                <Typography>
                                    شامپو بدن مناسب پوست چرب
                                    بامبو 400 میلی لیتری دیپ سنس


                                </Typography>
                            </InformationWraper>
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