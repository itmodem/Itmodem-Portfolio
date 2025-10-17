import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects/>
      <Contact/>
      <Footer />
    </>
  )
}

export default App
