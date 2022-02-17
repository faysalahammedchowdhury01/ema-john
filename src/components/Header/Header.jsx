import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/images/logo.png';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  // handle navbar toggle
  const handleNavbarToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <header>
      <nav className="navbar align-items-center navbar-expand-lg navbar-light py-4">
        <div className="container">
          <a href="/" className="logo col-5 col-md-3">
            <img
              style={{ width: '200px' }}
              className="img-fluid"
              src={logo}
              alt="Ema John Logo"
            />
          </a>
          <button
            onClick={handleNavbarToggle}
            className="d-lg-none border-0 bg-transparent d-flex justify-content-center align-items-center"
            type="button"
          >
            {navbarOpen ? (
              <FaTimes style={{ fontSize: '25px' }} />
            ) : (
              <FaBars style={{ fontSize: '25px' }} />
            )}
          </button>
          <div
            className={`${
              navbarOpen ? 'd-block' : 'd-none d-lg-block'
            } collapse navbar-collapse`}
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/shops">
                  Shops
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/manage">
                  Manage
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
