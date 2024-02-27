import React, { lazy } from 'react';

// project import
import MainLayout from 'layout/MainLayout';
import MinimalLayout from 'layout/MinimalLayout';

import Loadable from 'component/Loadable';
import { useUserAuth } from 'context/UserAuthContext';

const DashboardDefault = Loadable(lazy(() => import('../views/Dashboard')));

const UtilsTypography = Loadable(lazy(() => import('../views/Utils/Typography')));

const SamplePage = Loadable(lazy(() => import('../views/SamplePage')));

const MembershipForm = Loadable(lazy(()=>import('../views/EditMembershipForm')));

const NewMembershipForm = Loadable(lazy(()=>import('../views/NewMembershipForm')));

const NotFoundPage = Loadable(lazy(()=>import('../views/NotFound')));

const SettingPage = Loadable(lazy(()=>import('../views/Setting')));

const AuthLogin = Loadable(lazy(() => import('../views/Login')));

const AuthRegister = Loadable(lazy(() => import('../views/Register')));

const LandingPage = Loadable(lazy(() => import('../views/LandingPage')));
// ==============================|| MAIN ROUTES ||============================== //

export function Routes() {
  const { user } = useUserAuth();

  const routes ={
    path: '/',
    element: user?<MainLayout />:<MinimalLayout />,
    children: user?[
      {
        path: '/services',
        element: <LandingPage />
      },
      {
        path: '/',
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
    ]: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/login',
        element: <AuthLogin />
      },
      {
        path: '/register',
        element: <AuthRegister />
      },
    ]
  }
  return routes;
}