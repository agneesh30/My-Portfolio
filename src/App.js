import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import './App.scss'
import About from './Components/About'
import Contact from './Components/Contact'
import LandingPage from './Components/LandingPage'
import Skills from './Components/Skills'
import Work from './Components/Work'
import Navbar from './Pages/Navbar'
import ProjectDetails from './Components/ProjectDetails'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<><Navbar />
            <LandingPage />
            {/* <LandingPage1 /> */}
            <About />
            <Skills />
            <Work />
            <Contact />
          </>} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
