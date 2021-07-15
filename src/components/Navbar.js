import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { DiCode } from "react-icons/di";
import { FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css'
import { Button } from './Button';
import { IconContext } from 'react-icons/lib';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    
  }, []);


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/home' className='navbar-logo' onClick={closeMobileMenu}>
              <DiCode className='navbar-icon' />
              APPsquilla
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/services'
                  className='nav-links'
                  onClick={closeMobileMenu}>
                    Services
                </Link>
              </li>
              
              <li className='nav-item'>
                <a target='_blank' rel="noopener noreferrer"
                  href='https://www.secureserver.net/?pl_id=531866'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Domain &amp; Hosting
                </a>
              </li>
     {/*
              <li className='nav-item'>
                <Link
                  to='/products'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Pre-builts
                </Link>
              </li>
              <li className='nav-btn'>
                {button ? (
                  <Link to='/professional-consultation' className='btn-link'>
                    <Button buttonStyle='btn--outline'>CONSULT WITH US</Button>
                  </Link>
                ) : (
                  <Link to='/professional-consultation' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      PROFESSIONAL CONSULTATION
                    </Button>
                  </Link>
                )}
              </li>


              
              
     */}
              
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;