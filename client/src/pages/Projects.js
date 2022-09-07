import React from 'react'
import Trim from '../assets/trimdown.png'

function Projects() {
  return (
    
    <div className='projectPage'>
    <h1>My Projects</h1>
    <div className='projects '>
        <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box ">
        <div className="carousel-item max-w-fit">
           <a href='https://github.com/GerusHays/Trim-Down'> <h2>Trim Down</h2>
            <img src={Trim}></img></a>
        </div> 
        <div className="carousel-item max-w-fit">
             <a href='https://placeimg.com/250/180/arch"'> <img src="https://placeimg.com/250/180/arch" className="rounded-box" /></a>
        </div> 
        <div className="carousel-item max-w-fit">
             <a href='https://placeimg.com/250/180/arch"'> <img src="https://placeimg.com/250/180/arch" className="rounded-box" /></a>
        </div> 
        <div className="carousel-item max-w-fit">
             <a href='https://placeimg.com/250/180/arch"'> <img src="https://placeimg.com/250/180/arch" className="rounded-box" /></a>
        </div> 
        <div className="carousel-item max-w-fit">
             <a href='https://placeimg.com/250/180/arch"'> <img src="https://placeimg.com/250/180/arch" className="rounded-box" /></a>
        </div> 
        <div className="carousel-item max-w-fit">
             <a href='https://placeimg.com/250/180/arch"'> <img src="https://placeimg.com/250/180/arch" className="rounded-box" /></a>
        </div> 
        <div className="carousel-item max-w-fit">
             <a href='https://placeimg.com/250/180/arch"'> <img src="https://placeimg.com/250/180/arch" className="rounded-box" /></a>
        </div>
        </div>
        </div>
        </div>
  )
}

export default Projects