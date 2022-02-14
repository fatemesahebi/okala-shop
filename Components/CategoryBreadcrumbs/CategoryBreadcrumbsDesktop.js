import * as React from 'react';
import {Box, Typography} from "@mui/material";
import CategoryBreadcrumbs from "../CategoryBreadcrumbs/CategoryBreadcrumbs";


export default function CategoryBreadcrumbsDesktop() {
    return (
        <Box sx={{display: {lg: 'block', md: 'block', xs: 'none',sm:"none"}, overflowY: "hidden" , background: "white",}}>
            <CategoryBreadcrumbs />
        </Box>
    );
}
