import React from 'react'
import './about.css'
import ME from '../../assets/me-img-about.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Узнать</h5>
      <h2>Обо мне</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME}  alt='About Image.'/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Мой опыт</h5>
              <small>Пол года фриланса</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Проекты</h5>
              <small>15+ завершенных проектов</small>
            </article>
          </div>

          <p className='about__text'>
          Обладаю хорошими знаниями JS, React, TS, Redux, умею верстать адаптивные макеты, умею писать Unit Test. Имею опыт создания проектов по техническому заданию. Высокий уровень активности в выполнении задач, люблю и умею налаживать эффективные коммуникации с людьми. Моя цель - достичь уровня middle как можно быстрее. На данный момент обучаюсь на 3 курсе вуза, обучение в основном онлайн, поэтому готов совмещать учебу и работу.
          </p>

          <a className='btn btn-primary' href='#contact'>Связаться со мной</a>
        </div>
      </div>
    </section>
  )
}

export default About