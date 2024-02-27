import React, {useState}from 'react';
import { useNavigate} from 'react-router';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Divider,
  FormHelperText,
  Grid,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton
} from '@mui/material';

//  third party
import * as Yup from 'yup';
import { Formik } from 'formik';


//this project
import { useUserAuth } from "../../context/UserAuthContext";

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Google from 'assets/images/social-google.svg';

// ==============================|| FIREBASE LOGIN ||============================== //

const FirebaseForgetPassowrd = ({ ...rest }) => {
  const theme = useTheme();
  const { resetPassword } = useUserAuth();
  let navigate = useNavigate();
  const [errorMessage,setErrorMessage] = useState('');

  const resetAccountPassword =async (values)=>{

      try {
        //Testing: "elonwan@gmail.com","Hello@2024"
        const verification = await resetPassword('wankarhou18@gmail.com');
        
        console.log("Verification",verification)
        navigate("/");
      } catch (err) {
        console.log('Err',err)
        setErrorMessage("Verification unsuccessfully")
      }
  }

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
        })}
        onSubmit={resetAccountPassword}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit} {...rest}>
            <TextField
              error={Boolean(touched.email && errors.email)}
              fullWidth
              helperText={touched.email && errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              type="email"
              value={values.email}
              variant="outlined"
            />
            {errors.submit && (
              <Box mt={3}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box mt={2}>
              <Button color="primary" disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained">
                Reset Password
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FirebaseForgetPassowrd;
