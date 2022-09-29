import React from 'react'
import Photo from '../headshot.png'
import { Link } from 'react-router-dom';
import { Mail } from 'react-feather';


function Landing() {
  return (
    <div>
    <div className="hero min-h-screen bg-top" style={{ backgroundImage: `url("https://sat02pap005files.storage.live.com/y4mccQegH1llhIfqRKMdAXiRthJjyBcQ1H1eBSvib3C8Nx5u_C181cxK4SgIMiBjg8lZJw4ul0AR1ZxSLO-bWrWZ8WrFU3-_wVy1qA0K530m8otUr5vNpgZBdEzMG52cbqwhyDZqoo8js9ZCM8sLZntIjyjRzx9jcPb8HhDyqcQz-MiC4NhBT4g4JjRFMn_hfb1?width=1024&height=683&cropmode=none")` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">WEB DEVELOPER </h1>
          <h2>I'm Valeria Garcia a Full-Stack web developer based out of Salt Lake City, Utah</h2>
          <p className="mb-5">

          </p>
          <div className='flex justify-center space-x-4'  >
          <a href="mailto:garcia.valeria001@gmail.com"> <Mail></Mail> </a>

          </div>
        </div>
      </div>
    </div>

    <div className='bg-[#29243c78]'>
    <div className='about pt-14'>
  <div className="card lg:card-side glass shadow-xl w-10/12 p-2">
    <figure><img src={Photo} alt="Album"/></figure>
    <div className="card-body	w-auto">
      <h2 className="card-title">About me</h2>
      <div className='card-text '>
      <p>Web developer based out of Salt Lake City, Utah. </p>
        <p className='min-w-fit '>From a young age I knew I wanted to work in tech. I landed my first job where my main duty was to instruct new users on system ultilization. In that role, I learned that I prefered to be on the tech side of things. </p>
        <p className='min-w-fit'>
          Currently working from home for FedEx as a Senior Claims Analyst. Within this position I recieved tuition reimbursment which gave me the opportunity to pursue a career in tech. I graduated from The University of Utah and obtained my Full-Stack Development certificate.
        </p>
        </div>
        <div className='justify-center'>
        <button className="btn btn-active justify-center"><Link to={'/projects'}>View Portfolio</Link></button>  
          </div>
        </div>
    </div>
  </div>

{/* skills */}
<h2 className='text-center pt-10 text-5xl	'>SKILLS</h2>
  <div className='resume flex flex-wrap justify-center p-8'>
<div className="card w-96 bg-neutral text-neutral-content">
  <div className="card-body items-center text-center">
    <h2 className="card-title">FRONTEND</h2>
    <div className='frontend'>
        <dl>
            <dt>HTML:</dt>
                <dd> - Forms & Validation</dd>
                <dd> - Semantic Tags</dd>
                <dd> - Accessibility</dd>
            <dt>CSS:</dt>
                <dd>- Flexbox</dd>
                <dd>- Responsive Design</dd>
                <dd>- Media Queries</dd>
            <dt>JavaScript:</dt>
                <dd> - ES6 + Syntax </dd>
                <dd> - DOM Manipulation </dd>
                <dd> - Fetch API or AJAX</dd>
                <dd> - Hoisting, Closures, Event Bubbling</dd>
        </dl>
        </div>
    <div className="card-actions justify-end">

    </div>
  </div>
</div>

<div className="card w-96 bg-neutral text-neutral-content">
  <div className="card-body items-center text-center">
    <h2 className="card-title">BACKEND</h2>
    <div className='backend'>
      
        <dl>
            <dt>Node.js</dt>
            <dt>Database:</dt>
                <dd>- MongoDB</dd>
                <dd>- GraphQL</dd>
                <dd>- MySQL</dd>
            <dt>API:</dt>
                <dd>- REST</dd>
                <dd>- JSON</dd>
                <dd>- SOAP</dd>
            <dt>Express.js</dt>
            <dt>Frameworks:</dt>
                <dd>- React.js</dd>
                <dd>- Bootstrap</dd>
                <dd>- Tailwind</dd>
        </dl>
        </div>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>

    </div>

    </div>
    </div>
  )
}

export default Landing