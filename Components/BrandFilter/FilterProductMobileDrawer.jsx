import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import FilterSelection from "./FilterSelection";
import {Typography} from "@mui/material";

const FilterProductMobileDrawer = () => {
    const [state, setState] = React.useState({bottom: false});

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };
    return (
        <React.Fragment key={'filter'}>
            <Button onClick={toggleDrawer('filter', true)}><Typography>فیلترها</Typography></Button>
            <Drawer
                anchor={'filter'}
                open={state['filter']}
                onClose={toggleDrawer('filter', false)}
            >
                <List>
                    <FilterSelection/>
                </List>
            </Drawer>
        </React.Fragment>
    );
};

export default FilterProductMobileDrawer;
