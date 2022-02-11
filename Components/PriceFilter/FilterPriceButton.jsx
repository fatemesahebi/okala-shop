import React from 'react';
import {Typography} from "@mui/material";
import Button from "@mui/material/Button";

const FilterPriceButton = () => {
    return (
        <Button sx={{
            backgroundColor: '#f01436',
            borderRadius: '10px',
            "&.MuiButtonBase-root:hover": {bgcolor: "#f01436"}
        }} variant="contained"><Typography>فیلتر قیمت</Typography></Button>
    );
};

export default FilterPriceButton;
