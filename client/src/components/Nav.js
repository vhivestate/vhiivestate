import React from 'react'

function Nav(props) {
  return (
    <div>
        <button onClick={() => props.setCurrentPage(0)}>Home</button>
        <button onClick={() => props.setCurrentPage(1)}>About</button>
        <button onClick={() => props.setCurrentPage(2)}>Contact</button>
        <button onClick={() => props.setCurrentPage(3)}>Projects</button>
        <button onClick={() => props.setCurrentPage(4)}>Resume</button>
    </div>
  )
}

export default Nav