import React from 'react'
import "./App.css";
import { Links } from 'react-router-dom';

export default function Map() {
  return (
    <div>
<iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2653.266957184086!2d20.615783376308148!3d48.3169482712639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473f7098749f634d%3A0xcf7b5a5d609c05a4!2sKurity%C3%A1n%2C%20Kossuth%20Lajos%20%C3%BAt%20202%2C%203732!5e0!3m2!1shu!2shu!4v1739953824353!5m2!1shu!2shu"
  class="google-map"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade">
</iframe>


    </div>
  )
}
