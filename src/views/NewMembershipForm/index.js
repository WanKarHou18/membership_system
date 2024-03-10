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
  MenuItem,
  Alert,
  Snackbar,
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
import { CustomerMembership,addCustomerMembership, getCustomerMembershipByUUID} from 'api/customerMembership';
import { useNavigate } from 'react-router-dom';
import { generateUniqueMembershipCode, verifyIsNotOverLimit} from 'helper/membershipHelper';
import AlertInfo from 'component/AlertInfo';
import { alertMessages } from 'constants/alertMessages.constants';
import { MEMBERSHIP_CODE_LENGTH} from 'constants/memberships.constants';

// ==============================|| FIREBASE LOGIN ||============================== //

const NEW_MEMBERSHIPS = 'NEW_MEMBERSHIPS';

const alertMessage = alertMessages[NEW_MEMBERSHIPS]

const initialAlertMessageValues = {
  alertMessage: '',
  isDisplay: false,
}

const isStartDateValid = (startDate, endDate) => {
  return dayjs(startDate).isBefore(dayjs(endDate)) ;
};

const BreadcrumbSection =()=>{
  return(
    <Breadcrumb title="Loyalty Card">
      <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
        Home
      </Typography>
      <Typography component={Link} to="/customer" variant="subtitle2" color="inherit" className="link-breadcrumb">
        Customer
      </Typography>
      <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
        LoyaltyCard
      </Typography>
  </Breadcrumb>
  )
}

const NewMembershipForm = (props) => {
  const {isEdit, ...rest} = props;
  const theme = useTheme();
  const { user } = useUserAuth();
  const navigate = useNavigate();

  const statuses = ['Active','Non-Active']
  
  const [memberships,setMemberships]=useState(null);
  const [startDate,setStartDate]=useState(new Date());
  const [endDate,setEndDate]=useState(new Date());
  const customerMembership = new CustomerMembership();
  const [isAlert, setAlert] = useState(initialAlertMessageValues);

  const getMemberships = async () => {
    try {
        await getCustomerMembershipByUUID(user.email).then((result)=>{
          setMemberships(result)
        });
    } catch (error) {
        setMemberships(null);
    }
  };

  useEffect(()=>{
    if(user){
      getMemberships()
    }
  },[])

  useEffect(() => {
    if (isAlert.isDisplay) {
      const timer = setTimeout(() => { 
        setAlert((prev) => {
          return {
            ...prev,
            isDisplay:false,
          }
        });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isAlert]);

  const code = generateUniqueMembershipCode(MEMBERSHIP_CODE_LENGTH);

  const handleSubmitMemberShipForm= async(values)=>{
    try {
      if(isStartDateValid(startDate, endDate)){
        customerMembership.uuid = user.email;
        customerMembership.customerName = values.customerName;
        customerMembership.pointToReach = values.pointsToReach;
        customerMembership.currentPoint = values.currentPoint;
        customerMembership.expiryDate = dayjs(endDate).format('YYYY-MM-DD');
        customerMembership.startDate =dayjs(startDate).format('YYYY-MM-DD') ;
        customerMembership.duration = '';
        customerMembership.membershipCode = code;
        customerMembership.reward = values.reward;
        customerMembership.status = values.newMemberStatus;
        setAlert({
          alertMessage: alertMessage['SUCCESS'],
          isDisplay: true,
        })
        addCustomerMembership(customerMembership);
        navigate('/customer')
      }else{
        setAlert({
          alertMessage: alertMessage['STARTDATE_NOT_VALID'],
          isDisplay: true,
        })
      }
    } catch (error) {
      setAlert({
        alertMessage: alertMessage['FAILURE'],
        isDisplay: true,
      })
    }
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
          reward: '',
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
              onChange={(value)=>setStartDate(value)}
            />
            <FormControl fullWidth sx={{ mt: theme.spacing(3), mb: theme.spacing(1) }}>
                <TextField
                fullWidth
                disabled={true}
                label="Loyalty Code (auto generated)"
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
              onChange={(value) => setEndDate(value)}
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
            <TextField
              error={Boolean(touched.reward && errors.reward)}
              fullWidth
              helperText={touched.reward && errors.reward}
              label="Reward"
              margin="normal"
              name="reward"
              onBlur={handleBlur}
              onChange={handleChange}
              type="reward"
              value={values.reward}
              variant="outlined"
              placeholder="example: Free 1 Hamburger"
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
              <Button color="primary" disabled={isSubmitting || !(verifyIsNotOverLimit(memberships))} fullWidth size="large" type="submit" variant="contained">
                Add
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      { isAlert.isDisplay && <AlertInfo setAlert={setAlert} isAlert={isAlert}/> }
    </>
  );
};

export default NewMembershipForm;
