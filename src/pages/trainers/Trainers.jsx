import React from 'react'
import './Trainers.css'
import Header from '../../components/Header'
import image from '../../Images/image.jpg'
import {FaLinkedin} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {trainers} from '../../data'
import Trainer from '../../components/Trainer'

function Trainers() {
  return (
    <>
    <Header title={"Our Trainers"} image={image}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, rerum.
      Sit quis reiciendis cumque, deleniti labore atque modi aut sunt.
    </Header>
    <div className="trainers">
      <div className="container trainers__container">
        {
          trainers.map(({id,image,name,job,socials})=>{
            return <Trainer key={id} name={name} job={job} image={image} socials={
              [
                {icon: <AiFillInstagram/>,link:socials[0]},
                {icon: <FaLinkedin/>,link:socials[1]},
                {icon: <FaFacebook/>,link:socials[2]},
                {icon: <AiOutlineTwitter/>,link:socials[3]},
              ]
            }/>
          })
        }
      </div>
    </div>
    </>
  )
}

export default Trainers