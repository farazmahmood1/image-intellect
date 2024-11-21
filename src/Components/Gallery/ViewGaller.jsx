import React, { useEffect, useRef, useState } from 'react'
import './GalleryCss.scss';
import { ImagesBaseUrl } from '../SourceFiles/BaseUrl';


import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

import Webcam from 'react-webcam';

toast.configure();

const ViewGaller = () => {
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    useEffect(() => {
        topFunction();
    }, []);

    const webcamRef = useRef(null);
    const [capturedImage, setCapturedImage] = useState(null);
  
    const capture = () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setCapturedImage(imageSrc);
    };

    return (
        <>
            <div className='contact-photo-section' style={{ backgroundColor: "#e9e9e9" }}>
                <div className='contact-title-image'>
                    <img itemProp="image" src={`${ImagesBaseUrl}Capture.PNG`} alt=" " />
                </div>
            </div>
            <div className='row my-contact-form'>
                <div className='col-lg-12 contact-info'>
                    <h2>Create and Customize Your Events</h2>
                    <p>
                        Unleash the power of personalization with our <strong>Event Generator</strong>! At Image-Intellect, we make it easy
                        for you to create, organize, and manage events linked to your photo collections. Whether it’s a birthday, wedding,
                        corporate event, or any special occasion, you can generate and customize events seamlessly.
                    </p>

                    <h3>How It Works</h3>
                    <ol>
                        <li>
                            <strong>Define Your Event:</strong> Provide key details like the event name, date, and description to get started.
                        </li>
                        <li>
                            <strong>Add Relevant Photos:</strong> Link your event to specific images in your database using our intuitive
                            search and facial recognition tools.
                        </li>
                        <li>
                            <strong>Customize Details:</strong> Personalize your event by tagging participants, setting themes, and adding notes.
                        </li>
                        <li>
                            <strong>View and Share:</strong> Instantly access a curated gallery of event-related images and share it with
                            friends or colleagues effortlessly.
                        </li>
                    </ol>

                    <div className="row mt-5">
      <div className="col-lg-6 mx-auto bg-warning" style={{ height: "400px" }}>
        <div className="d-flex justify-content-center align-items-center" style={{ height: "400px" }}>
          {/* Webcam Component */}
          {!capturedImage ? (
            <>
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={300}
                height={400}
                videoConstraints={{
                  facingMode: "user", // Switch to "environment" for back camera
                }}
              />
              <button className="btn btn-dark btn-lg mx-auto mt-3" onClick={capture}>
                Capture Selfie
              </button>
            </>
          ) : (
            <div>
              <img src={capturedImage} alt="Captured" style={{ width: "100%", height: "auto" }} />
              <button className="btn btn-dark btn-lg mx-auto mt-3" onClick={() => setCapturedImage(null)}>
                Retake Selfie
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
                </div>

            </div>
        </>
    )
}

export default ViewGaller