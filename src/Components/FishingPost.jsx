import React from 'react'

function FishingPost({ image, title, date, location }) {
  return (
    <div className="post-card">
      <div className="post-header">
        <span className="post-date">{date}</span>
        <span className="post-location">{location}</span>
      </div>
      <img src={image} alt="Post" className="post-image" />
      <h2 className="post-title">{title}</h2>
    </div>
  )
}

export default FishingPost