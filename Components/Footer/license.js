import React, { Component } from 'react';
import { styled } from '@mui/system';

const MyComponent = styled('div')({
    border: '1px solid #e6e6e6',
    borderRadius: '.75rem',
    alignContent: 'center',
    justifyContent: 'center',
    display:'flex',
    height: '72px',
    width: ' 100%',
    boxSizing:'border-box'
});

export function License({ image }) {
    return (
        <MyComponent>
            <img style={{objectFit:'scale-down'}} src={image} alt="" />
        </MyComponent>
    )
}