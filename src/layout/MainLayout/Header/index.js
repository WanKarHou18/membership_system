import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Grid, IconButton, Typography } from '@mui/material';

// project import
import SearchSection from './SearchSection';
import ProfileSection from './ProfileSection';
import { useUserAuth } from "../../../context/UserAuthContext";
import { drawerWidth } from 'config.js';

// assets
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
// import logo from 'assets/images/logo.svg';

// ==============================|| HEADER ||============================== //

const Header = ({ drawerToggle }) => {
  const theme = useTheme();
  const {user} = useUserAuth();

  return (
    <>
      <Box width={drawerWidth}>
        <Grid container justifyContent="space-between" alignItems="center">
          {/* <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Grid item>
              <Box mt={0.5}>
                <img src={logo} alt="Logo" />
              </Box>
            </Grid>
          </Box> */}
          <Grid item>
            <IconButton
              edge="start"
              sx={{ mr: theme.spacing(1.25) }}
              color="inherit"
              aria-label="open drawer"
              onClick={drawerToggle}
              size="large"
            >
              <MenuTwoToneIcon sx={{ fontSize: '1.5rem' }} />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      {/* <SearchSection theme="light" /> */}
      <Typography sx={{ mt: theme.spacing(1),color:'white'}} variant="p">Welcome, {user.displayName}</Typography>
      {/* <NotificationSection /> */}
      <ProfileSection />
    </>
  );
};

Header.propTypes = {
  drawerToggle: PropTypes.func
};

export default Header;
