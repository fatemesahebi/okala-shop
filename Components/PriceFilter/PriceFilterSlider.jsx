import React from 'react';
import {Box} from "@mui/material";
import styled from "@emotion/styled";
import Slider from "@mui/material/Slider";
const StyledSlider = styled(Slider)({
    color: '#f01436',
    width:'250px',
    height:'6px',
    touchAction: 'none',
    display: 'flex',
    "& .MuiSlider-thumb": {backgroundColor: '#f01436', ":hover": {boxShadow: 'none'}, boxShadow: 'none', padding: '0'},
    "& .MuiSlider-track": {backgroundColor: '#f01436',borderRadius:'0',boxShadow: 'none'},
    // "& .MuiSlider-rail":{backgroundColor:'black'},


})

function valuetext(value) {
    return `${value}°C`;
}

const minDistance = 10;
const PriceFilterSlider = ({maxPrice,priceFilter,setPriceFilter,value,setValue}) => {
    const handleChange = async (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
           await setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        } else {
           await setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        }
        setPriceFilter([(value[0]/100)*maxPrice,(value[1]/100)*maxPrice])
    };
    return (
        <Box sx={{display: 'flex', justifyContent: 'center', mb: '1rem'}}>
            <StyledSlider
                valueLabelDisplay={"off"}
                getAriaLabel={() => 'Minimum distance'}
                value={value}
                onChange={handleChange}
                getAriaValueText={valuetext}
            />
        </Box>
    );
};

export default PriceFilterSlider;
