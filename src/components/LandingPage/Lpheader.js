import React from 'react';
import '../../TopHead.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/amzlplogo.png'

const LPHeader = () => {
  return (
    <header className="lpheader bg-orange">
      <nav className="navbar navbar-expand-lg navbar-light container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link custom-btn get-started" href="#get-started">Get Started</a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-btn live-chat" href="#live-chat">Live Chat</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default LPHeader;
