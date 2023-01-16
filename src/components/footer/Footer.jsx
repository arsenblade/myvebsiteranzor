import React from 'react'
import './footer.css'
import {SlSocialVkontakte} from 'react-icons/sl'
import {FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Khuranov Arsen</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://vk.com/arsenkhuranovran'><SlSocialVkontakte className='footer__socials-icon'/></a>
        <a href='https://www.linkedin.com/in/arsen-khuranov/'><FaLinkedin className='footer__socials-icon'/></a>
      </div>
    </footer>
  )
}

export default Footer