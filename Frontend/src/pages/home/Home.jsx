import React from 'react'
import "./Home.scss"
import Featured from '../../components/featured/Featured'
import Slide from '../../components/slide/Slide'
import SlideProj from '../../components/slideProj/SlideProj'
import {Link} from "react-router-dom";
const Home = () => {
  return (
    <div className='home'>
      <Featured/>
    
      <div id='explore'><Slide/></div>
      
      <div className="features">
        <div className="container">
          <div className="item">
            <h1> Elevate Your Photography Journey with FrameLancer</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Talent
            </div>
            <p>Find Skilled Photographers for Every Occasion</p>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Diversity
            </div>
            <p>From Portraits to Landscapes, Your Vision Comes to Life</p>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Connection
            </div>
            <p>Real-Time Messaging for Seamless Collaboration</p>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Security
            </div>
            <p>Hassle-Free Payments, Every Time</p>

            
          </div>
          <div className="item">
          <img className='img1' src="https://img.freepik.com/premium-photo/photographer-s-workplace-with-camera-graphics-tablet-yellow-background_326533-1534.jpg?size=626&ext=jpg&ga=GA1.2.1225027707.1693839527" 
            alt="" />
          </div>
        </div>
      </div>


      <div className="features dark" id="f2">
        <div className="container">
          <div className="item">
            <h1><span className='brandname'>FrameLancer</span><span className='backqoute'>`</span> Business</h1>
            <h1>Capture Moments,<br/> Connect Creatives</h1>
            <p>Discover the world of FrameLancer – where creativity meets collaboration!</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Explore breathtaking projects
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect directly with photographers
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Secure payments for seamless transactions
            </div>

            <Link className="link" to="/register">
              <button>Join FrameLancer</button>
              </Link>
            
          </div>
          <div className="item">
            <img className='img2' src="https://img.freepik.com/free-photo/stylish-couple-love-sitting-street-romantic-trip-taking-photo_285396-9917.jpg?size=626&ext=jpg&ga=GA1.1.1225027707.1693839527&semt=ais"
             alt="" />
          </div>
        </div>
      </div>
      <SlideProj/>
    </div>
  )
}

export default Home
