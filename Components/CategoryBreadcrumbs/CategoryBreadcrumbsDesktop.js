import * as React from 'react';
import {Box, Typography} from "@mui/material";
import CategoryBreadcrumbs from "../CategoryBreadcrumbs/CategoryBreadcrumbs";


export default function CategoryBreadcrumbsDesktop({categoryName,dataCategory}) {
    return (
        <Box sx={{display: {lg: 'block', md: 'block', xs: 'none',sm:"none"}, overflowY: "hidden" ,}}>
            <CategoryBreadcrumbs categoryName={categoryName} dataCategory={dataCategory} />
        </Box>
    );
}
