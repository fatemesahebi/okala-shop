import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Slide from '@mui/material/Slide';
import MobileBrandFilter from "./MobileBrandFilter";
import MobileCategory from "./MobileCategory";
import PriceFilterSlider from "../PriceFilter/PriceFilterSlider";
import {Box} from "@material-ui/core";
import {Stack} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const MobileDialog = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Button variant="outlined" sx={{border: 'none'}} onClick={handleClickOpen}>
                <Typography>فیلترها</Typography>
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar color={'white'} elevation={0} sx={{position: 'relative'}}>
                    <Toolbar >
                        <IconButton
                            edge="start"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <ArrowForwardIcon/>
                        </IconButton>
                        <Typography sx={{ml: 2, flex: 1,color:'black'}} component="div">
                            فیلترها
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            حذف همه فیلترها
                        </Button>
                    </Toolbar>
                </AppBar>
                <List>
                    <ListItem button>
                        <Typography><MobileCategory/></Typography>
                    </ListItem>
                    <Divider/>
                    <ListItem button>
                        <Typography><MobileBrandFilter/></Typography>
                    </ListItem>
                    <Divider/>
                    <ListItem button>
                        <div>
                            <div>
                                <div style={{display:'flex',justifyContent:'space-between'}}>
                                    <Typography>محدوده قیمت</Typography>
                                    <Typography>مقدار پیشفرض</Typography>
                                </div>
                                <div style={{display:'flex',justifyContent:'center',width:'100%'}}>
                                    <PriceFilterSlider/>
                                </div>

                            </div>
                        </div>


                    </ListItem>
                    <Divider/>
                    <ListItem button>
                        <Typography>فقط کالاهای موجود</Typography>
                    </ListItem>
                    <Divider/>
                    <ListItem button>
                        <Typography>فقط کالاهای پیشنهاد روز</Typography>
                    </ListItem>
                    <Divider/>
                    <ListItem button>
                        <Button sx={{
                            mt:'2rem',
                            width:'55rem',
                            backgroundColor: '#f01436',
                            "&.MuiButtonBase-root:hover": {bgcolor: "#f01436"}
                        }} variant="contained"><Typography>اعمال فیلتر</Typography></Button>
                    </ListItem>
                </List>
            </Dialog>
        </div>
    );
};

export default MobileDialog;
