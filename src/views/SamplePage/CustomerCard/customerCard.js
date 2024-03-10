import React,{useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';

//third-party
import { Card, CardContent, Typography, Button, Divider, CardHeader, Grid,LinearProgress, IconButton, Tooltip} from '@mui/material';
import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';
import { Edit,CreditCard,Delete } from '@mui/icons-material';

//this project
import { formatDateToDDMMYYYY } from 'helper/dateHelper';
import { deleteCustomerMembership } from 'api/customerMembership';

const StyledMuiButton = styled(Button)`
  background-color: #4caf50;
  color: white;
  &:hover {
    background-color: #45a049;
  }
`;

const STATUSES = {
  ACTIVE: 'Active',
  NON_ACTIVE: 'Non-Active'

}
const CustomerCard = ({showDialog,data,deleteMembership}) => {

  const navigate = useNavigate();
  const theme = useTheme();

  const customerNameDisplay=()=>{
    return(
      <Typography variant="h4"sx={{ color: theme.palette.primary.main }}>
        {data.customerName}
      </Typography>
    )
  }

  const statusDisplay = () => {
    return(
      <Grid container alignItems="center" spacing={1}>
        <Grid item>
          <Typography variant="h6"align="left">
            Status
          </Typography>
        </Grid>
        <Grid item sm zeroMinWidth>
          <Typography variant="h6" sx={{ color: data.status === STATUSES.ACTIVE?theme.palette.success.main: theme.palette.error.main}} align="right">
            {data.status}
          </Typography>
        </Grid>
      </Grid>
    )
  }

  const expiryDateDisplay=()=>{
    return(
      <Grid container alignItems="center" spacing={1}>
        <Grid item>
          <Typography variant="h6"align="left">
            Expiry Date
          </Typography>
        </Grid>
        <Grid item sm zeroMinWidth>
          <Typography variant="h6" align="right">
            {formatDateToDDMMYYYY(data.expiryDate)}
          </Typography>
        </Grid>
      </Grid>
    )
  }

  const startDateDisplay=()=>{
    return(
      <Grid container alignItems="center" spacing={1}>
        <Grid item>
          <Typography variant="h6"align="left">
            Start Date
          </Typography>
        </Grid>
        <Grid item sm zeroMinWidth>
          <Typography variant="h6" align="right">
            {formatDateToDDMMYYYY(data.startDate)}
          </Typography>
        </Grid>
      </Grid>
    )
  }

  const pointsProgress =()=>{
    return(
      <Grid item xs={12}>
        <Grid container alignItems="center" spacing={1}>
          <Grid item sm zeroMinWidth>
            <Typography variant="h5">Points</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" align="right">
              {data.currentPoint} / {data.pointToReach}
            </Typography>
          </Grid>
          <Grid item xs={12}>
              <LinearProgress variant="determinate" value={(parseInt(data.currentPoint)/parseInt(data.pointToReach))*100} color="primary" />
          </Grid>
        </Grid>
      </Grid>
    )
  }
  const statusSection = statusDisplay();
  const customerNameSection = customerNameDisplay();
  const expiryDateSection = expiryDateDisplay();
  const startDateSection = startDateDisplay();
  const pointsProgressSection = pointsProgress();

  const membershipData= {
    data: data
  };


  return (
    <Card>
      <CardHeader
          title={
            <Grid container spacing={1} justifyContent="space-between">
              <Typography variant="h3" sx={{ color: theme.palette.primary.main }}>
               {data.membershipCode}
              </Typography>
              {/* Todo: Find a proper way to handle this */}
              <Grid flexDirection="row" display='flex' gap='5px'>
                <IconButton onClick={()=>navigate("/edit-membership-form", {state:membershipData})}>
                  <Edit/>
                </IconButton>
                <IconButton onClick={()=>showDialog({isOpen: true, selectedData: data})}>
                  <CreditCard/>
                </IconButton>
                <IconButton onClick={()=>deleteMembership(data.membershipId)}>
                  <Delete/>
                </IconButton>
              </Grid>
            </Grid>
          }
      />
      <Divider />
      <CardContent>
        {customerNameSection}
        <br/>
        {statusSection }
        {expiryDateSection}
        {startDateSection}
        <br/>
        {pointsProgressSection}
      </CardContent>
    </Card>
  );
};

export default CustomerCard;