import React, { useState } from 'react';
import { boxSizing, styled } from '@mui/system';
import { Data } from './DesktopFeaturesData';

const Container = styled('div')({
    width: '100%',
});

const StyledList = styled('ul')({
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    boxSizing:'Border-box',
});

const Customli = styled('li')({
    flexGrow: '0',
    flexShrink: '0',
    flexBasis: '33%',
    padding: '0 1px',
    maxWidth: '33%',
    marginBottom: '4px',
    boxSizing: 'inherit'

})

const ProductFeaturesList = () => {
    return (
        <Container>
            <StyledList>
                {Data.map((item, index) => {
                    return (
                        <Customli sx={{
                            margin: "1px",
                            backgroundColor: (Math.floor(index / 3) % 2 === 0) ? "rgba(248, 248, 248, 1)" : "rgba(240, 240, 240, 1)"
                        }}>
                            {item.detail}
                        </Customli>
                    );
                })}
            </StyledList>
        </Container>
    );
};
export default ProductFeaturesList;