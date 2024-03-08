import React from 'react';
import { lazy } from 'react';

// project imports
import Loadable from 'component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

const AuthLogin = Loadable(lazy(() => import('../views/Login')));
const AuthRegister = Loadable(lazy(() => import('../views/Register')));
const Services = Loadable(lazy(() => import('../views/LandingPage')));
const ForgetPassword= Loadable(lazy(() => import('../views/ForgetPassword')));
const FAQ= Loadable(lazy(() => import('../views/Help')));
const NotFoundPage = Loadable(lazy(()=>import('../views/NotFound')))
// ==============================|| AUTHENTICATION ROUTES ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {path: '/', element: <Services />},
    {path: '/login',element: <AuthLogin />},
    {path: '/register', element: <AuthRegister />},
    {path: '/forget-password',element: <ForgetPassword />},
    {path: '/services',element: <Services />},
    {path: '/help',element: <FAQ />},
    { path: '*', element: <NotFoundPage/> },
  ]
};

export default AuthenticationRoutes;
