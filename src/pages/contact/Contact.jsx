import React from 'react'
import './Contact.css'
import image from '../../Images/values.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import Header from '../../components/Header'
import contactImage from '../../Images/things.jpg'

function Contact() {
  return (
    <>
    <Header title={"Get In Touch"} image={image}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, voluptatibus.
      Tempore aliquid quae inventore sed repellendus laborum ducimus necessitatibus provident?
    </Header>
    
    <section className="contact">
      <div className="container emailContainer">
        
      <div className="inputs__container">
        <h3>Let's Talk...</h3>
            <form>
              <div className="input__container">
                <input type={"text"} required={true}/>
                <label>First Name</label>
              </div>
              <div className="input__container">
                <input type={"text"} required={true}/>
                <label>Email</label>
              </div>
              <div className="input__container">
                <textarea name={"message"} cols="58" rows="5" required={true}></textarea>
                <label>Message</label>
              </div>

              <button className='btn lg'>Send Message</button>
            </form>
      </div>

      <div className="contact__image-container">

            <header className="img__container">
              <div className="header__container">
                  <img src={contactImage} alt="Contact Us Image" />

              </div>
            </header>

          </div>
        </div>

      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:maaede.pasandideh@gmail.com" target="_blank" rel='noreferror noopener'><MdEmail/></a>
          <a href="mailto:maaede.pasandideh@gmail.com" target="_blank" rel='noreferror noopener'><BsMessenger/></a>
          <a href="https://wa.me/+9809337712512" target="_blank" rel='noreferror noopener'><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact