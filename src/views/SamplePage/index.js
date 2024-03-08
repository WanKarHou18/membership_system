import React,{ useState,useEffect }from 'react';
import { Link,useNavigate } from 'react-router-dom';

// material-ui
import { Grid, Typography } from '@mui/material';
import CustomDialog from './Dialog/dialog';
import { AddCard} from '@mui/icons-material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';

import CustomerCard from './CustomerCard/customerCard';
import MembershipCard from './MembershipCard/membershipCard';
import FoodCakeMembershipCard from './FoodMembershipCard/membershipCard';

import { getCustomerMembershipByUUID,deleteCustomerMembership } from 'api/customerMembership';

import SearchSection from './SearchSection';

import { useUserAuth } from '../../context/UserAuthContext';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {

  const userEmail = localStorage.getItem('userEmail');

  const initialDialogValues = {
    isOpen: false,
    selectedData: ''
  }
    
  const [isOpenCardDialog, setOpenCardDialog] = useState(initialDialogValues);
  const [memberships,setMemberships]=useState(null);

  const {user} = useUserAuth();

  const getMemberships = async () => {
    try {
        await getCustomerMembershipByUUID(userEmail).then((result)=>{
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
  },[
    user
  ])

  const handleDeleteMembership = async (membershipId) => {
    try {
        await deleteCustomerMembership(membershipId);
        getMemberships();
    } catch (error) {
        console.error('Error deleting membership:', error);
    }
  };

  const BreadcrumbSection =()=>{
    return(
      <Breadcrumb title="Customer" sideIcon={<AddCard/>} passData={memberships}>
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Customer
        </Typography>
      </Breadcrumb>
    )
  }
  
  return (
    <>
      <BreadcrumbSection/>
      <Grid container style={{padding:'10px 10px 10px 0'}}>
        <SearchSection
           data = {memberships}
           setData = {setMemberships}
        />
      </Grid>
      <Grid container spacing={gridSpacing} key={"loyaltycards"} >
        {memberships&&memberships.map((item,index) => (
          <Grid item xs={12} sm={6} md={4} key={"grid"+index}>
            <CustomerCard key={"loyaltyCard"+index} showDialog={setOpenCardDialog} data={item} deleteMembership={handleDeleteMembership}/>
          </Grid>
        ))}
      </Grid>
      <CustomDialog 
        showDialog={setOpenCardDialog} 
        isShowDialog={isOpenCardDialog.isOpen} 
        dialogTitle={"Customer Loyalty Card"} 
        contentList={[
          <MembershipCard data={isOpenCardDialog.selectedData} key={'membershipCard1'}/>,
          <FoodCakeMembershipCard data={isOpenCardDialog.selectedData} key={'membershipCard2'}/>
        ]}
      />
    </>
  );
};

export default SamplePage;
