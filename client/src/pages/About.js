import React from 'react'
import Photo from '../headshot.png'
import { Link } from 'react-router-dom';

function About() {
  return (
<div className='about'>
  <div className="card lg:card-side bg-base-100 shadow-xl">
    <figure><img src={Photo} alt="Album"/></figure>
    <div className="card-body">
      <h2 className="card-title">About me</h2>
        <p className='text-center'> My name is Valeria Garcia. I'm a full-stack web developer based out of Salt Lake City, Utah. I graduated from the University of Utah. Educated in technologies such as JavaScript, MongoDB, Express.js, React.js, and Node.js </p>
        <button className="btn btn-active"><Link to={'/projects'}>View Portfolio</Link></button>    
        </div>
    </div>
  </div>
  )
}

export default About