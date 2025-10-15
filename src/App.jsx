import { useState } from 'react'
import Home from './components/home'
import Table from './components/table'
import './App.css'
import { Route,Routes,BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/table" element={< Table/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
