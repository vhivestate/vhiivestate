import React from 'react'

function Resume() {
  return (

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
  )
}

export default Resume