import React from 'react'

function Resume() {
  return (

<div className='resume'>
<h1>SKILLS</h1>
    <div className='skills'>
        <div className='frontend'>
        <h2>Frontend:</h2>
        <dl>
            <dt>HTML</dt>
                <dd> - Forms & Validation</dd>
                <dd> - Semantic Tags</dd>
                <dd> - Accessibility</dd>
            <dt>CSS</dt>
                <dd>- Flexbox</dd>
                <dd>- Responsive Design</dd>
                <dd>- Media Queries</dd>
            <dt>JavaScript</dt>
                <dd> - ES6 + Syntax </dd>
                <dd> - DOM Manipulation </dd>
                <dd> - Fetch API or AJAX</dd>
                <dd> - Hoisting, Closures, Event Bubbling</dd>
        </dl>
        </div>

        <div className='backend'>
        <h2>Backend: </h2>
        <dl>
            <dt>Node.js</dt>
            <dt>Database</dt>
                <dd>- MongoDB</dd>
                <dd>- GraphQL</dd>
                <dd>- MySQL</dd>
            <dt>API</dt>
                <dd>- REST</dd>
                <dd>- JSON</dd>
                <dd>- SOAP</dd>
            <dt>Express.js</dt>
            <dt>Frameworks</dt>
                <dd>- React.js</dd>
                <dd>- Bootstrap</dd>
                <dd>- Tailwind</dd>
        </dl>
        </div>
    </div>
    </div>
  )
}

export default Resume