import React from 'react'
import image from '../assets/images/Logo.png'
import Header from '../components/Header'
import image1 from '../assets/images/Rectangle 6.png'
import Button from '../components/Button'
import ViewButton from '../components/ViewButton'
import photo1 from '../assets/images/Rectangle 8.png'
import photo2 from '../assets/images/Rectangle 9.png'
import photo3 from '../assets/images/Rectangle 10.png'
import figure1 from '../assets/images/image 1.png'
import figure2 from '../assets/images/image 2.png'
import picture1 from '../assets/images/Rectangle 12.png'
import picture2 from '../assets/images/image 15.png'
import picture3 from '../assets/images/image 16.png'
import picture4 from '../assets/images/image 17.png'
import picture5 from '../assets/images/image 18.png'
import contactpics from '../assets/images/image 12.png'
import Footer from '../components/Footer'


function LandingPage() {
    const info =[
        {
            image:  figure1,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.'
        },

        {
            image: figure2,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.'
        }
    ]

  return (
    <div className='landing-page'>
        <div className='content-container'>
            {/* the imported header*/}
            <Header/>
            <div className='landing-surface'>
                {/* hero section */}
                <div className='landing-content'>
                    <div className='content-title'>
                        <p className='title1'>PROJECT <br /> <span className='title2'>LORUM</span></p>
                        <Button className='landing-override'/>
                    </div>
                    
                    <div className='hero-section'>
                        <div className='hero-image'>
                            <img src={image1} />
                        </div>
                    
                        <div className='hero-button'>
                            <ViewButton content='View Project'/>
                        </div>
                    </div>
                </div>

                {/* about section */}
                <div className='about-section'>
                    <div className="about-images">
                
                        <div className='img1'>
                            <img src={photo1}  className="img img1" />
                            <img src={photo3}  className="img img3" />
                        </div>
                        <div className='img2'>
                                <img src={photo2}  className="img img2" />
                        </div>
            
                    </div>

                    <div className='about-content'>
                        <h2>ABOUT</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown 
                            printer took a galley of type and scrambled it to make a 
                            type specimen book. It has survived not only five centuries, 
                            but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <ViewButton content='Read More'/>
                    </div>
                </div>

                {/* call to action */}
                <div className='action-content'>
                    <h1>Main Focus/Mission Statement</h1>
                    <div className='action-flex'>
                        {
                          info.map((item, index) =>(
                            <div key={index} className='action-text'>
                                <img src={item.image} />
                                <p>{item.text}</p>
                            </div>
                          )) 
                        }
                        

                    </div>
                </div>

                {/* project sample section */}
                <div className='project-sample'>
                    <h1>Our Projects</h1>

                    <div className='project-pics'>
                        <div  className='top-pics'>
                            <div className='text-wrapper'>
                                <img src={picture1} className='image1'/>
                                <div className='project-overlay'>
                                    <h3>Sample <br /> Project</h3>
                                    <ViewButton content='VIEW MORE' className='overlay-button'/>
                                </div>
                            </div>
                           <div>
                             <img src={picture2} />
                           </div>
                        </div>

                        <div  className='bottom-pics'>
                            <img src={picture3} />
                            <img src={picture4} />
                            <img src={picture5} />
                        </div>
                    </div>
                    
                    <div className='all-project-content'>
                         <ViewButton content='ALL PROJECTS' className='all-project'/>
                    </div>
                </div>


                {/* contact section */}
                <div className='contact-content'>
                    <h1>Contact Us</h1>
                    <div className='contact-form'>
                        <form action="">
                            <input type="text" placeholder='Name'/>
                            <input type="text" placeholder='Phone Number' />
                            <input type="text" id='email' placeholder='E-mail'/>
                            <input type="text" placeholder='Interested In' />
                            <textarea name="" id="" placeholder='Message'></textarea>
                        </form>

                        <div className='contact-image'>
                            <img src={contactpics}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>

    </div>
  )
}

export default LandingPage