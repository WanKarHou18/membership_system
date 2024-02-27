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
  Popover,
  Select,
  MenuItem
} from '@mui/material';

//  third party
import * as Yup from 'yup';
import { Formik,Field,useField, useFormikContext} from 'formik';
import '../../../node_modules/react-datepicker/dist/react-datepicker.css'
import { Add } from '@mui/icons-material';

//third party - Date Picker
import dayjs, { Dayjs } from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Google from 'assets/images/social-google.svg';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { validationSchema } from './validation';
import { useUserAuth } from "../../context/UserAuthContext";
import { CustomerMembership,addCustomerMembership } from 'api/customerMembership';
import { useNavigate } from 'react-router-dom';
// ==============================|| FIREBASE LOGIN ||============================== //

const NewMembershipForm = ({ isEdit,...rest }) => {
  const theme = useTheme();
  const { user } = useUserAuth();
  const navigate = useNavigate();
  const statuses = ['Active','Close']
  const [startDate,setStartDate]=useState(new Date());
  const [endDate,setEndDate]=useState(new Date());
  const customerMembership = new CustomerMembership();

  const generateAndSetupMembershipCode=()=>{
    return 'Hello'
  }
  const code = generateAndSetupMembershipCode();

  const handleSubmitMemberShipForm= async(values)=>{
    customerMembership.uuid=user.email;
    customerMembership.customerName=values.customerName;
    customerMembership.membershipId="123";
    customerMembership.pointToReach=values.pointsToReach;
    customerMembership.currentPoint=values.currentPoint;
    customerMembership.expiryDate=endDate;
    customerMembership.startDate=startDate;
    customerMembership.duration='';
    customerMembership.membershipCode='12345';
    customerMembership.status=values.newMemberStatus;
    console.log('HAHA',customerMembership)
    addCustomerMembership(customerMembership);
    navigate('/customer')
  }
/*Refer:https://formik.org/docs/api/useFormikContext */
const AutoSetField = () => {
  const { user } = useUserAuth();
  const { setFieldValue } = useFormikContext();
  useEffect(() => {
   setFieldValue('newMemberStatus',statuses[0])
  }, [user]);
  return null;
};

  const BreadcrumbSection =()=>{
    return(
      <Breadcrumb title="Membership Form">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography component={Link} to="/customer" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Sample Page
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          MembershipForm
        </Typography>
    </Breadcrumb>
    )
  }

  return (
    <>
      <BreadcrumbSection/>
      <Formik
        initialValues={{
          customerName:'',
          membershipCode:'',
          startDate:'',
          endDate:'',
          pointsToReach:'',
          currentPoint:'',
          newMemberStatus:'',
          submit: null
        }}
        onSubmit={handleSubmitMemberShipForm}
        validationSchema={Yup.object().shape(validationSchema)}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit} {...rest}>
            <TextField
              error={Boolean(touched.customerName && errors.customerName)}
              fullWidth
              helperText={touched.customerName && errors.customerName}
              label="Customer Name"
              margin="normal"
              name="customerName"
              onBlur={handleBlur}
              onChange={handleChange}
              type="customerName"
              value={values.customerName}
              variant="outlined"
            />
            <DatePicker
              label="Loyalty Card Start Date"
              name="startDate"
              defaultValue={dayjs(new Date())}
              views={['year', 'month', 'day']}
              slotProps={{
                openPickerIcon: { fontSize: 'large' },
                openPickerButton: { color: 'secondary' },
                textField: {
                  variant: 'filled',
                  fullWidth: true,
                  focused: true,
                  color: 'secondary',
                },
              }}
              onChange={(value)=>setStartDate(dayjs(value, 'DD/MM/YYYY'))}
            />
            <FormControl fullWidth sx={{ mt: theme.spacing(3), mb: theme.spacing(1) }}>
                <TextField
                fullWidth
                disabled={true}
                label="Membership Code (auto generated)"
                margin="normal"
                name="membershipCode"
                type="membershipCode"
                value={code}
                variant="outlined"
                />
            </FormControl>
            <DatePicker
              name='endDate'
              label="Loyalty Card End Date"
              defaultValue={dayjs(new Date())}
              views={['year', 'month', 'day']}
              // onChange={(val) => setFieldValue('endDate', val)}
              slotProps={{
                openPickerIcon: { fontSize: 'large' },
                openPickerButton: { color: 'secondary' },
                textField: {
                  variant: 'filled',
                  fullWidth: true,
                  focused: true,
                  color: 'secondary',
                },
              }}
              onChange={(value)=>setEndDate(dayjs(value, 'DD/MM/YYYY'))}
            />
            <TextField
              error={Boolean(touched.pointsToReach && errors.pointsToReach)}
              fullWidth
              helperText={touched.pointsToReach && errors.pointsToReach}
              label="Points To Reach"
              margin="normal"
              name="pointsToReach"
              onBlur={handleBlur}
              onChange={handleChange}
              type="pointsToReach"
              value={values.pointsToReach}
              variant="outlined"
              placeholder="example: 30"
            />
            <TextField
              error={Boolean(touched.currentPoint && errors.currentPoint)}
              fullWidth
              helperText={touched.currentPoint && errors.currentPoint}
              label="Current Point"
              margin="normal"
              name="currentPoint"
              onBlur={handleBlur}
              onChange={handleChange}
              type="currentPoint"
              value={values.currentPoint}
              variant="outlined"
              placeholder="example: 10"
            />
            <AutoSetField/>
            <FormControl fullWidth>
              <InputLabel id="status-select-label">Status</InputLabel>
              <Select
                labelId="status-select-label"
                id="new-member-select-status"
                value={values.newMemberStatus}
                label="Status"
                name="newMemberStatus"
                onChange={handleChange}
              >
                {
                  statuses.map((status)=>{
                    return(
                      <MenuItem key={status} value={status}>{status}</MenuItem>
                    )
                  })
                }
              </Select>
            </FormControl>
            {errors.submit && (
              <Box mt={3}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box mt={2}>
              <Button color="primary" disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained">
                Add
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default NewMembershipForm;
