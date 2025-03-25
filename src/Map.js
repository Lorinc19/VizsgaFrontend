import React, { useState } from 'react'
import "./App.css";
import "./Modal.css";

export default function Map() {
  // Állapotok a beviteli mezők tárolására
  const [orszag, setOrszag] = useState('');
  const [varmegye, setVarmegye] = useState('');
  const [telepules, setTelepules] = useState('');
  const [utcahazszam, setUtcahazszam] = useState('');
  const [mapUrl, setMapUrl] = useState(''); // Térkép URL-je

  // Űrlap elküldésekor a Google Maps URL generálása
  const handleSubmit = (e) => {
    e.preventDefault(); // Ne töltsük újra az oldalt

    // A cím összefűzése
    const address = `${utcahazszam} ${telepules}, ${varmegye}, ${orszag}`;
    
    // A cím kódolása URL-formátumba
    const encodedAddress = encodeURIComponent(address);
    
    // Google Maps Embed API link létrehozása
    const generatedMapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodedAddress}`;

    // Az URL beállítása az iframe src attribútumhoz
    setMapUrl(generatedMapUrl);
  };

  return (
    <div>
      {/* Form inputok a cím megadásához */}
      <form onSubmit={handleSubmit}>
        <label>
          Ország:
          <input
            type="text"
            value={orszag}
            onChange={(e) => setOrszag(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Vármegye:
          <input
            type="text"
            value={varmegye}
            onChange={(e) => setVarmegye(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Település:
          <input
            type="text"
            value={telepules}
            onChange={(e) => setTelepules(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Utcaházszám:
          <input
            type="text"
            value={utcahazszam}
            onChange={(e) => setUtcahazszam(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Térkép Megjelenítése</button>
      </form>

      {/* Dinamikusan frissített iframe, ha van Google Maps URL */}
      {mapUrl && (
        <div>
          <iframe
            src={mapUrl}
            className="google-map"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      )}
    </div>
  );
}

