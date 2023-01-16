import React from 'react'
import CV from '../../assets/my-cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a className='btn' href={CV} download>Скачать Резюме</a>
      <a className='btn btn-primary' href='#contact'>Связаться со мной</a>
    </div>
  )
}

export default CTA