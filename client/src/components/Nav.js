import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

function Nav(props) {
  return (
    <div className="nav navbar bg-transparent fixed top-0 z-40">
      <div className="navbar-start">
      <Link id='logo' className="btn btn-ghost normal-case text-xl" to={'/'}>vhivestate</Link>
      </div>
      <div className="navbar-end space-x-4">
        <a className="nav-a btn btn-outline"><Link to={'/projects'}>Projects</Link></a>
        <a className="nav-a btn btn-outline"><Link to={'/resume'}>Resume</Link></a>
      </div>
      </div>
  )
}

export default Nav