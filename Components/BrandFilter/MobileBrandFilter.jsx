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
import FormSection from "./FormSection";
import MobileDialogFormSection from "./MobileDialogFormSection";
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const MobileBrandFilter=({brandsOfCategory,setFilterBrand,filterBrand})=>{
const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

    };
    const handleDeletFilter=()=>{
        setFilterBrand([])
        setOpen(false);


    }
    return (
        <div>
            <Button variant="outlined" sx={{border:'none',"&.MuiButtonBase-root:hover": {border: "none",backgroundColor:'transparent'}}} onClick={handleClickOpen}>
               <Typography style={{color:"#2e2d2d"}}>برندها</Typography>
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar color={'white'} elevation={0} sx={{ position: 'relative' }}>
                    <Toolbar >
                        <IconButton
                            edge="start"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <ArrowForwardIcon/>
                        </IconButton>
                        <Typography  sx={{ ml: 2, flex: 1 ,color:'red'}}  component="div">
                            برندها
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleDeletFilter}>
                            حذف  فیلتر
                        </Button>
                    </Toolbar>
                </AppBar>
                <List>
                    <ListItem>
                        <MobileDialogFormSection filterBrand={filterBrand} setFilterBrand={setFilterBrand} brandsOfCategory={brandsOfCategory}/>
                    </ListItem>

                    <ListItem button  sx={{display:'flex',justifyContent:'flex-end',position:'fixed',bottom:'0',backgroundColor:'white'}}>
                        <Button sx={{
                            width: '100vw',
                            backgroundColor: '#f01436',
                            "&.MuiButtonBase-root:hover": {bgcolor: "#f01436"}
                        }} variant="contained"><Typography>ثبت فیلتر</Typography></Button>
                    </ListItem>
                </List>
            </Dialog>
        </div>
    );
};

export default MobileBrandFilter;
