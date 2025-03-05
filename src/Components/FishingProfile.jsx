import React from 'react'
import '../App.css'
import FishingPost from './FishingPost'
import './FishingStyle.css'

function FishingProfile() {
  return (
    <>
    <div className="header">
      <h1 className="header-title">Fisherman Georgios Athanasiadis</h1>
      <p className="header-subtitle">Look at my catch!</p>
    </div>  

    <FishingPost image='/post_shark.jpg' title='Piasame karxaria, xalara' date='5 Martios 2025' location='AGIA NAPA' />
    <FishingPost image='/post_fish1.jpg' title='Nice' date='4 Martios 2025' location='Coral Bay' />
    <FishingPost image='/post_fish2.png' title='Eimaste Safe' date='4 June 2024' location='Larnaka' />
    </>
  )
}

export default FishingProfile