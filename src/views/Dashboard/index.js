import React, { useEffect } from 'react';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Grid, Card, CardHeader, CardContent, Typography, Divider, LinearProgress, Tooltip} from '@mui/material';

//project import
import { useUserAuth } from 'context/UserAuthContext';
import SalesLineCard from './SalesLineCard';
import SalesLineCardData from './chart/sale-chart-1';

import RevenuChartCard from './RevenuChartCard';
import RevenuChartCardData from './chart/revenu-chart';
import ReportCard from './ReportCard';
import { gridSpacing } from 'config.js';
import { useDashBoard } from './useDashboard';
import { generateChartData } from './chart/revenu-chart';
import value from 'assets/scss/_themes-vars.scss';
import { LOYALTY_CARD_LIMIT } from 'constants/memberships.constants';
import { useSelector } from 'react-redux';

// assets
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import MonetizationOnTwoTone from '@mui/icons-material/MonetizationOnTwoTone';
import DescriptionTwoTone from '@mui/icons-material/DescriptionTwoTone';
import ThumbUpAltTwoTone from '@mui/icons-material/ThumbUpAltTwoTone';
import CalendarTodayTwoTone from '@mui/icons-material/CalendarTodayTwoTone';

// third party
import { getDataFromSessionStorage } from 'helper/sessionStorageHelper';

// custom style
const FlatCardBlock = styled((props) => <Grid item sm={6} xs={12} {...props} />)(({ theme }) => ({
  padding: '25px 25px',
  borderLeft: '1px solid' + theme.palette.background.default,
  [theme.breakpoints.down('sm')]: {
    borderLeft: 'none',
    borderBottom: '1px solid' + theme.palette.background.default
  },
  [theme.breakpoints.down('md')]: {
    borderBottom: '1px solid' + theme.palette.background.default
  }
}));

const colorOptions = [value.primary, value.error, value.info]


// ==============================|| DASHBOARD DEFAULT ||============================== //

const FirstRow = ({theme, totalMembershipQuantity, activeMembershipQuantity, nonActiveMembershipQuantity, expiringMemberships}) => {
  return(
    <Grid item xs={12}>
      <Grid container spacing={gridSpacing}>
        {/* <Grid item lg={3} sm={6} xs={12}>
          <ReportCard
            primary="$30200"
            secondary="All Earnings"
            color={theme.palette.warning.main}
            footerData="10% changes on profit"
            iconPrimary={MonetizationOnTwoTone}
            iconFooter={TrendingUpIcon}
          />
        </Grid> */}
        <Grid item lg={3} sm={6} xs={12}>
          <ReportCard
            primary={activeMembershipQuantity}
            secondary="Active Loyalty Card"
            color={theme.palette.success.main}
            // footerData="10k daily views"
            // iconPrimary={DescriptionTwoTone}
            // iconFooter={TrendingUpIcon}
          />
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <ReportCard
            primary={nonActiveMembershipQuantity}
            secondary="Non Active Loyalty Card"
            color={theme.palette.error.main}
            // footerData="28% task performance"
            // iconPrimary={CalendarTodayTwoTone}
            // iconFooter={TrendingDownIcon}
          />
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <ReportCard
            primary={expiringMemberships}
            secondary="Expired within 7 days"
            color={theme.palette.warning.main}
            // footerData="28% task performance"
            // iconPrimary={CalendarTodayTwoTone}
            // iconFooter={TrendingDownIcon}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

const initialChartData = {
  totalMembershipQuantity:0, 
  activeMembershipQuantity:0, 
  nonActiveMembershipQuantity:0, 
  membershipsProgress:0, 
  expiringMembershipsQuantity:0
}

const Default = () => {
  const {user} = useUserAuth();

  const theme = useTheme();

  const {
    totalMembershipQuantity, 
    activeMembershipQuantity, 
    nonActiveMembershipQuantity, 
    membershipsProgress, 
    expiringMembershipsQuantity
  } = useDashBoard(user.email);

  const totalMemberships = LOYALTY_CARD_LIMIT;
  
  const membershipsProgressChartCardData = generateChartData(Object.entries(membershipsProgress).map(([key, value], index) => {
    return { label : key, data : value, color : colorOptions[index] };
  }));

  const membershipsProgressFooterData = Object.entries(membershipsProgress).map(([key, value], index) => {
    return { label : key, data : value?((value / totalMembershipQuantity) * 100):0, color: colorOptions[index]};
  });

  const CapacityChartCardData = generateChartData([
    {label :'Availble', data : totalMemberships-totalMembershipQuantity, color : value.primary},
    {label: 'Used', data : totalMembershipQuantity, color: value.error}
  ])

  const CapacityfooterData = [
    {label :'Availble', data : (((totalMemberships-totalMembershipQuantity)/totalMemberships).toFixed(2))*100, color :theme.palette.primary.main},
    {label: 'Used', data : ((totalMembershipQuantity/totalMemberships).toFixed(2)*100), color:value.error },
  ]
  return (
    <Grid container spacing={gridSpacing}>
      <FirstRow 
        theme = {theme}
        totalMembershipQuantity = {totalMembershipQuantity}
        activeMembershipQuantity = {activeMembershipQuantity}
        nonActiveMembershipQuantity = {nonActiveMembershipQuantity}
        expiringMemberships= {expiringMembershipsQuantity}
      />
      {/* Second Row of Dashboard */}
            
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={8} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12} sm={6}>
                <Grid container spacing={gridSpacing}>
                <Tooltip title="Loyalty Card Capacity" arrow>
                  <Grid item xs={12}>
                    <RevenuChartCard 
                      title='Loyalty Cards Capacity' 
                      chartData={CapacityChartCardData} 
                      footerData={CapacityfooterData}/>
                  </Grid>
                </Tooltip>
                </Grid>
              </Grid>
              <Tooltip title="Chart on progress of customer finishing their loyalty card" arrow>
              <Grid item xs={12} sm={6}>
                <RevenuChartCard 
                    title='Loyalty Card Progress Chart' 
                    chartData={membershipsProgressChartCardData} 
                    footerData={membershipsProgressFooterData}/>
              </Grid>
              </Tooltip>
            </Grid>
          </Grid>
          <Grid item lg={4} xs={12}>
            {/* <Card>
              <CardHeader
                title={
                  <Typography component="div" className="card-header">
                    Traffic Sources
                  </Typography>
                }
              />
              <Divider />
              <CardContent>
                <Grid container spacing={gridSpacing}>
                  <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">Direct</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" align="right">
                          80%
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="direct" value={80} color="primary" />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">Social</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" align="right">
                          50%
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="Social" value={50} color="secondary" />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">Referral</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" align="right">
                          20%
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="Referral" value={20} color="primary" />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">Bounce</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" align="right">
                          60%
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="Bounce" value={60} color="secondary" />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container alignItems="center" spacing={1}>
                      <Grid item sm zeroMinWidth>
                        <Typography variant="body2">Internet</Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" align="right">
                          40%
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LinearProgress variant="determinate" aria-label="Internet" value={40} color="primary" />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent> 
            </Card>*/}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Default;
