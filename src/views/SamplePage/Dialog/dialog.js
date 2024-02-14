import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Download } from '@mui/icons-material';
import {Typography,IconButton,Grid} from '@mui/material';

//Todo : Customize this part.
/**
 * 

 * @param {*} showDialog
 * @param {*} isShowDialog
 * @param {*} content
 * @returns 
 */
const CustomDialog = ({showDialog,isShowDialog,content}) => {

  const dialogStyle = {
    // Add your custom styles here
    minWidth: '30rem',
    minHeight: '30rem',

  };

  const dialogContentStyle={
    display: 'flex',
    justifyContent: 'center',
    padding: '10px'
  }

  const handleClose = () => {
    showDialog(false);
  };
  return (
    <div>
      <Dialog open={isShowDialog} onClose={handleClose} style={dialogStyle} >
        <DialogTitle style={{ backgroundColor: '#2196F3', color: '#ffffff'}}>
          <Grid container spacing={1} justifyContent="space-between">
            <Typography style={{display:'flex',justifyContent:'center'}}>
              Dialog Title
            </Typography>
            <IconButton >
              <Download/>
            </IconButton>
          </Grid>
        </DialogTitle>
        <DialogContent style={dialogContentStyle}>
          <DialogContentText>
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>s
      </Dialog>
    </div>
  );
};

export default CustomDialog;