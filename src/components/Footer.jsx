import {Link} from 'react-router-dom'
import Logo from '../Images/logo.png'
import {FaLinkedin} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

function Footer() {
  return (
    <footer>
        <div className="container footer__container">
            <article>
        <h3>Subscribe and Search our Newsletter...</h3>
            <form>
              <div className="input__container">
                <input type={"text"} required={true} placeholder="Search the Name"/>
              </div>
              <button className='btn sm'>Explore</button>
            </form>
            
            </article>
            <article>
                {/* <h4>Permalinks</h4> */}
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                {/* <h4>Insights</h4> */}
                <Link to="/s">Blog</Link>
                <Link to="/s">Case Studies</Link>
                <Link to="/s">Events</Link>
                <Link to="/s">Communities</Link>
                <Link to="/s">FAQs</Link>
            </article>
            <article>
                <h4>Get In Touch</h4>
                <div className="footer__socials">
                    <a href="https://linkedin.com/" target="_blank" rel='noreferrer noopener'><FaLinkedin/></a>
                    <a href="https://Instagram.com/" target="_blank" rel='noreferrer noopener'><AiFillInstagram/></a>
                    <a href="https://facebook.com/" target="_blank" rel='noreferrer noopener'><FaFacebook/></a>
                    <a href="https://twitter.com/" target="_blank" rel='noreferrer noopener'><AiOutlineTwitter/></a>
                </div>
            </article>
        </div>
        <div className="footer__copyright">
            <small>2022 &copy; All rights reserved </small>
        </div>
    </footer>
  )
}

export default Footer