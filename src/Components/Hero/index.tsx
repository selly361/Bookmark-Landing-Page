import React from 'react'

function Hero() {
  return (
    <section className='hero'>
      <article className='hero__article'>
        <h1 className="heading--large">A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className='hero__article__buttons-container'>
          <button className='button--medium'>Get it on Chrome</button>
          <button className='button--grey'>Get it on Firefox</button>
        </div>
      </article>
      <div className='hero__illustration-container'>
        <img
          className='hero__illustration-container__hero-image'
          src='images/illustration-hero.svg'
          alt='hero illustration'
        />
      </div>
    </section>
  )
}

export default Hero
