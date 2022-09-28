import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

function Nav(props) {
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path  strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      {/* <li><Link to={'/landing'}>Home</Link></li> */}
      <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/projects'}>Projects</Link></li>
            <li><Link to={'/resume'}>Resume</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
  <Link id='logo' className="btn btn-ghost normal-case text-xl" to={'/'}>Vhivestate</Link>
  </div>
  <div className="navbar-end">

  </div>
</div>
  )
}

export default Nav