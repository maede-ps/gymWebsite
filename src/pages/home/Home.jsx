import React from 'react'
import FAQs from '../../components/FAQs'
import Footer from '../../components/Footer'
import MainHeader from '../../components/MainHeader'
import NewsLetter from '../../components/NewsLetter'
import Programs from '../../components/Programs'
import Testimonials from '../../components/Testimonials'
import Values from '../../components/Values'
import './Home.css'

function Home() {
  return (
    <>
      <MainHeader/>
      <Programs/>
      <NewsLetter/>
      <Values/>
      <FAQs/>
      <Testimonials/>
    </>
  )
}

export default Home