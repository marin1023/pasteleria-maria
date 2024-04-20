import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Navbarpg from './Components/navbar';
import Footer from "./Components/Footer"

function App() {

  return (
    <>
    <header className='header-top'>
      <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbarpg />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
        
      </div>
      </header>
      
    </>
  )
}

export default App
