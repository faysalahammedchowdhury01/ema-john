import React from 'react';
import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg flex-column">
        <div className="container">
          <div className="row justify-content-center">
            <a href="/" className="logo col-5 col-md-3">
              <img className="img-fluid" src={logo} alt="Ema John Logo" />
            </a>
          </div>
        </div>
        <div className="bg-warning p-2 mt-4 w-100 text-dark">
          <ul className="container mb-0 navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active text-dark"
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/shops">
                Shops
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/manage">
                Manage
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
