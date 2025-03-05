import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Login from './Components/Login/Login.jsx'
import Editprofile  from './Components/Editprofile.jsx' 


// Страница 404
const NotFound = () => <h1>🚫 404 - Страница не найдена</h1>;

function App() {

  return(
    <>    
      <Routes>
        <Route path="/" element= {<Login />} />
        <Route path="/edit" element={<Editprofile />} />
        <Route path="*" element={<NotFound />} />
      </Routes> 
    </>   
  )
}

export default App


