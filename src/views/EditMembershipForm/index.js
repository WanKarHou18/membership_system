import React,{useState,useEffect} from 'react';
import { Link,useLocation,useNavigate} from 'react-router-dom';

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
  MenuItem,
  Select
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
import { useUserAuth } from "../../context/UserAuthContext";
import { validationSchema } from './validation';
import { CustomerMembership,updateCustomerMembership } from 'api/customerMembership';
import AlertInfo from 'component/AlertInfo';
import { alertMessages } from 'constants/alertMessages.constants';

// ==============================|| FIREBASE LOGIN ||============================== //

const EDIT_MEMBERSHIPS = 'EDIT_MEMBERSHIPS';
const alertMessage = alertMessages[EDIT_MEMBERSHIPS]

const initialAlertMessageValues = {
  alertMessage: '',
  isDisplay: false,
}

const isStartDateValid = (startDate, endDate) => {
  return dayjs(startDate).isBefore(dayjs(endDate));
}

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
        Loyalty Card
      </Typography>
  </Breadcrumb>
  )
}

const MembershipForm = ({ isEdit,...rest }) => {
  const theme = useTheme();
  const { user } = useUserAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const today = new Date();
  const customerMembership = new CustomerMembership();
  const statuses = ['Active','Non-Active']
  //ToDo:: handle if access the membership form. 
  const membershipData = location.state.data;
  const [startDate,setStartDate]=useState(membershipData?dayjs(membershipData.startDate):dayjs(today));
  const [endDate,setEndDate]=useState(membershipData?dayjs(membershipData.expiryDate):dayjs(today));
  const [isAlert, setAlert] = useState(initialAlertMessageValues);

  const handleSubmitMemberShipForm= (values)=>{
    try{
      if(isStartDateValid(startDate, endDate)){
        customerMembership.uuid=user.email;
        customerMembership.customerName=values.editCustomerName;
        customerMembership.membershipId=membershipData.membershipId;
        customerMembership.pointToReach=values.editPointsToReach;
        customerMembership.currentPoint=values.editCurrentPoint;
        customerMembership.expiryDate = dayjs(endDate).format('YYYY-MM-DD');
        customerMembership.startDate =dayjs(startDate).format('YYYY-MM-DD') ;
        customerMembership.duration='';
        customerMembership.membershipCode= values.editMembershipCode;
        customerMembership.status=values.editMemberStatus;
        customerMembership.reward=values.editReward;
        
        setAlert((prev) => ({
          ...prev,
          alertMessage: alertMessage['SUCCESS'],
          isDisplay: true,
        }));

        updateCustomerMembership(membershipData.membershipId,customerMembership);
        navigate('/customer')
      }else{
        setAlert({
          alertMessage: alertMessage['STARTDATE_NOT_VALID'],
          isDisplay: true,
        })
      }
    }catch(error){

      setAlert((prev)=>{return {
        alertMessage: alertMessage['FAILURE'],
        isDisplay: true,
      }})
    }
  }

  const initialValues = membershipData?{
    editCustomerName:membershipData.customerName,
    editMembershipCode:membershipData.membershipCode,
    editPointsToReach:membershipData.pointToReach,
    editCurrentPoint:membershipData.currentPoint,
    submit: null,
    editMemberStatus:membershipData.status,
    editReward: membershipData.reward,
  }:{
    editCustomerName:'',
    editMembershipCode:'',
    editPointsToReach:'',
    editCurrentPoint:'',
    submit: null,
    reward: '',
    editMemberStatus:'',
    editReward: '',
  }

  useEffect(() => {
  }, [handleSubmitMemberShipForm]);

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

  return (
    <>
      <BreadcrumbSection/>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmitMemberShipForm}
        validationSchema={Yup.object().shape(validationSchema)}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit} {...rest}>
            <TextField
              error={Boolean(touched.editCustomerName && errors.editCustomerName)}
              fullWidth
              helperText={touched.editCustomerName && errors.editCustomerName}
              label="Customer Name"
              margin="normal"
              name="editCustomerName"
              onBlur={handleBlur}
              onChange={handleChange}
              type="editCustomerName"
              value={values.editCustomerName}
              variant="outlined"
            />
            <DatePicker
              label="Loyalty Card Start Date"
              name="editStartDate"
              defaultValue={membershipData?dayjs(membershipData.startDate):dayjs(today)}
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
              onChange={(value) => {
                setStartDate(value)
              }}
            />
            <FormControl fullWidth sx={{ mt: theme.spacing(3), mb: theme.spacing(1) }}>
                <TextField
                fullWidth
                disabled={true}
                label="Loyalty Code (auto generated)"
                margin="normal"
                name="editMembershipCode"
                type="membershipCode"
                value={values.editMembershipCode}
                variant="outlined"
                />
            </FormControl>
            <DatePicker
              name='editEndDate'
              defaultValue={membershipData?dayjs(membershipData.expiryDate):dayjs(today)}
              label="Loyalty Card End Date"
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
              onChange={(value) => {
                setEndDate(value)
              }}
            />
            <TextField
              error={Boolean(touched.editPointsToReach && errors.editPointsToReach)}
              fullWidth
              helperText={touched.editPointsToReach && errors.editPointsToReach}
              label="Points To Reach"
              margin="normal"
              name="editPointsToReach"
              onBlur={handleBlur}
              onChange={handleChange}
              type="editPointsToReach"
              value={values.editPointsToReach}
              variant="outlined"
              placeholder="example: 30"
            />
            <TextField
              error={Boolean(touched.editCurrentPoint && errors.editCurrentPoint)}
              fullWidth
              helperText={touched.editCurrentPoint && errors.editCurrentPoint}
              label="Current Point"
              margin="normal"
              name="editCurrentPoint"
              onBlur={handleBlur}
              onChange={handleChange}
              type="editCurrentPoint"
              value={values.editCurrentPoint}
              variant="outlined"
              placeholder="example: 10"
            />
            <TextField
              error={Boolean(touched.reward && errors.reward)}
              fullWidth
              helperText={touched.reward && errors.reward}
              label="Reward"
              margin="normal"
              name="editReward"
              onBlur={handleBlur}
              onChange={handleChange}
              type="editReward"
              value={values.editReward}
              variant="outlined"
              placeholder="example: Free 1 Hamburger"
            />
            <FormControl fullWidth>
              <InputLabel id="status-select-label">Status</InputLabel>
              <Select
                labelId="status-select-label"
                id="select-status"
                value={values.editMemberStatus}
                label="Status"
                name="editMemberStatus"
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
              <Button color="primary" fullWidth size="large" type="submit" variant="contained">
                Save
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      { isAlert.isDisplay && <AlertInfo setAlert={setAlert} isAlert={isAlert}/> }
    </>
  );
};

export default MembershipForm;
