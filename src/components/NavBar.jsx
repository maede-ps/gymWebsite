import './NavBar.css'
import logo from '../Images/logo.png'
import { Link, NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import { links } from '../data.js'
import { HiMiniBars3 } from 'react-icons/hi2'
import {IoMdClose} from 'react-icons/io'

function NavBar() {

  const [isNavShowing,setIsNavShowing] =useState(false);

  return (
    <nav>
    <div className='container nav__container'>
      <Link to={"/"} className="logo" >

        <img src={logo} alt="icon" />

      </Link>

      <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
        {
          links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink to={path} onClick={()=>setIsNavShowing(prev => !prev)} className={({isActive})=>isActive? 'active-nav':''}>{name}</NavLink>
              </li>
            )
          })
        }
      </ul>
      <button className="nav__toggle-btn" onClick={()=>setIsNavShowing(prev => !prev)}>
        {
          isNavShowing ? <IoMdClose/> :
          <HiMiniBars3 />}
      </button>
    </div>
    </nav>
  )
}

export default NavBar