// Homeabout.js
import React from 'react';
import './Homeabout.scss';
import { ImagesBaseUrl } from '../../SourceFiles/BaseUrl';

const Homeabout = () => {
  return (
    <div className="homeabout-container">
      <div className="homeabt-img">
        <img
          src={`${ImagesBaseUrl}cover1.jpg`} alt="cover image"
          style={{ width: "100%" }}
          className="img-fluid"
        />
        <div className="overlay col-lg-7">
          <div className="homeabt-content">
            <h3 className="sub-heading" style={{ fontWeight: 400 }}>About Image Inellect</h3>
            <p className="smallpara-txt" style={{ fontWeight: 400, paddingRight: "70px" }}>At our photography website, we are dedicated to transforming the way users experience and access their cherished memories. By integrating cutting-edge AI facial recognition technology, we provide a seamless platform for users to connect with their personal photo collections.

Upon visiting our site, users can take a selfie to initiate the AI identification process. Once the system recognizes the individual, it quickly retrieves related photos from our extensive database, making it easy to find and enjoy treasured moments without the need for tedious manual searches.

Our mission is to celebrate the beauty of every story through innovative technology, ensuring that each user can effortlessly relive their most significant memories. We are committed to providing a user-friendly experience that prioritizes privacy and security, empowering users to navigate their unique photo journeys with ease and confidence.</p>
            {/* <ul className="homeabt-listing list-inline d-flex ">
              <li>
                <h4 className="bigtxt">20+ Marriages</h4>
                <p className="smalltxt">of diverse culture</p>
              </li>
              <li className='ms-5'>
                <h4 className="bigtxt">14 Successful Events</h4>
                <p className="smalltxt">All around USA</p>
              </li>
            </ul> */}
            <div className="arrowbtn-wrap mb-3">
              <a href="/contact" className="rightarrow" style={{ border: "0.2px solid black", padding: "5px 10px 10px 10px" }}>
                <img src="https://www.nihilent.com/wp-content/themes/nihilent/images/blackarrow.png" alt className="img-fluid" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homeabout;
