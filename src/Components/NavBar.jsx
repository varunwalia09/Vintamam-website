import React from 'react'
import { Link } from 'react-router-dom'
import AttachEmailIcon from '@mui/icons-material/AttachEmail';

const NavBar = () => {
  return (
    <nav className='top-1'>
      <a href="/" className="logo-1">
        <p>VintaVerse</p>
      </a>
      <ul className="navbar-1">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/skills">Project</Link>
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
              <AttachEmailIcon /> Email:contact@vintaverse.com
            </button>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;
