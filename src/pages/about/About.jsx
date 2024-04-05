import React from 'react'
import Header from '../../components/Header'
import './About.css'
import image from '../../Images/image.jpg'

function About() {
  return (
    <>
    <Header title={"About Us"} image={image}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, dolor?
      Nobis porro maiores nemo, natus similique illum optio provident culpa?
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={image} alt="Our Story Image"/>

        </div>
        <div className="about__story-content">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, maxime.
            Ipsam aliquid id neque fugiat non quod quos placeat obcaecati.
            Debitis dicta suscipit, error ipsum sed ipsa ea cupiditate voluptates!
            Quos fugit, provident laborum qui praesentium repudiandae quo laudantium atque?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur rem quis nobis, eos porro!
            Ipsa aliquam cumque nemo labore incidunt neque, veritatis assumenda perferendis commodi, quia possimus soluta excepturi.
            Qui optio ullam perspiciatis consectetur, voluptas quisquam unde laboriosam aspernatur neque fugit quia est rem.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla sunt mollitia dicta!
            Sint atque facere earum ad dolores obcaecati recusandae dolorum quam odit reiciendis?
          </p>
        </div>
      </div>
    </section>

    <section className="about__vision">
      <div className="container about__vision-container">
        <div className="about__story-content">
          <h1>Our Vision</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, maxime.
            Ipsam aliquid id neque fugiat non quod quos placeat obcaecati.
            Debitis dicta suscipit, error ipsum sed ipsa ea cupiditate voluptates!
            Quos fugit, provident laborum qui praesentium repudiandae quo laudantium atque?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur rem quis nobis, eos porro!
            Ipsa aliquam cumque nemo labore incidunt neque, veritatis assumenda perferendis commodi, quia possimus soluta excepturi.
            Qui optio ullam perspiciatis consectetur, voluptas quisquam unde laboriosam aspernatur neque fugit quia est rem.
          </p>
        </div>
        <div className="about__section-image">
          <img src={image} alt="Our Vision Image"/>

        </div>
      </div>
    </section>

    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={image} alt="Our Mission Image"/>

        </div>
        <div className="about__story-content">
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, maxime.
            Ipsam aliquid id neque fugiat non quod quos placeat obcaecati.
            Debitis dicta suscipit, error ipsum sed ipsa ea cupiditate voluptates!
            Quos fugit, provident laborum qui praesentium repudiandae quo laudantium atque?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur rem quis nobis, eos porro!
            Ipsa aliquam cumque nemo labore incidunt neque, veritatis assumenda perferendis commodi, quia possimus soluta excepturi.
            Qui optio ullam perspiciatis consectetur, voluptas quisquam unde laboriosam aspernatur neque fugit quia est rem.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla sunt mollitia dicta!
            Sint atque facere earum ad dolores obcaecati recusandae dolorum quam odit reiciendis?
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About