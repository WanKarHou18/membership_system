import React,{ useState,useEffect }from 'react';
import { Link,useNavigate } from 'react-router-dom';

// material-ui
import { Card, CardHeader, CardContent, Divider, Paper, Grid, Typography } from '@mui/material';
import CustomDialog from './Dialog/dialog';
import { AddCard} from '@mui/icons-material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';

import CustomerCard from './CustomerCard/customerCard';
import MembershipCard from './MembershipCard/membershipCard';

import { getCustomerMemberships } from 'api/customerMembership';

import SearchSection from './SearchSection';
import { resolveConfig } from 'prettier';
// ==============================|| SAMPLE PAGE ||============================== //

const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  // ... more items
];


const membershipCardData =
  {
    avatar: "/avatar.png",
    qr: "/qr.png",
    displayName: "Elon Musk",
    tagline: "Entrepreneur",
    title: "CEO Boring Company",
    phone: "+123-456-789",
    mail: "m@spacex.com",
    location: "United State , Califonia",
    socials: [["twitter", "@elonmusk"], ["linkedin", "/in/elonmusk"]]
  };

const SamplePage = () => {
  const [isOpenCardDialog, setOpenCardDialog] = useState(false);

  console.log('getCustomerMemberships',getCustomerMemberships())

  const BreadcrumbSection =()=>{
    return(
      <Breadcrumb title="Customer" sideIcon={<AddCard/>}>
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Customer
        </Typography>
      </Breadcrumb>
    )
  }

  //Initial Fetch Data
  useEffect(() => {
    getCustomerMemberships()
  },[]);
  
  return (
    <>
      <BreadcrumbSection/>
      <Grid container style={{padding:'10px 10px 10px 0'}}>
        <SearchSection/>
      </Grid>
      <Grid container spacing={gridSpacing} key={"loyaltycards"} >
        {items.map((item,index) => (
          <Grid item xs={12} sm={6} md={4} key={"grid"+index}>
            <CustomerCard key={"loyaltyCard"+index} showDialog={setOpenCardDialog}/>
          </Grid>
        ))}
      </Grid>
      <CustomDialog showDialog={setOpenCardDialog} isShowDialog={isOpenCardDialog} content={<MembershipCard people={membershipCardData} />}/>
    </>
  );
};

export default SamplePage;
