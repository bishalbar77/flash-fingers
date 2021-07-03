import React from 'react';
import logo from "./../../assets/logo.png"
import "./Nav.css";
const Nav = () => {
    return (
        <div className="nav-container">
            <div className="nav-left">
                <img className="header-logo" src={logo} alt="Header logo"/>
                <p className="header-logo-text">Flash Fingers</p>
            </div>
            <div className="nav-right">
                <a
                    target="_blank"
                    className="nav-bishalbar77-link"
                    href="https://www.linkedin.com/in/bishalbar77/"
                    rel="noreferrer">
                    bishalbar77
                </a>
            </div>
        </div>
    )
}

export default Nav;