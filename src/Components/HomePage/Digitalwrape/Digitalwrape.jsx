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
                            <a className="digi-head">Vision:</a>
                            <p className="digi-txt">We envision a world where every love story, regardless of its cultural background, is beautifully captured and easily accessible. Our goal is to create an inclusive platform that celebrates diversity through photography, allowing users to connect with their unique narratives.
                            </p>
                        </div>
                        <div
                            className="individual-digitalinner"
                            id="digital2"
                            onMouseEnter={() => handleMouseEnter('digital2')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <a className="digi-head">Commitments: </a>
                            <p className="digi-txt">Cultural Celebration: We are dedicated to honoring and showcasing the rich tapestry of different cultures and traditions in every wedding story we capture.
User-Centric Experience: We commit to providing a seamless and intuitive user experience, enabling easy access to cherished memories through our advanced AI technology.
Privacy and Security: We prioritize the privacy and security of our users, implementing robust measures to protect their personal data and images.
Continuous Innovation: We are committed to continually enhancing our platform with the latest technology to improve user experience and photo retrieval.
Quality and Excellence: Our team of skilled photographers and cinematographers is dedicated to delivering high-quality visual storytelling that reflects the joy and emotion of each unique love story.</p>
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
