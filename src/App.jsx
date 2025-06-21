import { useState } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage'
import GalleryPage from './pages/GalleryPage'
import 'primeicons/primeicons.css';
import ProjectsPage from './pages/ProjectsPage'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Routes>

          <Route path='/' element={<LandingPage/>} />
          <Route path='/gallery' element={<GalleryPage/>} />
          <Route path='/project' element={<ProjectsPage/>} />

        </Routes>

      </div>
    </>
  )
}

export default App
