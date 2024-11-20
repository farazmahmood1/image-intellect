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
            <h3 className="sub-heading" style={{ fontWeight: 400 }}>About Yellow Mellow Films</h3>
            <p className="smallpara-txt" style={{ fontWeight: 400, paddingRight: "70px" }}>At Yellow Mellow, we understand that each wedding is a distinct chapter waiting to be told. Our team excels in adapting swiftly to your unique needs, creating memories brimming with joy, love, and emotions to be cherished for a lifetime. Based in Dallas, Houston, Austin, and San Antonio, our highly skilled Wedding Photographers & Cinematographers make Yellow Mellow the ultimate choice for your wedding photography needs.</p>
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
