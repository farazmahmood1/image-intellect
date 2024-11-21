import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import './CreateEventStyles.scss';
import { ImagesBaseUrl } from '../SourceFiles/BaseUrl';
import logo from '../Assets/whatsappLogo.png';
import instagram from '../Assets/instagram.svg';

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

import { FileUploadWithPreview } from 'file-upload-with-preview';
import 'file-upload-with-preview/dist/style.css';

toast.configure();

const CreateEvent = () => {

    const form = useRef();

    useEffect(() => {
        const upload = new FileUploadWithPreview('my-unique-id');
      }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6vwdpsi', 'template_5h9q2vj', form.current, 'fMQvrpfom-njEK9-D')
            .then((result) => {
                console.log(result.text);
                toast.success("Thank you for reaching out!");
            }, (error) => {
                console.log(error.text);
                toast.warn("Something went wrong");
            });
    };

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    useEffect(() => {
        topFunction();
    }, []);

    return (
        <>
            <div className='contact-photo-section' style={{ backgroundColor: "#e9e9e9" }}>
                <div className='contact-title-image'>
                    <img itemProp="image" src={`${ImagesBaseUrl}Capture.PNG`} alt=" " />
                </div>
            </div>
            <div className='row my-contact-form'>
                <div className='col-lg-8 contact-info'>
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

                    <h3>Why Use Our Event Generator?</h3>
                    <ul>
                        <li><strong>Effortless Organization:</strong> Keep your event memories perfectly organized in one place.</li>
                        <li><strong>Quick Photo Linking:</strong> Use our AI-powered recognition to connect photos with events automatically.</li>
                        <li><strong>Customizable Options:</strong> Tailor the event details to suit your specific needs.</li>
                        <li><strong>Seamless Sharing:</strong> Share event galleries directly via email or social media.</li>
                    </ul>

                    <p>
                        Create your events in just a few clicks and relive your moments anytime, anywhere! <strong>Start generating
                            events now with Image-Intellect.</strong>
                    </p>
                    <div className='contact-details' style={{ marginBottom: "5px" }}>
                        <p>Contact us:</p>
                        <a target='_blank' href='https://wa.me/+30012345678' style={{ textDecoration: "none" }} ><img src={logo} style={{ width: "35px" }} /> +30012345678</a>
                    </div>
                    <div className='contact-details'>
                        <a target='_blank' href="" style={{ textDecoration: "none" }} ><img src={instagram} style={{ width: "25px", marginLeft: "2px" }} />&nbsp;&nbsp;&nbsp;image intellect</a>
                    </div>
                </div>

                {/* updates */}
                <div className='col-lg-4 contact-form'>
                    <form ref={form} onSubmit={sendEmail} className='form-form'>
                        <label htmlFor='name' >Event Name (required)</label>
                        <input type='text' required name="user_name" />

                        <label htmlFor='email'>Venue Name (required)</label>
                        <input type='email' required id='email' />

                        <label htmlFor='phone'>Contact Number (required)</label>
                        <input type='tel' id='phone' name="user_email" />

                        <label htmlFor='message'>Your Message</label>
                        <textarea required className="form-control" id="floatingTextarea" name="message" style={{ height: "100px" }}></textarea>

                        <div className="custom-file-container" data-upload-id="my-unique-id"></div>

                        <button type='submit' className='w-100' >Send Message</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateEvent