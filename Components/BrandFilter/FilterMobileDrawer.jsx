import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import FilterSelection from "./FilterSelection";
import {Typography} from "@mui/material";
import {useState} from "react";

const FilterMobileDrawer = ({sort,setSort}) => {
    const [state, setState] = React.useState({bottom: false});
    const [sortLable,setSortLable]=useState("پرفروشترین")

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };
    return (
        <React.Fragment key={'bottom'}>
            <Button  onClick={toggleDrawer('bottom', true)}><Typography style={{color:'black',fontSize:'14px',fontWeight:'bold'}}>{sortLable}</Typography></Button>
            <Drawer
                anchor={'bottom'}
                open={state['bottom']}
                onClose={toggleDrawer('bottom', false)}
            >
                <List>
                    <FilterSelection sort={sort} setSort={setSort} setSortLable={setSortLable}/>
                </List>
            </Drawer>
        </React.Fragment>
    );
};

export default FilterMobileDrawer;
