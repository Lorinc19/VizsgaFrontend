import React from "react";
import "./App.css";  // Az App.css importálása

export default function Modal({ data, onClose, onCloseOverlay }) {
  return (
    <div className="modal-overlay" onClick={onCloseOverlay}>
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>X</button>
        
        <div className="modal-left">
          <h2>almafa</h2>
          <h3>katicaa</h3>
          <div className="modal-description">
            <p>1-2-3</p>
          </div>
        </div>

        <div className="modal-right">
          <div className="modal-images">
            <img src="/haziko.png" alt="Image" />
            <img src="/hazikok.jpg" alt="Image" />
            <img src="/tobbhaziko.jpg" alt="Image" />
          </div>
        </div>
      </div>
    </div>
  );
}
