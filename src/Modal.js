import React, { useState } from "react";
import "./App.css";  // Az App.css importálása

export default function Modal({ data, onClose, onCloseOverlay }) {
  // Képindex állapot (hogy melyik kép legyen aktív a modálban)
  const [currentImageIndex, setCurrentImageIndex] = useState(null); // Kezdetben nincs kiválasztott kép
  
  const images = [
    "/haziko.png",
    "/hazikok.jpg",
    "/tobbhaziko.jpg",
    "/tobbhaziko.jpg"
  ]; // A képek tömbje

  // A képre kattintva a megfelelő kép megjelenítése
  const openImageModal = (index) => {
    setCurrentImageIndex(index);
  };

  // Előző kép
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Következő kép
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="modal-overlay" onClick={onCloseOverlay}>
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>X</button>
        
        <div className="modal-left">
          <h2><strong>almafa</strong></h2>
          <h3>katiicaa</h3>
          <div className="modal-description">
            <p>1-2-3</p>
          </div>
        </div>

        <div className="modal-right">
          <div className="modal-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2653.266957184086!2d20.615783376308148!3d48.3169482712639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473f7098749f634d%3A0xcf7b5a5d609c05a4!2sKurity%C3%A1n%2C%20Kossuth%20Lajos%20%C3%BAt%20202%2C%203732!5e0!3m2!1shu!2shu!4v1739953824353!5m2!1shu!2shu"
              className="google-map"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Képek sorba */}
          <div className="modal-images">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                onClick={() => openImageModal(index)} // Kép kattintás
              />
            ))}
          </div>
        </div>
      </div>

      {/* Ha van aktív kép, akkor jelenjen meg a nagyított kép modál */}
      {currentImageIndex !== null && (
        <div className="image-modal">
          <button className="close-btn" onClick={() => setCurrentImageIndex(null)}>
            X
          </button>
          <div className="image-modal-content">
            <button className="nav-btn" onClick={prevImage}>&lt;</button>
            <img
              src={images[currentImageIndex]}
              alt="Large View"
              className="modal-image-large"
            />
            <button className="nav-btn" onClick={nextImage}>&gt;</button>
          </div>
        </div>
      )}
    </div>
  );
}
