import React from 'react'
import './FishingStyle.css'

function EditFishing() {
  return (
    <div className="profile-container">
      <h1 className="profile-title">Welcome Georgios Athanasiadis to your profile!</h1>

      <h2>NEW POST:</h2>

      <form className="post-form">
        {/* Дата */}
        <label className="form-label">Date</label>
        <input type="date" className="form-input" />

        {/* Местоположение */}
        <label className="form-label">Location</label>
        <input type="text" className="form-input" placeholder="Enter location" />

        {/* Описание */}
        <label className="form-label">Description</label>
        <textarea className="form-textarea" placeholder="Write something about your catch..."></textarea>

        {/* Выбор изображения */}
        <label className="form-label">Upload Image</label>
        <input type="file" className="form-file-input" accept="image/*" />

        {/* Кнопка отправки */}
        <button type="submit" className="form-button">Publish</button>
      </form>
    </div>
  )
}

export default EditFishing