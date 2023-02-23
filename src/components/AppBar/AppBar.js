import { useSelector } from 'react-redux';
import { Navigation } from '../Navigation/Navigation';
import {UserMenu} from '../UserMenu/UserMenu';
import {AuthNav} from '../AuthNav/AuthNav';
import {authSelectors} from '../../redux/auth/selector';
import s from './AppBar.module.css';

export function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.header}>
      <div className={s.headerWrapper}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
}