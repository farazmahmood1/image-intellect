import React from 'react'
import './PerspectivesStyles.scss'
import { ImagesBaseUrl } from '../../SourceFiles/BaseUrl';
import { Link, useNavigate } from 'react-router-dom'
import Image1 from '../../SourceFiles/imag/pexels-a-r-shimanto-321946427-13779728.jpg'

const Index = () => {
    const navigate = useNavigate();

    const handlephotosnavigate = () => {
        navigate('/photos');
    };
    
    return (
        <div className='Prospective-mainwrape'>
            <div>
                <div className="toppanel-wrap" id="maincont">
                    <video autoPlay loop width="100%" height="100%" muted playsInline id="video" className="hidden-xs">
                        <source src={`${ImagesBaseUrl}Final.mp4`} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div class="background-image-container">
                <img class="background-image" src={Image1} alt="" />
                <div class="designthink-contsection">
                    <h2 className="sub-heading"><span className="yellow" style={{ color: "#fcc32b", fontWeight: 700 }}>For a Global Tapestry of Love</span></h2>
                    <p className="smallpara-txt text-white" style={{ fontStyle: "italic", fontWeight: 600 }}> Our photography website embraces the journey of love that crosses borders and traditions. By integrating advanced AI facial recognition technology, we celebrate the cultural richness of diverse unions through visual storytelling. When users visit the platform, they can take a selfie to start the AI identification process. Once recognized, the AI quickly retrieves related photos from our database. This unique feature allows users to effortlessly access their desired images, weaving together a tapestry of memories that resonate universally, without the hassle of manual searches..</p>
                    <div className="arrowbtn-wrap thinking-btnwrp">
                        <Link to='/photos' className="arrow-btn right-arrow">
                            <img src="https://www.nihilent.com/wp-content/themes/nihilent/images/yellowarrow.png" alt className="img-responsive" />
                        </Link>
                    </div>
                </div>
            </div>
            {/* services sectionn */}
            {/* <div className="container homeservices-mainwrap"> */}
            <div className="row  homeservice-innerwrap ">
                <h3 className="sub-heading text-center mt-5">Diverse Events We Capture</h3>
                <ul className="homeservice-listing">
                    {/* Service 1 */}
                    <li className="col-md-6">
                        <div className="individualhome-servicelist">
                            <div className="homeservice-imgsect">
                                <img
                                    src={`${ImagesBaseUrl}enagagment.jpeg`}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <div className="homeservice-contsect">
                                <div className='homeservice-contsect-inner'>
                                    <h5 className="homeservice-head">Engagements Ceremony</h5>
                                    <p className="homeservice-cont">
                                        Capture the love in every glance, making your engagement timeless and unforgettable
                                    </p>
                                </div>
                                    <button
                                        type='submit'
                                        className='btn  btn-outline-dark arrowbtn-wrap '
                                        onClick={handlephotosnavigate}
                                    >
                                        <i className="fa-solid fa-arrow-right"  onClick={handlephotosnavigate}></i>
                                    </button>
                            </div>
                            <div className="perform-overlay" />
                        </div>
                    </li>
                    <li className="col-md-6 ">
                        <div className="individualhome-servicelist">
                            <div className="homeservice-imgsect">
                                <img
                                    src={`${ImagesBaseUrl}mehendi.jpeg`}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <div className="homeservice-contsect">
                                <div className='homeservice-contsect-inner'>
                                    <h5 className="homeservice-head">Mehendi Ceremony</h5>
                                    <p className="homeservice-cont">
                                        Capture the intricate beauty of Mehendi, where artistry meets matrimonial tradition. Cherish moments forever                                    </p>
                                </div>
                                <button
                                        type='submit'
                                        className='btn  btn-outline-dark arrowbtn-wrap '
                                        onClick={handlephotosnavigate}
                                    >
                                        <i className="fa-solid fa-arrow-right"  onClick={handlephotosnavigate}></i>
                                    </button>
                            </div>
                            <div className="perform-overlay" />
                        </div>
                    </li>
                    <li className="col-md-6">
                        <div className="individualhome-servicelist">
                            <div className="homeservice-imgsect">
                                <img
                                    src={`${ImagesBaseUrl}haldi.jpeg`} alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <div className="homeservice-contsect">
                                <div className='homeservice-contsect-inner'>
                                    <h5 className="homeservice-head">Haldi Event</h5>
                                    <p className="homeservice-cont">
                                        Capture vibrant moments of joy during the Haldi ceremony, radiating love and tradition                                    </p>
                                </div>
                                <button
                                        type='submit'
                                        className='btn  btn-outline-dark arrowbtn-wrap '
                                        onClick={handlephotosnavigate}
                                    >
                                        <i className="fa-solid fa-arrow-right"  onClick={handlephotosnavigate}></i>
                                    </button>
                            </div>
                            <div className="perform-overlay" />
                        </div>
                    </li>
                    <li className="col-md-6">
                        <div className="individualhome-servicelist">
                            <div className="homeservice-imgsect">
                                <img
                                    src={`${ImagesBaseUrl}marriage.jpeg`}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <div className="homeservice-contsect">
                                <div className='homeservice-contsect-inner'>
                                    <h5 className="homeservice-head">Wedding Ceremony</h5>
                                    <p className="homeservice-cont">
                                        Celebrate love through captivating moments. Your wedding, our timeless frames, forever cherished                                    </p>
                                </div>
                                <button
                                        type='submit'
                                        className='btn  btn-outline-dark arrowbtn-wrap '
                                        onClick={handlephotosnavigate}
                                    >
                                        <i className="fa-solid fa-arrow-right"  onClick={handlephotosnavigate}></i>
                                    </button>
                            </div>
                            <div className="perform-overlay" />
                        </div>
                    </li>
                </ul>
            </div>
            {/* </div> */}
        </div>
    )
}

export default Index;