import React from 'react'
import {useState} from "react";
import { ArrowBackIosNewOutlined } from "@mui/icons-material";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { Link } from "react-router-dom";

export const BackHome = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
        <Button size="small"  
                onClick={handleClickOpen}
                startIcon={<ArrowBackIosNewOutlined/>}
                sx={{margin:"15px", fontWeight:"600"}}>
                    Back to home
                </Button>
                <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are you sure to exit the survey?
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Link to="/">
                    <Button onClick={handleClose}>Yes</Button>
                </Link>
                <Button onClick={handleClose} autoFocus>
                    No
                </Button>
                </DialogActions>
            </Dialog>
    </div>
  )
}
