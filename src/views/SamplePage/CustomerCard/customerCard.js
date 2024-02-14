import React,{useState} from 'react';
import { Card, CardContent, Typography, Button, Divider, CardHeader, Grid,LinearProgress, IconButton} from '@mui/material';
import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';
import { Edit,CreditCard,Delete } from '@mui/icons-material';
import { Link,useNavigate } from 'react-router-dom';

const StyledMuiButton = styled(Button)`
  background-color: #4caf50;
  color: white;
  &:hover {
    background-color: #45a049;
  }
`;

const CustomerCard = ({showDialog}) => {

  const navigate = useNavigate();
  const theme = useTheme();
  const customerNameDisplay=()=>{
    return(
      <Typography variant="h4"sx={{ color: theme.palette.primary.main }}>
        Customer Name
      </Typography>
    )
  }

  const statusDisplay= ()=>{
    return(
      <Grid container alignItems="center" spacing={1}>
        <Grid item>
          <Typography variant="h6"align="left">
            Status
          </Typography>
        </Grid>
        <Grid item sm zeroMinWidth>
          <Typography variant="h6" sx={{ color: theme.palette.success.main }} align="right">
            OPEN
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
          31 January 2024
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
            1 January 2024
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
            5/10
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <LinearProgress variant="determinate" aria-label="Referral" value={20} color="primary" />
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

  return (
    <Card>
      <CardHeader
          title={
            <Grid container spacing={1} justifyContent="space-between">
              <Typography variant="h3" sx={{ color: theme.palette.primary.main }}>
                Promo Name
              </Typography>
              {/* Todo: Find a proper way to handle this */}
              <Grid flexDirection="row" display='flex' gap='5px'>
                <IconButton onClick={()=>navigate("/edit-membership-form")}>
                  <Edit/>
                </IconButton>
                <IconButton onClick={()=>showDialog(true)}>
                  <CreditCard/>
                </IconButton>
                <IconButton>
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