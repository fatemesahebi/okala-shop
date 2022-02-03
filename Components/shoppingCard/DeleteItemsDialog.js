import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import FullCard from "./FullCard";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <FullCard direction="up" ref={ref} {...props} />;
});
const DeleteItemsDialog = ({openDialog,setOpenDialog,handleClickOpenDialog}) => {
    const handleCloseDialog = () => {
        setOpenDialog(false);
    };


    return (
        <div>
            <Dialog
                open={openDialog}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleCloseDialog}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Disagree</Button>
                    <Button onClick={handleCloseDialog()}>Agree</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default DeleteItemsDialog;