import React, { useState } from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {GiBrain} from 'react-icons/gi'
import {BiMessageSquareDetail} from 'react-icons/bi'
import cn from 'classnames'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a className={cn({'active': activeNav === '#'})} href='#' onClick={() => setActiveNav('#')}>
        <AiOutlineHome />
      </a>
      <a className={cn({'active': activeNav === '#about'})} href='#about' onClick={() => setActiveNav('#about')}> 
        <AiOutlineUser />
      </a>
      <a className={cn({'active': activeNav === '#experience'})} href='#experience' onClick={() => setActiveNav('#experience')}> 
        <GiBrain />
      </a>
      <a className={cn({'active': activeNav === '#portfolio'})} href='#portfolio' onClick={() => setActiveNav('#portfolio')}>
        <BiBook />
      </a>
      <a className={cn({'active': activeNav === '#contact'})} href='#contact' onClick={() => setActiveNav('#contact')}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  )
}

export default Nav