import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import FilterSelection from "./FilterSelection";
import {Typography} from "@mui/material";
import arrow from "./arrow.svg";
import Image from "next/image";

const FilterMobileDrawer = () => {
    const [state, setState] = React.useState({bottom: false});

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };
    return (
        <React.Fragment key={'bottom'}>
            <Button onClick={toggleDrawer('bottom', true)}><Typography
                style={{color: 'black', display: "flex", alignItems: 'center', alignContent: 'center'}}><Image
                width={15} src={arrow}/>پرفروشترین</Typography></Button>
            <Drawer
                anchor={'bottom'}
                open={state['bottom']}
                onClose={toggleDrawer('bottom', false)}
            >
                <List>
                    <FilterSelection/>
                </List>
            </Drawer>
        </React.Fragment>
    );
};

export default FilterMobileDrawer;
