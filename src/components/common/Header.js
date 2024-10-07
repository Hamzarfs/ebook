import React from 'react';
import ebooklogo from '../../images/ebooklogo.png';
import { Link } from 'react-router-dom'; // Make sure this import is included if you're using Link


const Header = () => {
    return (
        <section id="header">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <img src={ebooklogo} alt="Brand Logo" className="navbar-brand" />
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/ghost-writing" className="nav-link">Ghostwriting</Link>
        </li>
        <li className="nav-item">
          <Link to="/designing" className="nav-link">Designing</Link>
        </li>
        <li className="nav-item">
          <Link to="/book-editing" className="nav-link">Book Editing</Link>
        </li>
        <li className="nav-item">
          <Link to="/fiction-ghostwriting" className="nav-link">Fiction Ghostwriting</Link>
        </li>
                            <li className="nav-item dropdown">
                            <Link
                                    className="nav-link dropdown-toggle"
                                    to="/other-services"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Other Services
                                    </Link>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Header;
