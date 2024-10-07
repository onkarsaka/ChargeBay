import React from 'react'
import "../Pages/chargebayHome.css"

import AnimatedSection from './AnimatedSection'

import logo from "../Images/Logo White.png"
import logomob from "../Images/Logo Black.png"

const Header = ({ isMenuOpen, toggleMenu, toggleForm }) =>{
  return (
    <>
      <header className="header">
        <AnimatedSection animation="flyIn" direction="up">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
        </AnimatedSection>
        <AnimatedSection animation="flyIn" direction="up">
          <nav id='desknavs'>
            <ul>
              <li className="nav-item">
                <a href="#" className="nav-link">Drivers <span className="dropdown-arrow">▼</span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Item 1</a></li>
                  <li><a href="#">Item 2</a></li>
                  <li><a href="#">Item 3</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Hosts <span className="dropdown-arrow">▼</span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Item 1</a></li>
                  <li><a href="#">Item 2</a></li>
                  <li><a href="#">Item 3</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Our Solution <span className="dropdown-arrow">▼</span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Item 1</a></li>
                  <li><a href="#">Item 2</a></li>
                  <li><a href="#">Item 3</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Our Partners</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">The Company</a>
              </li>
              <div className="cta-buttons">
                <button className="host-station"><span>Host a Station</span></button>
                <button onClick={toggleForm} className="learn-more contacts">
                  <span>Contact</span>
                </button>
              </div>
            </ul>
          </nav>
          <nav id='mobnavs'>
            <button id={isMenuOpen ? 'toggled' : ''} className="menu-toggle" onClick={toggleMenu}>
              {isMenuOpen ? '✖' : '☰'}
            </button>
            <ul className={isMenuOpen ? 'open' : 'close'}>
              <div className="logo-nav">
                <img src={logomob} alt="Logo" />
              </div>
              <li className="nav-item">
                <a href="#" className="nav-link">Drivers <span className="dropdown-arrow">▼</span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Item 1</a></li>
                  <li><a href="#">Item 2</a></li>
                  <li><a href="#">Item 3</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Hosts <span className="dropdown-arrow">▼</span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Item 1</a></li>
                  <li><a href="#">Item 2</a></li>
                  <li><a href="#">Item 3</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Our Solution <span className="dropdown-arrow">▼</span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Item 1</a></li>
                  <li><a href="#">Item 2</a></li>
                  <li><a href="#">Item 3</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Our Partners</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">The Company</a>
              </li>
              <h5>Are you host?</h5>
              <h3>Log in &#x2192;</h3>
              <div className="cta-buttons">
                <button onClick={toggleForm} className="navbtn contacts"><span>Contact</span></button>
                <button className="navbtn"><span>Host a Station</span></button>
              </div>
            </ul>
          </nav>
        </AnimatedSection>
      </header>
    </>
  )
}

export default Header