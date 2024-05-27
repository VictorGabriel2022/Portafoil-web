import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import { ThemeProvider } from './Context/ThemeContext'
import Control from './Control'
import Index from './Index'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Projects from './Projects'
import Cv from './Cv'

function App() {
 

  return (
  
      <ThemeProvider>
          <Control/>
          <BrowserRouter>
          <Navbar/> 
           <Routes>
            <Route path='/' element={<Index/> } />
             <Route path='/proyects' element={<Projects/>} />
             <Route path='/cv' element={<Cv/>} />
           </Routes>
          </BrowserRouter>
          
          
          
     </ThemeProvider>

  )
}

export default App
