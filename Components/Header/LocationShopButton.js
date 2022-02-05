import React from 'react';
import {Button} from "@mui/material";

const LocationShopButton = () => {
    return (
        <div>
            <Button sx={{
                mx: 3,
                border: "1px solid rgba(0, 0, 0, 0.23)",
                color: 'darkGray.main',
                borderRadius: '10px',
                fontSize: "0.8rem",
                px:2,
                py:{xs:0.5,md:1},
                fontWeight: 700,
                "&:hover": {
                    backgroundColor: 'lightGray.light'
                },
            }}>تغییر فروشگاه</Button>
        </div>
    );
};

export default LocationShopButton;