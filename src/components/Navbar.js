import React from "react";
import PropTypes from "prop-types";
import './Navbar.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
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
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  {props.aboutText}
                </Link>
              </li>
            </ul>
            <div>
              <span onClick={() => props.toggleMode('red')} className="dot mx-1 red"></span>
              <span onClick={() => props.toggleMode('green')} className="dot mx-1 green"></span>
              <span onClick={() => props.toggleMode('blue')}  className="dot mx-1 blue"></span>
              <span onClick={() => props.toggleMode('yellow')} className="dot mx-1 yellow"></span>
            </div>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form> */}
            
            <div
              className={`form-check form-switch text-${
                props.mode === "dark" ? "light" : "dark"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                onChange={() => props.toggleMode('')}
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {props.btnText}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Asad",
  aboutText: "Abouter",
};

export default Navbar;
