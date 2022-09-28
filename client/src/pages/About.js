import React from 'react'
import Photo from '../headshot.png'
import Trim from '../assets/trimdown.png'

function About() {
  return (
<div className='about'>
  <div className="card lg:card-side bg-base-100 shadow-xl">
    <figure><img src={Photo} alt="Album"/></figure>
    <div className="card-body">
      <p> My name is Valeria. I'm a full-stack web developer based out of Salt Lake City, Utah.</p>
      <h2 className="card-title">My Projects</h2>
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

    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
  </div>

  )
}

export default About