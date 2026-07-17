import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import profileImg from '../assets/img/my-profile-img.jpg';

const navItems = [
  { to: '/', label: 'Home', icon: 'bi-house', end: true },
  { to: '/about', label: 'About', icon: 'bi-person' },
  { to: '/resume', label: 'Resume', icon: 'bi-file-earmark-text' },
  { to: '/contact', label: 'Contact', icon: 'bi-envelope' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleHeader = () => setMobileOpen((prev) => !prev);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header id="header" className={`header dark-background d-flex flex-column${mobileOpen ? ' header-show' : ''}`}>
      <i
        className={`header-toggle d-xl-none bi ${mobileOpen ? 'bi-x' : 'bi-list'}`}
        onClick={toggleHeader}
        role="button"
        tabIndex={0}
      ></i>

      <div className="profile-img">
        <img src={profileImg} alt="" className="img-fluid rounded-circle" />
      </div>

      <NavLink to="/" className="logo d-flex align-items-center justify-content-center" onClick={closeMobile}>
        <h1 className="sitename">Ngun Vuthy</h1>
      </NavLink>

      <div className="social-links text-center">
        <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
        <a href="#" className="google-plus"><i className="bi bi-skype"></i></a>
        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
      </div>

      <nav id="navmenu" className="navmenu">
        <ul>
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={closeMobile}
              >
                <i className={`bi ${item.icon} navicon`}></i>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
