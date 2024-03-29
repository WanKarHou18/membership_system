// assets
import NavigationOutlinedIcon from '@mui/icons-material/NavigationOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import ChromeReaderModeOutlinedIcon from '@mui/icons-material/ChromeReaderModeOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { Settings, Handyman } from '@mui/icons-material';

const icons = {
  NavigationOutlinedIcon: NavigationOutlinedIcon,
  HomeOutlinedIcon: HomeOutlinedIcon,
  ChromeReaderModeOutlinedIcon: ChromeReaderModeOutlinedIcon,
  HelpOutlineOutlinedIcon: HelpOutlineOutlinedIcon,
  SecurityOutlinedIcon: SecurityOutlinedIcon,
  AccountTreeOutlinedIcon: AccountTreeOutlinedIcon,
  BlockOutlinedIcon: BlockOutlinedIcon,
  AppsOutlinedIcon: AppsOutlinedIcon,
  ContactSupportOutlinedIcon: ContactSupportOutlinedIcon,
  SettingIcon: Settings
};

// eslint-disable-next-line
export default {
  items: [
    {
      id: 'navigation',
      title: 'FRENZ',
      // caption: 'Dashboard',
      type: 'group',
      icon: icons['NavigationOutlinedIcon'],
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          icon: icons['HomeOutlinedIcon'],
          url: '/dashboard'
        }
      ]
    },
    {
      id: 'Membership',
      title: 'Membership',
      // caption: 'Prebuild Pages',
      type: 'group',
      icon: icons['NavigationOutlinedIcon'],
      children: [
        {
          id: 'customer-page',
          title: 'Customer',
          type: 'item',
          url: '/customer',
          icon: icons['ChromeReaderModeOutlinedIcon']
        },
        // {
        //   id: 'auth',
        //   title: 'Authentication',
        //   type: 'collapse',
        //   icon: icons['SecurityOutlinedIcon'],
        //   children: [
        //     {
        //       id: 'login-1',
        //       title: 'Login',
        //       type: 'item',
        //       url: '/application/login',
        //       target: true
        //     },
        //     {
        //       id: 'register',
        //       title: 'Register',
        //       type: 'item',
        //       url: '/application/register',
        //       target: true
        //     }
        //   ]
        // }
      ]
    },
    {
      id: 'Setting',
      title: 'Setting',
      // caption: 'Prebuild Pages',
      type: 'group',
      icon: icons['NavigationOutlinedIcon'],
      children: [
        {
          id: 'setting',
          title: 'Setting',
          type: 'item',
          url: '/setting',
          icon: icons['SettingIcon']
        },
        // {
        //   id: 'auth',
        //   title: 'Authentication',
        //   type: 'collapse',
        //   icon: icons['SecurityOutlinedIcon'],
        //   children: [
        //     {
        //       id: 'login-1',
        //       title: 'Login',
        //       type: 'item',
        //       url: '/application/login',
        //       target: true
        //     },
        //     {
        //       id: 'register',
        //       title: 'Register',
        //       type: 'item',
        //       url: '/application/register',
        //       target: true
        //     }
        //   ]
        // }
      ]
    },
    // {
    //   id: 'utils',
    //   title: 'Utils',
    //   type: 'group',
    //   icon: icons['AccountTreeOutlinedIcon'],
    //   children: [
    //     {
    //       id: 'util-icons',
    //       title: 'Icons',
    //       type: 'item',
    //       url: 'https://mui.com/material-ui/material-icons/',
    //       icon: icons['AppsOutlinedIcon'],
    //       external: true,
    //       target: true
    //     },
    //     {
    //       id: 'util-typography',
    //       title: 'Typography',
    //       type: 'item',
    //       url: '/utils/util-typography',
    //       icon: icons['FormatColorTextOutlinedIcon']
    //     }
    //   ]
    // },
    {
      id: 'support',
      title: 'Support',
      type: 'group',
      icon: icons['ContactSupportOutlinedIcon'],
      children: [
        // {
        //   id: 'disabled-menu',
        //   title: 'Disabled Menu',
        //   type: 'item',
        //   url: '#',
        //   icon: icons['BlockOutlinedIcon'],
        //   disabled: true
        // },
        {
          id: 'help',
          title: 'Help',
          type: 'item',
          // url: 'https://codedthemes.gitbook.io/materially-react-material-documentation/',
          url:'/help',
          icon: icons['HelpOutlineOutlinedIcon'],
          chip: {
            label: 'Help?',
            color: 'primary'
          },
          // external: false,
          // target: true
        },
        {
          id: 'services',
          title: 'Services',
          type: 'item',
          // url: 'https://codedthemes.gitbook.io/materially-react-material-documentation/',
          url:'/services',
          icon: Handyman,
          // external: false,
          // target: true
        }
      ]
    }
  ]
};
