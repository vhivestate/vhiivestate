import React from 'react'
import Trim from '../assets/trimdown.png'
import Rolodex from '../assets/rolodex.png'
import Book from '../assets/book-search.png'
import Schedule from '../assets/scheduler.png'
import Note from '../assets/notetaker.png'


function Projects() {
  return (
    
    <div className='projectPage bg-[#29243c78]'>
<h2 className='text-center p-10 text-5xl	'>My Projects</h2>
    <div className='projects flex flex-wrap justify-center space-x-4'>

<div>
    <div className="card w-96 glass shadow-xl ">
     <figure className="px-10 pt-10">
     <img src={Trim} alt="Shoes" className="rounded-xl" />
     </figure>
     <div className="card-body items-center text-center">
     <h2 className="card-title">Trim Down</h2>
     <p> An application that creates an easy and fun way for users keep track of how much their daily habits are costing them.</p>
     <div className="card-actions">
          <button className="btn btn-primary">
               <a href='https://trim-down.herokuapp.com/'>View website</a>
          </button>
        </div>
       </div>
     </div>
</div>

<div>
    <div className="card w-96 glass shadow-xl">
     <figure className="px-10 pt-10">
     <img src={Rolodex} alt="Shoes" className="rounded-xl" />
     </figure>
     <div className="card-body items-center text-center">
     <h2 className="card-title">Modern Rolodex</h2>
     <p>Taking a modern approach to a classic rolodex this websites allows users to save their contacts </p>
     <div className="card-actions">
          <button className="btn btn-primary">
          <a href='https://modernrolodex2.herokuapp.com/'>View website</a>
          </button>
        </div>
       </div>
     </div>
</div>

<div>
    <div className="card w-96 glass shadow-xl">
     <figure className="px-10 pt-10">
     <img src={Book} alt="Shoes" className="rounded-xl" />
     </figure>
     <div className="card-body items-center text-center">
     <h2 className="card-title">Shoes!</h2>
     <p>If a dog chews shoes whose shoes does he choose?</p>
     <div className="card-actions">
     <button className="btn btn-primary">
          <a href='https://modernrolodex2.herokuapp.com/'>View website</a>
          </button>
            </div>
       </div>
     </div>
</div>

<div>
    <div className="card w-96 glass shadow-xl">
     <figure className="px-10 pt-10">
     <img src={Schedule} alt="Shoes" className="rounded-xl" />
     </figure>
     <div className="card-body items-center text-center">
     <h2 className="card-title">Shoes!</h2>
     <p>If a dog chews shoes whose shoes does he choose?</p>
     <div className="card-actions">
     <button className="btn btn-primary">
          <a href='https://modernrolodex2.herokuapp.com/'>View website</a>
          </button>   
          </div>
       </div>
     </div>
</div>

<div>
    <div className="card w-96 glass shadow-xl">
     <figure className="px-10 pt-10">
     <img src={Note} alt="Shoes" className="rounded-xl" />
     </figure>
     <div className="card-body items-center text-center">
     <h2 className="card-title">Shoes!</h2>
     <p>If a dog chews shoes whose shoes does he choose?</p>
     <div className="card-actions">
     <button className="btn btn-primary">
          <a href='https://modernrolodex2.herokuapp.com/'>View website</a>
          </button>
        </div>
       </div>
     </div>
</div>

       </div>
     </div>
  )
}

export default Projects