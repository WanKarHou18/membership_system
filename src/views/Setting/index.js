import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Event as EventIcon} from '@mui/icons-material';
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
  IconButton,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

//  third party
import * as Yup from 'yup';
import { Formik,Field,useField, useFormikContext} from 'formik';
import '../../../node_modules/react-datepicker/dist/react-datepicker.css'
import { getAuth, updateProfile } from "firebase/auth";

// project import
import Breadcrumb from 'component/Breadcrumb';
import { useUserAuth } from "../../context/UserAuthContext";


// ==============================|| SETTING WITH FIREBASE ||============================== //

/*Refer:https://formik.org/docs/api/useFormikContext */
const AutoSetField = () => {
  const { user } = useUserAuth();
  const { values, submitForm,setFieldValue } = useFormikContext();
  useEffect(() => {
   setFieldValue('username',user.displayName)
  }, [user]);
  return null;
};

const SettingPage = ({ isEdit,...rest }) => {
  const theme = useTheme();
  const { user } = useUserAuth();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmitSaveSetting= async(values)=>{
    console.log('values',values.username)
    updateProfile(auth.currentUser, {
      displayName: values.username
    }).then(() => {
      console.log('updateProfileSuccess', auth.currentUser)
    }).catch((error) => {
      // An error occurred
      // ...
    });
    
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const BreadcrumbSection =()=>{
    return(
      <Breadcrumb title="Setting">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Setting
        </Typography>
    </Breadcrumb>
    )
  }

  return (
    <>
      <BreadcrumbSection/>
      <Formik
        initialValues={{
          username:'',
          password:'',
          email:'', //Not changeable
        }}
        onSubmit={handleSubmitSaveSetting}
        // validationSchema={Yup.object().shape(validationSchema)}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit} {...rest}>
            <AutoSetField/>
            <TextField
              error={Boolean(touched.username && errors.username)}
              fullWidth
              helperText={touched.username && errors.username}
              label="Username"
              margin="normal"
              name="username"
              onBlur={handleBlur}
              onChange={
                handleChange
              }
              type="username"
              value={values.username}
              variant="outlined"

            />
            <FormControl fullWidth sx={{ mt: theme.spacing(3), mb: theme.spacing(1) }}>
                <TextField
                fullWidth
                disabled={true}
                label="Email"
                margin="normal"
                name="email"
                type="email"
                value={user.email}
                variant="outlined"
                />
            </FormControl>
            <FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ mt: theme.spacing(3), mb: theme.spacing(1) }}>
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                label="Password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="large"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {touched.password && errors.password && (
                <FormHelperText error id="standard-weight-helper-text">
                  {' '}
                  {errors.password}{' '}
                </FormHelperText>
              )}
            </FormControl>
            {errors.submit && (
              <Box mt={3}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box mt={2}>
              <Button color="primary" disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained">
                Save
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default SettingPage;
