import React from 'react';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {Box, Typography} from "@mui/material";
import AccordionDetails from "@mui/material/AccordionDetails";
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import styled from '@emotion/styled'
import {InputAdornment, OutlinedInput} from "@material-ui/core";
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
const PriceFilter = () => {
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
        <Box sx={{display: 'flex', justifyContent: 'flex-start', padding: "1rem"}}>
            <div>
                <Accordion square={false} sx={{width: "20rem", boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px", borderRadius: "1rem"}}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}
                                      aria-controls="panel1a-content"
                                      id="panel1a-header">
                        <Typography sx={{
                            borderRight: "4px solid rgba(124, 200, 204, 1)",
                            height: "1rem",
                            top: ".5rem",
                            paddingRight: ".41rem",
                            right: "0",
                            fontWeight: "bolder"
                        }}> فیلتر قیمت</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box sx={{display: 'flex', justifyContent: 'center', mb: '1rem'}}>

                            <StyledSlider
                                valueLabelDisplay={"off"}
                                getAriaLabel={() => 'Minimum distance'}
                                value={value1}
                                onChange={handleChange}
                                getAriaValueText={valuetext}
                            />
                        </Box>

                        <Box
                            component="form"
                            sx={{display: 'flex', justifyContent: 'center', mb: '2rem',outline:'none'}} noValidate autoComplete="off">
                            <OutlinedInput
                                name='search'
                                startAdornment='تا'
                                endAdornment=' ریال'
                                style={{width: '140px', height: '50px', backgroundColor: '#F8F8F8'}}/>
                            <OutlinedInput name='search'
                                           startAdornment='از '
                                           endAdornment=' ریال'
                                           style={{width: '140px', height: '50px', backgroundColor: '#F8F8F8'}}/>
                        </Box>
                        <Box spacing={2} sx={{display: 'flex', justifyContent: 'center', mb: '1rem'}}>
                            <Button sx={{
                                ml: '10px',
                                color: '#f01436',
                                border: 'solid 1px #b9b9b9',
                                borderRadius: '10px',
                                '&hover': {color: 'transparent'}
                            }}><Typography>مقدار پیش فرض</Typography></Button>
                            <Button sx={{
                                backgroundColor: '#f01436',
                                borderRadius: '10px',
                                "&.MuiButtonBase-root:hover": {bgcolor: "#f01436"}
                            }} variant="contained"><Typography>فیلتر قیمت</Typography></Button>
                        </Box>
                    </AccordionDetails>
                </Accordion>
            </div>
        </Box>
    );
};

export default PriceFilter;
