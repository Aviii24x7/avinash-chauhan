import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Footer from './components/Footer'


function App() {

  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Projects />
    <Contacts />
    <Footer />
    </>
    )
}

export default App
