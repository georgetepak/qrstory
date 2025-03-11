import React, { useState } from 'react'
import './Philosophy.css'

function ShowProfile() {
    
    const quotes = [
        { philosopher: 'Socrates', quote: 'Ενα ξέρω ότι δεν ξέρω τίποτα' },
        { philosopher: 'Platon', quote: 'Η αγάπη είναι μια σοβαρή ψυχική ασθένεια' },
        { philosopher: 'Kant', quote: 'Science is organized knowledge. Wisdom is organized life.' },
      ];
    
      const questions = [
        'Τι βγήκε πρώτα, το αυγό ή η κότα;',
        'Μήπως ζούμε σε ένα Matrix;',
        'Τι σημαίνει γνώση;',
      ];
    
      const [email, setEmail] = useState('');
      const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you i will contact with you: ${email}`);
        setEmail('');
      };
    
      return (
        <div className="profile-container">
          {/* Header Section */}
          <div className="profile-header">
            <img
              src="/philosophy-profile.jpg"
              alt="Profile"
              className="profile-image"
            />
            <h1 className="profile-title">I'm Georgios Athanasiadis and I love philosophy</h1>
          </div>
    
          {/* Biography Section */}
          <div className="profile-section">
            <h2 className="section-title">Biography</h2>
            <p>
              A lifelong student of philosophy, I delve into ancient and modern thought to better
              understand the world and myself.
            </p>
            <div className="info-card">
              <h3 className="subsection-title">🧠📜 Favorite Philosophers</h3>
              <p>Socrates, Platonas, Immanuel Kant</p>
            </div>
            <div className="info-card">
              <h3 className="subsection-title">🌍⚖️ Favorite Philosophical Movements</h3>
              <p>Existentialism, Stoicism, Rationalism</p>
            </div>
            <div className="info-card">
              <h3 className="subsection-title">📚✨ Favorite Books</h3>
                <p>The Republic - Plato</p>
                <p>Critique of Pure Reason - Kant</p>
            </div>
          </div>
    
          {/* Favorite Quotes Section */}
          <div className="profile-section">
            <h2 className="section-title">Favorite Quotes</h2>
            <div className="quotes-grid">
              {quotes.map((item, index) => (
                <div key={index} className="quote-card">
                  <h4 className="quote-author">{item.philosopher}</h4>
                  <p className="quote-text">"{item.quote}"</p>
                </div>
              ))}
            </div>
          </div>
    
          {/* Philosophical Questions Section */}
          <div className="profile-section">
            <h2 className="section-title">Questions I'm Exploring</h2>
            <div className="quotes-grid">
              {questions.map((question, index) => (
                <div key={index} className="quote-card">
                  <p className="quote-text">{question}</p>
                </div>
              ))}
            </div>
          </div>
    
          {/* Contact Section */}
          <div className="profile-section contact-section">
            <h2 className="section-title">Contact Me</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <label htmlFor="email" className="contact-label">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="contact-input"
                placeholder="Enter your email"
              />
              <button type="submit" className="contact-button">Send</button>
            </form>
          </div>
        </div>
      );
}

export default ShowProfile