import React, { useState } from 'react';
import './Digitalwrape.scss';
import { ImagesBaseUrl } from '../../SourceFiles/BaseUrl';

const Digitalwrape = () => {
    const [hoveredItem, setHoveredItem] = useState('digital1');

    const handleMouseEnter = (id) => {
        setHoveredItem(id);
    };

    const handleMouseLeave = () => {
        setHoveredItem(hoveredItem);
    };

    return (
        <div className="digital-wrap">
            <div className="digital-innerwrap row">
                <div className="leftdigital-content col-md-5">
                    <h6 className="leftdigital-sub-heading">Our Vision and Commitments</h6>
                    <div className="digitalinner-content">
                        <div
                            className="individual-digitalinner"
                            id="digital1"
                            onMouseEnter={() => handleMouseEnter('digital1')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <a className="digi-head">Capturing the True Spirit of Celebrations</a>
                            <p className="digi-txt">Yellow Mellow captures joy in pixels, turning moments into memories. With a vibrant touch, we craft visual tales that speak volumes. Your celebrations, our canvas—each frame a masterpiece. Experience the art of storytelling through our lens.</p>
                        </div>
                        <div
                            className="individual-digitalinner"
                            id="digital2"
                            onMouseEnter={() => handleMouseEnter('digital2')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <a className="digi-head">For the Discerning Hearts</a>
                            <p className="digi-txt">Yellow Mellow offers attractive plans and packages crafted with a keen eye for elegance. Our experienced photographers understand the importance of capturing every nuance, ensuring your satisfaction is our top priority.</p>
                        </div>
                        <div
                            className="individual-digitalinner"
                            id="digital3"
                            onMouseEnter={() => handleMouseEnter('digital3')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <a className="digi-head">For Those Who Value Authenticity</a>
                            <p className="digi-txt">Yellow Mellow specializes in premium Candid Wedding Photography that resonates with authenticity. Our skilled photographers understand the significance of candid moments, ensuring your wedding album tells a story that reflects your unique journey.</p>
                        
                        </div>
                    </div>
                </div>

                <div className="col-md-7 image-section mx-auto p-0">
                    {hoveredItem === 'digital1' && (
                        <img src={`${ImagesBaseUrl}/trueSpirtis.jpeg`} alt="Visions and commitments Images" className="img-fluid"  />
                    )}
                    {hoveredItem === 'digital2' && (
                        <img src={`${ImagesBaseUrl}/disceringhearts.jpeg`}  alt="Visions and commitments Images" className="img-fluid"  />
                    )}
                    {hoveredItem === 'digital3' && (
                        <img src={`${ImagesBaseUrl}/ssa.jpg`} alt="Visions and commitments Images" style={{height:"1087px", width:"1087px"}} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Digitalwrape;
