import React from 'react'
import HomePage from './pages/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Connect from './pages/Connect'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/skills" element={<Skills />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
      <Route path="/contacts" element={<Connect/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App