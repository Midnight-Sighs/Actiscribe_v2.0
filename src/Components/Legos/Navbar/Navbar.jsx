import React from 'react' 
import { NavLink } from 'react-router-dom'
import './Style/Navbar.css'


export const Navbar = () => {
  return (
    <div className='navbar-wrapper'>
        <div className='navbar-cont'>
            <div className='nav-logo-cont'> <h1>Actiscribe</h1></div>
            <div className='nav-links-cont'>
                <NavLink className='text-links link-space' to="/">Home</NavLink>
                <NavLink className='text-links link-space' to="/TEST">Test</NavLink>
                <NavLink className='text-links' to="/">home</NavLink>
                <NavLink className='text-links' to="/">login</NavLink>
                <NavLink className='text-links' to="/">register</NavLink>
            </div>
            {/* <div className='nav-log-reg-cont'><h5>login/reg</h5></div> */}
        </div>
    </div>
  )
}

