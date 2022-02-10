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
const PriceFilterSlider = () => {
    const [value1, setValue1] = React.useState([20, 37]);
    const handleChange = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        } else {
            setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
    };
    return (
        <Box sx={{display: 'flex', justifyContent: 'center', mb: '1rem'}}>
            <StyledSlider
                valueLabelDisplay={"off"}
                getAriaLabel={() => 'Minimum distance'}
                value={value1}
                onChange={handleChange}
                getAriaValueText={valuetext}
            />
        </Box>
    );
};

export default PriceFilterSlider;
