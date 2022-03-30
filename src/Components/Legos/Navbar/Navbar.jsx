import React from 'react' 
import './Style/Navbar.css'


export const Navbar = () => {
  return (
    <div className='navbar-wrapper'>
        <div className='navbar-cont'>
            <div className='nav-logo-cont'> <h1>LOGO</h1></div>
            <div className='nav-links-cont'><h3>Links</h3></div>
            <div className='nav-log-reg-cont'><h5>login/reg</h5></div>
        </div>
    </div>
  )
}

