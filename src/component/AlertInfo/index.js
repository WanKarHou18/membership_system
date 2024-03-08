import {
    Alert,
    Snackbar,
    PropTypes,
  } from '@mui/material';

const AlertInfo = ({setAlert,isAlert}) => {
  
  console.log('isAlert', isAlert);
    return(
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={isAlert.isDisplay}
        autoHideDuration={3000}
        onClose={() => setAlert((prev)=>{
          return {
            ...prev,
            isDisplay: false
          }
        })}
      >
        <Alert severity={isAlert.alertMessage?.severity}>
          {isAlert.alertMessage?.message}
        </Alert>
      </Snackbar>
    )
  };

// AlertInfo.propTypes = {
//     setAlert: PropTypes.func,
//     isAlert: PropTypes.object,
//   };

export default AlertInfo;