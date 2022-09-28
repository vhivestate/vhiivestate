import './App.css';
import React from 'react'
import About from "./pages/About"
import Contact from "./pages/Contact"
import Landing from "./pages/Landing"
import Projects from './pages/Projects';
import Nav from "./components/Nav"
import Footer from './components/Footer';
import Resume from './pages/Resume';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/resume" element={<Resume/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
