import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Download } from '@mui/icons-material';
import {Typography,IconButton,Grid} from '@mui/material';
import html2canvas from 'html2canvas';
const downloadCardAsImage = () => {
  const cardElement = document.getElementById('myCard'); // Replace 'myCard' with the actual ID or class of your card component

  if (cardElement) {
    html2canvas(cardElement).then(canvas => {
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'my_card.png'; // Set the desired filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
};

//Todo : Customize this part.
/**
 * 

 * @param {*} showDialog
 * @param {*} isShowDialog
 * @param {*} content
 * @returns 
 */
const CustomDialog = ({ showDialog, isShowDialog, contentList, dialogTitle }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = contentList.length ;

  const dialogStyle = {
    // Add your custom styles here
    // width: '30rem',
    // minHeight: '30rem',
  };

  const dialogContentStyle = {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handleClose = () => {
    showDialog({
      isOpen: false,
      selectedData: '',
    });
  };

  return (
    <div>
      <Dialog open={isShowDialog} onClose={handleClose} style={dialogStyle}>
        <DialogTitle style={{ backgroundColor: '#2196F3', color: '#ffffff' }}>
          <Grid container spacing={1} justifyContent="space-between">
            <Typography style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {dialogTitle}
            </Typography>
              <Download onClick={downloadCardAsImage} />
          </Grid>
        </DialogTitle>
        <DialogContent style={dialogContentStyle}>
          <DialogContentText>{contentList[currentPage-1]}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePrevPage} color="primary" disabled={currentPage === 1}>
            Prev
          </Button>
          <Typography>{`${currentPage} of ${totalPages}`}</Typography>
          <Button onClick={handleNextPage} color="primary" disabled={currentPage === totalPages}>
            Next
          </Button>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CustomDialog;