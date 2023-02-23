import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export function AuthNav() {
  return (
    <div className={css.authorization}>
      <NavLink to="signin" className={css.navlink}>
        Log In
      </NavLink>
      <NavLink to="signup" className={css.navlink}>
        Register
      </NavLink>
    </div>
  );
}