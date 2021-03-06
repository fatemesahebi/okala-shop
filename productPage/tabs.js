import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProductFeaturesList from "./ProducFeaturesList";
import CommentsSection from "./CommentsSection";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 2 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
    };
}

export default function BasicTabs({description}) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs  value={value}
                       onChange={handleChange}
                       TabIndicatorProps={{
                           style: {
                               backgroundColor: "#f01436",

                           }
                       }}
                > >
                    <Tab sx={{
                        fontSize: "1.1rem",
                        color: value===0?"#f01436 !important":"black",
                        fontWeight: "bold",}}
                         label="ویژگی محصول" {...a11yProps(0)} />
                    <Tab sx={{
                        fontSize: "1.1rem",
                        color: value===1?"#f01436 !important":"black",
                        fontWeight: "bold",}}
                         label="توضیحات محصول" {...a11yProps(1)} />
                    <Tab sx={{
                        fontSize: "1.1rem",
                        color: value===2?"#f01436 !important":"black",
                        fontWeight: "bold"}}
                            label="نظرات کاربران" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel sx={{color: value===value?"#f01436 !important":"black"}}
                      value={value} index={0}>
                <Box>
                    <ProductFeaturesList/>
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Box>
                    <p style={{color:' rgba(54, 54, 54, 1)',
                        fontSize: '.875rem',
                        fontWeight: '500',
                        lineHeight:' 22px',
                    }}>{description}
                    </p>
                </Box>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <CommentsSection/>
            </TabPanel>
        </Box>
    );
}
