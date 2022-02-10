import React, { useState } from 'react';
import { boxSizing, styled } from '@mui/system';
import { Data } from './DesktopFeaturesData';

const Container = styled('div')({
    width: '100%',
});
const ProductFeaturesList = () => {
    return (
        <Container>
            {Data.map((item, index) => {
                return (
                    <>
                        <p>{item.detail}</p>
                    </>
                );
            })}
        </Container>
    );
};
export default ProductFeaturesList;