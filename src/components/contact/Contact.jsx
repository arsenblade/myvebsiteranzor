import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaWhatsapp} from 'react-icons/fa'
import {FaTelegramPlane} from 'react-icons/fa'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Связаться со мной</h5>
      <h2>Контакты</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>arsenblade@gmail.com</h5>
            <a href='mailto:arsenblade@gmail.com' target='_blank'>Отправить сообщение</a>
          </article>
          <article className='contact__option'>
            <FaTelegramPlane className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>@arsenblade</h5>
            <a href='tg://msg?text=Mi_mensaje&to=+89195859373' target='_blank'>Отправить сообщение</a>
          </article>
          <article className='contact__option'>
            <FaWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>89195859373</h5>
            <a href='https://api.whatsapp.com/send?phone=89195859373' target='_blank'>Отправить сообщение</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact