import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.scss'
const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="row ms-5">
            <div className="col-lg-3">
              <ul className="address1">
                <li><a href="#">Home</a></li>
                <li><a href="#">Photos</a></li>
              </ul>
            </div>
            <div className="col-lg-3">
              <ul className="address1">
                <li><a href="#">Videos</a></li>
                <li> <a href="#">Contact us</a></li>
              </ul>
            </div>
            {/* <div className="col-lg-3">
              <ul className="address1">
                <li><a href="#">Privacy Statement</a></li>
                <li><a href="#">Cokeies Statment</a></li>
                <li><a href="#">Terms of Use</a></li>
              </ul>
            </div> */}
            <div className="col-md-3">
              <ul className="social-icon">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/yellowmellowfilms?igsh=am1oNHpjcHhrdXZp&utm_source=qr" target='_blank'>
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              </ul>
              <div>
                <ul className="address1" style={{ fontSize: "12px" }}>
                  <li><a href="#">©2024 Yellow Mellow Films</a></li>
                  <li><a href="#">V 1.0.1</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>


  )
}

export default Footer