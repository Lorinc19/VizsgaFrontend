import React from "react";
import "./App.css";  // Az App.css importálása

export default function Modal({ data, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>almafa</h2>
        <h3>katicaa</h3>
        <div className="modal-description">
          <p>1-2-3</p>
        </div>
        <div className="modal-images">
          <img src="/haziko.png" alt="Image" />
          <img src="/hazikok.jpg" alt="Image" />
          <img src="/tobbhaziko.jpg" alt="Image" />
          {/* Itt hozzáadhatunk több képet, például data.kepek */}
        </div>
      </div>
    </div>
  );
}