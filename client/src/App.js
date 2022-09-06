import './App.css';
import React, {useState} from 'react'
import About from "./pages/About"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import Resume from './pages/Resume';
import Nav from "./components/Nav"
import Landing from './pages/Landing';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState(0)

  function displayPage(){
    if(currentPage === 0){
      return <Landing></Landing>;
    }else if(currentPage === 1){
      return <About></About>
    }else if (currentPage === 2){
      return <Projects></Projects>
    } else if (currentPage === 3) {
      return <Contact></Contact>
    }
    else {
      return <Resume></Resume>
    }
  }

  return (
    <>
      <Nav setCurrentPage={setCurrentPage}/>
      {displayPage()}
    <main>
      <Footer></Footer>
    </main>
    </>
  )
}

export default App
