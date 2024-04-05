import React from 'react'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Gallery from './pages/gallery/Gallery'
import Home from './pages/home/Home'
import NotFound from './pages/notFound/NotFound'
import Plans from './pages/plans/Plans'
import Trainers from './pages/trainers/Trainers'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'


function App() {
  return (
    <Router> 
    <NavBar/>
    <Routes> 
      <Route exact path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/plans' element={<Plans/>}/>
      <Route path='/trainers' element={<Trainers/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </Router>
  )
}

export default App