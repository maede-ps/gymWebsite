import image from '../Images/header.png'
import {Link } from 'react-router-dom'
import '../pages/home/Home.css'

function MainHeader() {
  return (
    <header className='main__header'>
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join The Legends of the Fitness World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, libero?
            Nostrum sit ipsam veritatis est amet molestiae cupiditate dolore doloremque?
          </p>
          <Link to="/plans" className="btn lg">Get Started</Link>
        </div>

        <div className="main__header-right">
          <div className="main__header-circle">
            
          </div><div className="main__header-image">
              <img src={image} alt="HeaderImage" className="mainLogoImage"/>
            </div>
        </div>
      </div>
      
    </header>
  )
}

export default MainHeader