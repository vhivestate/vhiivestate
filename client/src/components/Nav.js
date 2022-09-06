import React from 'react'
import '../App.css'

function Nav(props) {
  return (
    <nav>
        <button className="btn glass" onClick={() => props.setCurrentPage(0)}>Home</button>
        <button className="btn glass" onClick={() => props.setCurrentPage(1)}>About</button>
        <button className="btn glass" onClick={() => props.setCurrentPage(2)}>Projects</button>
        <button className="btn glass" onClick={() => props.setCurrentPage(3)}>Contact</button>
        <button className="btn glass" onClick={() => props.setCurrentPage(4)}>Resume</button>
    </nav>
  )
}

export default Nav