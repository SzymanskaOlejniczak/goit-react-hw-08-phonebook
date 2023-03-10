import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import book from '../../images/book.png';

export const styleLink = {
  display: 'inline-block',
  textDecoration: 'none',
  padding: 12,
  fontWeight: 700,
  color: 'rgb(28, 15, 2)',
  fontSize: 30,
};
export const activeStyleLink = {
  display: 'inline-block',
  textDecoration: 'none',
  padding: 12,
  fontWeight: 700,
  color: 'rgb(7, 180, 65)',
  fontSize: 30,
};
export const Navigation = () => {
  const logo = book;
  return (
    <nav className={s.nav}>
      <NavLink to="/">
        <img src={logo} alt="logo" width="50" />
      </NavLink>

      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyleLink : styleLink)}
      >
        Phone book
      </NavLink>
    </nav>
  );
};
