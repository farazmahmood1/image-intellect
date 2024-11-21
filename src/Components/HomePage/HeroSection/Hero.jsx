import React, { useRef } from 'react';
import './HeroStyles.scss';
import { Link } from 'react-router-dom';
import { ImagesBaseUrl } from '../../SourceFiles/BaseUrl';
import video from '../../SourceFiles/imag/video22.mp4'

const Hero = () => {
  const perspectivesRef = useRef(null);
  const scrollToPerspectives = () => {
    if (perspectivesRef.current) {
      perspectivesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  // njk

  return (
    <div>
      <div style={{ position: 'relative', bottom: -10 }}>
        <div className='Skip-to-Main-Content'>
          <button className='skip-main' onClick={scrollToPerspectives}>
            Skip to Main Content
          </button>
        </div>
        <video autoPlay loop width="100%" height="100%" muted playsInline id="video" className='video-section'>
          {/* <source src={`${ImagesBaseUrl}HeroSection.mp4`} type="video/mp4" /> */}
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <div className="video-info" ref={perspectivesRef}>
        <div className="videoPara">
          <p className="text-white">At our photography website, we recognize that every wedding tells a unique story. Our platform enhances the user experience by using advanced AI facial recognition technology. Users can take a selfie to start the identification process when they visit the site. Once the AI recognizes the user, it quickly retrieves related photos from our database. This feature allows users to easily access their desired images without the hassle of manual searches. Our skilled photographers and cinematographers are dedicated to capturing joyful, loving moments that will be cherished for a lifetime.
          </p>
          <a className="videoBtn">
          <Link to='/contact' style={{textDecoration:"none",color:"#000"}}>
            See Our Work
          </Link>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;