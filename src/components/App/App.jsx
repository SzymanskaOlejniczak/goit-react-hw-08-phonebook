import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getCurrentUser } from 'redux/auth/operations';
import { Loader } from 'components/Loader/Loader';
import { AppBar } from '../AppBar/AppBar';
import { PrivateRoute } from '../PrivateRoute';
import { PublicRoute } from '../PublicRoute';
import s from './App.module.css';

const Contacts = lazy(() => import('pages/AddContact/AddContact'));
const LogIn = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));
const Home = lazy(() => import('pages/Home/Home'));
const FilterContact = lazy(() => import('pages/FilterContact/FilterContact'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div className={s.form} >
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route element={<PrivateRoute />}>
            <Route element={<FilterContact />} path="/filtercontact" />
            <Route element={<Contacts />} path="/addcontact" />
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LogIn />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
