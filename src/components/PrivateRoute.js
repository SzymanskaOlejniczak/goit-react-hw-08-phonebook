import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {authSelectors} from '../redux/auth/selector';

export function PrivateRoute() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return <>{isLoggedIn ? <Outlet /> : <Navigate to="/login" />}</>;
}