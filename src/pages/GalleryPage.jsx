import React from 'react'
import image1 from '../assets/images/Rectangle 22.png'
import image2 from '../assets/images/Rectangle 23.png'
import image3 from '../assets/images/Rectangle 24.png'
import image4 from '../assets/images/Rectangle 25.png'
import image5 from '../assets/images/Rectangle 26.png'
import image6 from '../assets/images/Rectangle 27.png'
import image7 from '../assets/images/Rectangle 28.png'
import image8 from '../assets/images/Rectangle 29.png'
import image9 from '../assets/images/Rectangle 30.png'
import image10 from '../assets/images/Rectangle 31.png'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'


function GalleryPage() {
  const images =[
    image1, image2, image3, image4, image5, image6, image7, image8, image9, image10
    ]
  return (
    <div className='gallery-page'>
        
      <Header/>

      <div className='photo-content'>
        <div className='photo-text'>
        <p className='photo-text1'>Photo <br /> <span className='photo-text2'>gallery</span></p>
        </div>
        

        <div className='gallery-photo'>
            {
            images.map((img, index) =>(
                <img key={index} src={img} />
            ))
            }
        </div>
      </div>

      <Button/>

      <Footer/>
        
    </div>
  )
}

export default GalleryPage