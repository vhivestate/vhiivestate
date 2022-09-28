import React from 'react'
import Trim from '../assets/trimdown.png'

function Projects() {
  return (
    
    <div className='projectPage'>
    <h1>My Projects</h1>
    <div className='projects '>
       <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
          <img src={Trim} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
               <a href="#slide4" className="btn btn-circle">❮</a> 
               <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
          </div> 
          <div id="slide2" className="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
               <a href="#slide1" className="btn btn-circle">❮</a> 
               <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
          </div> 
          <div id="slide3" className="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
               <a href="#slide2" className="btn btn-circle">❮</a> 
               <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
          </div> 
          <div id="slide4" className="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
               <a href="#slide3" className="btn btn-circle">❮</a> 
               <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
          </div>
          </div>
       </div>
     </div>
  )
}

export default Projects