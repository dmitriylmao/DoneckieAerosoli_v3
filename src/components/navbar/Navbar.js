import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import './style.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const activeLink = 'nav-list__link nav-list__link--active';
  const normalLink = 'nav-list__link';

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/#" className="logo">
            Донецкие аэрозоли
          </NavLink>

          <button className={`mobile-menu-btn ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span className="menu-icon"></span>
          </button>

          <ul className={`nav-list ${menuOpen ? 'nav-list--open' : 'nav-list--closed'}`}>
            <li className="nav-list__item">
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? activeLink : normalLink}
                onClick={closeMenu} // Закрыть меню при клике
              >
                Главная
              </NavLink>
            </li>

            <li className="nav-list__item">
              <NavLink
                to="/projects"
                className={({ isActive }) => isActive ? activeLink : normalLink}
                onClick={closeMenu} // Закрыть меню при клике
              >
                Продукция
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/contacts"
                className={({ isActive }) => isActive ? activeLink : normalLink}
                onClick={closeMenu} // Закрыть меню при клике
              >
                Контакты
              </NavLink>
            </li>
            <li className="nav-list__item">
              <BtnDarkMode className="btn-dark-mode" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
