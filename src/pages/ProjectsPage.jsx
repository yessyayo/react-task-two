import React from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import Footer from '../components/Footer'
import image from '../assets/images/image 30.png'
import image1 from '../assets/images/image 33.png'
import image2 from '../assets/images/image 32.png'
import ViewButton from '../components/ViewButton'

function ProjectsPage() {
const data = [
    {
        image: image,
        title: "Sample Project",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },

    {
        image: image1,
        title: "Sample Project 2",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    
    {
        image: image2,
        title: "Sample Project 3",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
];
  return (
    <div className='project-page'>
        <Header/>
        <div className='our-project'>
            <div className='project-heading'>
                <p>our <br /> <span>projects</span></p>
            </div>
            <div>
                {
                    data.map((item, index) =>(
                        <div key={index} className='project-data'>
                           
                            <img className='' src={item.image} />
                           
                            <div className='project-text'>
                                <h1>{item.title}</h1>
                                <p>{item.text}</p>
                                <ViewButton content='View More'/>
                            </div>

                        </div>
                        
                    ))
                }
            </div>
        </div>
        
        <Button/>
        <Footer/>
    </div>
  )
}

export default ProjectsPage