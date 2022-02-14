import * as React from 'react';
import {Box, Typography} from "@mui/material";
import CategoryBreadcrumbs from "../CategoryBreadcrumbs/CategoryBreadcrumbs";


export default function SearchResultMobile() {
    return (
            <Box sx={{display: {lg: 'none', md: 'none', xs: 'block',sm:"block"}, height: "5rem" , overflowY: "hidden" , background: "white"}}>
                <Typography sx={{padding:".5rem 1rem 0 0"}}>نتایج جستجو</Typography>
                <CategoryBreadcrumbs />
        </Box>
    );
}
