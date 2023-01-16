import React from 'react'
import './portfolio.css'
import imgReactLearn from '../../assets/react-learn-project.png'
import imgCinema from '../../assets/cinema-project.png'
import imgTrello from '../../assets/trello-project.png'
import imgCloudDisk from '../../assets/cloud-disk-project.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Мои последние работы</h5>
      <h2>Портфолио</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={imgReactLearn} alt='' />
            <span>All platforms</span>
          </div>
          <h3>Сайт для изучения React</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/arsenblade/front-react-learn' className='btn' target='_blank'>GitHub</a>
            <a href='https://react-learn-rho.vercel.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={imgCinema} alt='' />
            <span>Only desktop</span>
          </div>
          <h3>Онлайн кинотеатр</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/arsenblade/Project-Cinema-Final' className='btn' target='_blank'>GitHub</a>
            <a href='https://cinemascope.vercel.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={imgTrello} alt='' />
            <span>Only desktop</span>
          </div>
          <h3>Имитация доски задач - Trello</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/arsenblade/my-trello' className='btn' target='_blank'>GitHub</a>
            <a href='https://my-trello-front.vercel.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={imgCloudDisk} alt='' />
            <span>Only desktop</span>
          </div>
          <h3>Облачное хранилище</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/arsenblade/client-cloud-disk' className='btn' target='_blank'>GitHub</a>
            <a href='https://google-front-disk.vercel.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio