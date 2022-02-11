import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Slide from '@mui/material/Slide';
import CategorizeResults from "../CategorizeResults/CategorizeResults";
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const MobileCategory=()=>{
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Button variant="outlined" sx={{border:'none'}} onClick={handleClickOpen}>
                <Typography>دسته بندی </Typography>
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
                        <Typography sx={{ ml: 2, flex: 1 }}  component="div">
                            دسته بندی
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            حذف  فیلتر
                        </Button>
                    </Toolbar>
                </AppBar>
                <List>
                    <CategorizeResults/>
                </List>
            </Dialog>
        </div>
    );
};

export default MobileCategory;
