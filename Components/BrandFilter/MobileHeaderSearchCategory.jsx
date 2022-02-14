import * as React from 'react';
import {Button, ListItem, List, Divider, AppBar, Toolbar, IconButton, Typography, Dialog} from '@mui/material';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Slide from '@mui/material/Slide';
import OnlyAvailableProducts from "../CommodityFilters/OnlyAvailableProducts";
import Image from "next/image";
import nextIcon from './nextIcon.svg'
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import {Box} from "@material-ui/core";
import Input from '@mui/material/Input';
import magnifier from "./magnifier.svg";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const MobileHeaderSearchCategory = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleDeleteFilter = () => {
        setOpen(false)

    }

    return (
        <div>
            <AppBar elevation={0} position="static" sx={{backgroundColor: 'transparent'}}>
                <Toolbar sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    alignContent: 'center'
                }}>

                    <Button onClick={handleClickOpen} variant="outlined"
                            sx={{
                                border: 'none',
                                display: 'flex',
                                "&.MuiButtonBase-root:hover": {border: "none", backgroundColor: 'transparent'}
                            }}>
                        <Image src={magnifier}/>
                    </Button>
                </Toolbar>
            </AppBar>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar elevation={2} color={'white'}
                        sx={{position: 'relative', height: '4rem', alignContent: 'baseline', padding: '0'}}>
                    <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
                        <Box>
                            <IconButton color={'black'} edge="start" onClick={handleClose} aria-label="close">
                                <ArrowForwardIcon/>
                            </IconButton>
                            <Input disableUnderline={true} sx={{marginRight:'2rem',fontSize:'0.875rem',outline:'none',color:'#d8d8d8'}} style={{fontFamily:"iranSans"}} placeholder="جستجو در فروشگاه اکالا"/>
                        </Box>


                            <Typography sx={{fontWeight: 'bold'}} onClick={handleClose}>
                                <CloseIcon/>
                            </Typography>

                    </Toolbar>
                </AppBar>

            </Dialog>
        </div>
    )
        ;
};

export default MobileHeaderSearchCategory;
