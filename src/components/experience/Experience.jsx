import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Какие у меня навыки</h5>
      <h2>Мой опыт</h2>
      <div className='experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Опытный</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                  <h4>TypeScript</h4>
                  <small className='text-light'>Опытный</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Опытный</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Опытный</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                  <h4>SCSS</h4>
                  <small className='text-light'>Уверенный</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                  <h4>Redux</h4>
                  <small className='text-light'>Уверенный</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                  <h4>Git</h4>
                  <small className='text-light'>Уверенный</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                  <h4>Mobx</h4>
                  <small className='text-light'>Начальный</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                  <h4>Unit Testing</h4>
                  <small className='text-light'>Начальный</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                  <h4>Bootstrap</h4>
                  <small className='text-light'>Начальный</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience