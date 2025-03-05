import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Editprofile  from './Components/Editprofile.jsx'
import Profile from './Components/Profile.jsx' 
import FishingProfile  from './Components/FishingProfile.jsx'
import EditFishing  from './Components/EditFishing.jsx'


// Страница 404
const NotFound = () => <h1>🚫 404 - Страница не найдена</h1>;

function App() {

  return(
    <>    
      <Routes>
        <Route path="/" element= {<Profile />} />
        <Route path="/edit" element={<Editprofile />} />
        <Route path='/fishing-profile' element={<FishingProfile />} />
        <Route path='/fishing-edit' element={<EditFishing />} />
        <Route path="*" element={<NotFound />} />
      </Routes> 
    </>   
  )
}

export default App


