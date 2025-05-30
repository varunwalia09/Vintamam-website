import React from 'react'
import { Link } from 'react-router-dom'
import AttachEmailIcon from '@mui/icons-material/AttachEmail'
import LogoImage from '../assets/logo-light.svg';



const NavBar = () => {
  return (
    <nav className="top-1">
      <a href="/" className="logo-1">
        <img src={LogoImage} alt="VintaVerse Logo" className="logo-image" />
      </a>
      <ul className="navbar-1">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/team">Team</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <a
            className="address3"
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn-sub">
              <AttachEmailIcon />:contact@vintaverse.com
            </button>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
