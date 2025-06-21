import React from 'react'
import image from '../assets/images/logo.png'
import Header from '../components/Header'
import image1 from '../assets/images/Rectangle 6.png'

function LandingPage() {
  return (
    <div className='landing-page'>
        <div className='title-container'>
            <h1 className='title'>Landing page</h1>
            <img className='title-image' src={image} />
        </div>

        <div className='content-container'>
            {/* the imported header*/}
            <Header/>
            
            <div className='landing-content'>
                <div className='content-title'>
                    <p className='title1'>PROJECT <br /> <span className='title2'>NURTOWN</span></p>
                </div>
                
                <div>
                    <img src={image1} />
                </div>
            </div>
        </div>

    </div>
  )
}

export default LandingPage