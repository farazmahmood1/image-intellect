import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.scss';
import { ImagesBaseUrl } from '../../SourceFiles/BaseUrl';
import logo from '../../Assets/whatsappLogo.png';
import instagram from '../../Assets/instagram.svg';

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

toast.configure();

const Contact = () => {

    const form = useRef();

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
                <div className='col-lg-4 contact-info'>
                    <h2>Contact Us</h2>
                    <p>Contact Yellow Mellow today to embark on a visual journey that celebrates your love story and cultural essence. Let us be the storytellers of your special moments, ensuring every frame reflects the beauty and richness of your celebration.</p>
                    <div className='contact-details' style={{marginBottom:"5px"}}>
                        <p>Contact us:</p>
                        <a target='_blank' href='https://wa.me/+16824100000' style={{ textDecoration: "none" }} ><img src={logo} style={{ width: "35px" }} /> +1 6824100000</a>
                    </div>
                    <div className='contact-details'>
                        <a target='_blank' href="https://www.instagram.com/yellowmellowfilms?igsh=am1oNHpjcHhrdXZp&utm_source=qr" style={{ textDecoration: "none" }} ><img src={instagram} style={{ width: "25px", marginLeft:"2px" }} />&nbsp;&nbsp;&nbsp;yellowmellowfilms</a>
                    </div>
                </div>

                {/* updates */}
                <div className='col-lg-8 contact-form'>
                    <form ref={form} onSubmit={sendEmail} className='form-form'>
                        <label htmlFor='name' >Your Name (required)</label>
                        <input type='text' required  name="user_name" />

                        <label htmlFor='email'>Your Email (required)</label>
                        <input type='email' required id='email' />

                        <label htmlFor='phone'>Contact Number (required)</label>
                        <input type='tel' id='phone' name="user_email" />

                        <label htmlFor='message'>Your Message</label>
                        <textarea required className="form-control" id="floatingTextarea" name="message" style={{ height: "100px" }}></textarea>

                        <button type='submit' >Send Message</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact