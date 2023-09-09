import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
     <div className="container">
      <hr/>
      <div className="bottom">
        <div className="left">
          <h2>FrameLancer</h2>
          <span>© FrameLancer International Ltd. 2023</span>
        </div>
        <div className="right">
          <div className="social">
          <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
          </div>
          <div className="link">
            <img src="/img/language.png" alt="" />
            <span>English</span>
          </div>
          <div className="link">
            <span>₹ INR</span>
          </div>
          <img src="/img/accessibility.png" alt="" />
          
        </div>
      </div>
     </div>
    </div>
  )
}

export default Footer
