import React, { Component } from 'react';
import { Box} from '@mui/material';

export default function Row({ children, ...restProps }) {
    return <Box sx={{maxWidth:'1280px',margin:'auto'}}  {...restProps}>{children}</Box>;
}


