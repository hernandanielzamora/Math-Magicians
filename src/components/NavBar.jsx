import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/NavBar.module.css';

const links = [
  { path: '/', text: 'Home' },
  { path: 'calculator', text: 'Calculator' },
  { path: 'quotes', text: 'Quotes' },
];

const NavBar = () => (
  <>
    <nav className={styles.navbar}>
      <div className={styles.navbarTitle}>
        <h1>Math Magicians</h1>
      </div>
      <ul className={styles.navbarList}>
        {links.map((link) => (
          <li key={link.text}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </>
);

export default NavBar;
