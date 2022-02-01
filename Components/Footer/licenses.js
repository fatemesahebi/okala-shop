import React, { Component } from 'react';
import { License } from './license';
import { Box } from '@mui/system';
import { styled } from '@mui/system';

const imgOflicenses = [
    {id:1, source:"https://new.okala.com/_next/image?url=%2Fstatic%2Fimages%2FsiteImages%2Fbackgrounds%2FsamandehiLogo.png&w=96&q=75",},
    {id:2, source:"https://new.okala.com/_next/image?url=%2Fstatic%2Fimages%2FsiteImages%2Fbackgrounds%2FenamadLogo.png&w=96&q=75",},
    {id:3, source:"https://new.okala.com/_next/image?url=%2Fstatic%2Fimages%2FsiteImages%2Fbackgrounds%2FecunionLogo.png&w=96&q=75",},
    {id:4, source:"https://new.okala.com/_next/image?url=%2Fstatic%2Fimages%2FsiteImages%2Fbackgrounds%2FsenfiLogo.png&w=128&q=75",},
    {id:5, source:"https://new.okala.com/_next/image?url=%2Fstatic%2Fimages%2FsiteImages%2Fbackgrounds%2FpopularBrandLogo.png&w=96&q=75",},
    {id:6, source:"https://new.okala.com/_next/image?url=%2Fstatic%2Fimages%2FsiteImages%2Fbackgrounds%2Fwf97Logo.png&w=96&q=75" ,},
    {id:7, source:"https://new.okala.com/_next/image?url=%2Fstatic%2Fimages%2FsiteImages%2Fbackgrounds%2Fwf97Logo.png&w=96&q=75",}
]
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
export function LicenseList() {
    return (
        <Box
            sx={{
                display: 'grid',
                columnGap: 3,
                rowGap: 1,
                gridTemplateColumns: 'repeat(3, 1fr)',
            }}>

            {imgOflicenses.map(item => <License image={item.source} key={item.id}></License>)}
            <MyComponent></MyComponent>
            <MyComponent></MyComponent>


        </Box>
    )
}