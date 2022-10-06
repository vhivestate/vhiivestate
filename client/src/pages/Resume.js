import React from 'react'
import { Download } from 'react-feather';
import ResumePdf from '../assets/resume.22.pdf'
import Badge from '../assets/badge-code.png'

function Resume() {
  return (
<div className='resume-page'>

<div className='download-res '>
<h1 className='text-center pt-14 p-4 text-3xl'>Download my resume</h1>
  <div className='flex flex-wrap justify-center'>
    <button className='text-center'><a href={ResumePdf} download="resume.22.pdf"><Download></Download></a>
    </button>
  </div>
</div>

<h2 className='text-center text-3xl p-5'>Certifications</h2>
<div className='flex flex-wrap justify-center'>
  <div className="card w-96 glass shadow-xl ">
    <figure className='p-5'><img src={Badge} alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title justify-center">University of Utah</h2>
      <p className='text-center'>Full Stack Developer Certification</p>
      <div className="card-actions justify-center">
      <button className="btn btn-primary">
                <a href='https://www.credly.com/badges/e6040418-d001-43ac-ade5-cc7f8da2fe4d/linked_in_profile'>View Credential</a>
            </button>
        </div>
    </div>
  </div>
</div>

<h2 className='text-center text-3xl p-5'>Skills</h2>
<div className='resume flex flex-wrap justify-center'>
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
  )
}

export default Resume