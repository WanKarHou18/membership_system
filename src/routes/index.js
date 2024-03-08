import { useRoutes } from 'react-router-dom';
import { useUserAuth } from 'context/UserAuthContext';
// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  const { user } = useUserAuth();
  return useRoutes(user?MainRoutes: [AuthenticationRoutes]);
}
