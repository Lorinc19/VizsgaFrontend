import React, { useState } from 'react';
import './App.css';
import './Modal.css';

export default function Map() {
  // Állapotok a beviteli mezők tárolására
  const [mapUrl, setMapUrl] = useState(''); // Térkép URL-je
  const [customUrl, setCustomUrl] = useState(''); // Felhasználó által megadott URL

  // Űrlap elküldésekor az iframe URL beállítása
  const handleSubmit = (e) => {
    e.preventDefault(); // Ne töltsük újra az oldalt

    // Az URL beállítása az iframe src attribútumhoz
    setMapUrl(customUrl); // A felhasználó által megadott URL
  };

  return (
    <div>
      {/* Form input az URL megadásához */}
      <form onSubmit={handleSubmit}>
        <label>
          Térkép URL:
          <input
            type="text"
            value={customUrl}
            onChange={(e) => setCustomUrl(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Térkép Megjelenítése</button>
      </form>

      {/* Modal div, amely tartalmazza az iframe-et */}
      <div className="modal-right">
        <div className="modal-map">
          {/* Dinamikusan frissített iframe, ha van URL */}
          {mapUrl && (
            <iframe
              src={mapUrl} // Az URL, amit a felhasználó beírt
              className="google-map"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          )}
        </div>
      </div>
    </div>
  );
}
