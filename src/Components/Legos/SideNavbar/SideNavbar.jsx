import React from 'react'
import { NavLink } from 'react-router-dom'
import './Style/SideNavbar.css'




export const SideNavbar = () => {
  return (
    <div className='side-navbar-wrapper'>
        <div className='side-navbar-con'>
            <div className='side-navbar-links'>
            <NavLink className='side-nav-links' to="/">home</NavLink>
            <NavLink className='side-nav-links' to="/">home</NavLink>
            <NavLink className='side-nav-links' to="/">home</NavLink>

            </div>
        </div>
    </div>
  )
}

