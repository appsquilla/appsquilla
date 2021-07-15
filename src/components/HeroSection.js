import React from 'react'
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './HeroSection.css'


function HeroSection({
    lightBg, topLine, lightText, lightTextDesc, headline, description, button1Label, button2Label, img, alt, imgStart
}) {
    return (
        <>
      <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <div className='top-line'>{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
                <Link to='/services'>
                  <Button buttonSize='btn--wide' buttonColor='blue'>
                    {button1Label}
                  </Button>
                </Link>
                <a target='_blank' rel="noopener noreferrer" 
                href='https://www.secureserver.net/?pl_id=531866'>
                  <Button buttonSize='btn--wide' buttonColor='blue'>
                    {button2Label}
                  </Button>
                </a>
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src={img} alt={alt} className='home__hero-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    )
}

export default HeroSection
