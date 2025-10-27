import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'Studio' },
  { to: '/works', label: 'Launches' },
  { to: '/contact', label: 'Contact' }
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <header className={styles.wrapper}>
      <Link to="/" className={styles.brand}>
        AURA
      </Link>
      <button className={styles.menuTrigger} onClick={toggleMenu} aria-expanded={open}>
        [ MENU ]
      </button>
      <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            onClick={closeMenu}
            className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
