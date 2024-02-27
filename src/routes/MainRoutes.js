import React, { lazy } from 'react';

// project import
import MainLayout from 'layout/MainLayout';
import Loadable from 'component/Loadable';

const DashboardDefault = Loadable(lazy(() => import('../views/Dashboard')));

const UtilsTypography = Loadable(lazy(() => import('../views/Utils/Typography')));

const SamplePage = Loadable(lazy(() => import('../views/SamplePage')));

const MembershipForm = Loadable(lazy(()=>import('../views/EditMembershipForm')));

const NewMembershipForm = Loadable(lazy(()=>import('../views/NewMembershipForm')));

const LandingPage = Loadable(lazy(()=>import('../views/LandingPage')));

const NotFoundPage = Loadable(lazy(()=>import('../views/NotFound')));

const SettingPage = Loadable(lazy(()=>import('../views/Setting')));
// ==============================|| MAIN ROUTES ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/services',
      element: <LandingPage />
    },
    {
      path: '/dashboard',
      element: <DashboardDefault />
    },
    {
      path: '/dashboard/default',
      element: <DashboardDefault />
    },
    // { path: '/utils/util-typography', element: <UtilsTypography /> },
    { path: '/customer', element: <SamplePage /> },
    { path: '/edit-membership-form', element: <MembershipForm/> },
    { path: '/new-membership-form', element: <NewMembershipForm/> },
    { path: '/setting', element: <SettingPage/> },
    { path: '*', element: <NotFoundPage/> },
  ]
};

export default MainRoutes;
