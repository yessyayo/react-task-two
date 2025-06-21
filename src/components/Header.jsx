import React, { useState } from 'react'
import image from '../assets/images/Logo.png'
import { Link } from 'react-router-dom'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='header'>
      <div className='logo'>
        <img src={image} alt="Logo" />
      </div>

      {/* Hamburger icon for mobile */}
      <div className='hamburger' onClick={toggleMenu}>
        <i className={`pi ${isOpen ? 'pi-times' : 'pi-bars'}`} style={{ fontSize: '1.5rem' }}></i>
      </div>

      {/* Navigation menu  */}
      <div className={`navbar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li className='main'>
            <Link to='/' onClick={toggleMenu}>MAIN</Link>
          </li>
          <li>
            <Link to='/gallery' onClick={toggleMenu}>GALLERY</Link>
          </li>
          <li>
            <Link to='/project' onClick={toggleMenu}>PROJECTS</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
