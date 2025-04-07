import React from 'react'
import "./SocailLink.css"
import {Github, Instagram, Linkedin } from "lucide-react"
import { IoLogoWhatsapp, IoLogoTwitter } from "react-icons/io";

export default function SocialLink() {
  return (
    <>
    <ul className="example-2">
  <li className="icon-content">
    <a
      data-social="spotify"
      aria-label="Spotify"
      href="https://wa.me/+918938850519"
    >
      <div className="filled"></div>
      <IoLogoWhatsapp />
    </a>
    <div className="tooltip ">Whatsapp</div>
  </li>
  <li className="icon-content">
    <a
      data-social="telegram"
      aria-label="X"
      href="https:/x.com/narendbugfixer"
    >
      <div className="filled"></div>
      <IoLogoTwitter />
    </a>
    <div className="tooltip">Twitter</div>
  </li>
  <li className="icon-content">
    <a
      data-social="dribbble"
      aria-label="Dribbble"
      href="https://www.instagram.com/nkriderking/"
    >
      <div className="filled"></div>
      <Instagram />
    </a>
    <div className="tooltip">Instagram</div>
  </li>
  <li className="icon-content">
    <a
      data-social="telegram"
      aria-label="Telegram"
      href="https://www.linkedin.com/in/narendra-a90182223/"
    >
      <div className="filled"></div>
      <Linkedin />
    </a>
    <div className="tooltip">Linkedin</div>
  </li>
  <li className="icon-content">
    <a
      data-social="pinterest"
      aria-label="Github"
      href="https://github.com/nkrider7"
    >
      <div className="filled"></div>
      <Github />
    </a>
    <div className="tooltip">Github</div>
  </li>
</ul>

    
    
    </>
  )
}
