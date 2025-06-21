import React from 'react'
import image from '../assets/images/Footer.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-content'>
            <div className='footer-logo'>
                <img src={image} />
            </div>

            {/* information and contact */}
            <div className='footer-info'>
                {/* information */}
                <div className='content-info'>  
                    <h1 className='info-title'>Information</h1>
                    <p><Link to='/'>Main</Link></p>
                    <p><Link to='/gallery'>Gallery</Link></p>
                    <p><Link to='/project'>Projects</Link></p>
                    <p>Certifications</p>
                    <p>Contacts</p>
                </div>
                {/* contact */}
                <div className='contact-info'>
                    <h1 className='info-title'>Contacts</h1>
                    <div className='contact-text'>
                        <p>
                            <i className='pi pi-map-marker' style={{marginRight: '8px'}}></i>
                            1234 Sample Street <br /> Austin Texas 78704
                        </p>
                        <p>
                            <i className='pi pi-phone' style={{marginRight: '8px'}}></i>
                            512-333-2222
                        </p>
                        <p>
                            <i className='pi pi-envelope' style={{marginRight: '8px'}}></i>
                            sampleemail@gmail.com
                        </p>
                    </div>
                    
                </div>
            </div>
            {/* social media */}
            <div className='footer-icon'>
                <div>
                    <h1 className='info-title'>Social Media</h1>
                </div>
                <div className='icon'>
                    <i className='pi pi-facebook'></i>
                    <i className='pi pi-twitter' ></i>
                    <i className='pi pi-linkedin' ></i>
                    <i className='pi pi-pinterest' ></i>
               </div>
            </div>
        </div>

        <div className='copyright'>
          <p>© 2021 All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer