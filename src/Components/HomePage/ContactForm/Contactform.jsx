import React, { useState } from 'react';
import './Contactform.scss'
import { Link } from 'react-router-dom';

const Contactform = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <button className="sticky-btn">
                <Link to='/contact' style={{color:"#fff", textDecoration:"none"}}>
                <i style={{ fontSize: "25px" }} className="fa-regular fa-comments"></i> <br />
                Contact Us
                </Link>
            </button>
            <div className={`modal fade ${isModalOpen ? 'show' : ''}`} style={{ display: isModalOpen ? 'block' : 'none' }} >
                <div className="modal-dialog">
                    <div className="modal-content">                                                                                                                                                                                                                                                                                                                                                                                                 
                        <div className="modal-header">
                            <h5 className="modal-title">Contact Form</h5>
                            <button type="button" className="close" onClick={closeModal} style={{ background: 'none', border: 'none', color: 'grey', fontSize: '30px' }}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-content ctaForm">
                            <div className="wpcf7 js" id="wpcf7-f3072-o1" lang="en-US" dir="ltr">
                                <div className="screen-reader-response"><p role="status" aria-live="polite" aria-atomic="true" /> <ul /></div>
                                <form action="/home/#wpcf7-f3072-o1" method="post" className="wpcf7-form init" aria-label="Contact form" noValidate="novalidate" data-status="init">
                                    <div className="modal-body" id="cta_global_form">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="wpcf7-response-output" aria-hidden="true" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 form-horizontal">
                                                <h5 className="cta-head">Let's Talk about Change!</h5>
                                                <div className="form-group required" style={{ display: "flex", justifyContent: "space-between" }}>
                                                    <p><label htmlFor="contactName" className="col-md-3 control-label">Name*</label></p>
                                                    <p style={{ width: "75%" }}><span className="wpcf7-form-control-wrap" data-name="contactName"><input size={40} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" id="contactName" aria-required="true" aria-invalid="false" placeholder="Name*" defaultValue type="text" name="contactName" /></span></p>
                                                </div>
                                                <div className="form-group required" style={{ display: "flex", justifyContent: "space-between" }}>
                                                    <p><label htmlFor="organisationName" className="col-md-3 control-label">Organisation</label></p>
                                                    <p style={{ width: "75%" }}><span className="wpcf7-form-control-wrap" data-name="organisationName"><input size={40} className="wpcf7-form-control wpcf7-text form-control" id="organisationName" aria-invalid="false" placeholder="Organisation Name" defaultValue type="text" name="organisationName" /></span></p>
                                                </div>
                                                <div className="form-group required" style={{ display: "flex", justifyContent: "space-between" }}>
                                                    <p><label htmlFor="geoLocation" className="col-md-3 control-label">Country</label></p>
                                                    <p style={{ width: "75%" }}><span className="wpcf7-form-control-wrap" data-name="geoLocation"><select className="wpcf7-form-control wpcf7-select wpcf7-validates-as-required form-control" aria-required="true" aria-invalid="false" name="geoLocation"><option value>Select Location</option><option value="India">India</option><option value="Australia">Australia</option><option value="South Africa">South Africa</option><option value="UK">UK</option><option value="USA">USA</option><option value="Sweden">Sweden</option><option value="Others">Others</option></select></span></p>
                                                </div>
                                                <div className="form-group required" style={{ display: "flex", justifyContent: "space-between" }}>
                                                    <p><label htmlFor="contactPurpose" className="col-md-3 control-label">Purpose*</label></p>
                                                    <p style={{ width: "75%" }}><span className="wpcf7-form-control-wrap" data-name="contactPurpose"><select className="wpcf7-form-control wpcf7-select wpcf7-validates-as-required form-control" id="contactPurpose" aria-required="true" aria-invalid="false" name="contactPurpose"><option value>Select Purpose</option><option value="Business Transformation">Business Transformation</option><option value="Digital Transformation">Digital Transformation</option><option value="Brand and Marketing Transformation">Brand and Marketing Transformation</option><option value="Data Science and Analytics">Data Science and Analytics</option><option value="Platform and Technology Transformation">Platform and Technology Transformation</option><option value="Solutions">Solutions</option><option value="Design Thinking">Design Thinking</option></select></span></p>
                                                </div>
                                                <div className="form-group required" style={{ display: "flex", justifyContent: "space-between" }}>
                                                    <p><label htmlFor="phoneNumber" className="col-md-3 control-label">Phone*</label></p>
                                                    <p style={{ width: "75%" }}><span className="wpcf7-form-control-wrap" data-name="phoneNumber"><input size={40} maxLength={15} className="wpcf7-form-control wpcf7-tel wpcf7-text wpcf7-validates-as-tel form-control" id="phoneNumber" aria-invalid="false" placeholder defaultValue type="tel" name="phoneNumber" /></span></p>
                                                </div>
                                                <div className="form-group required" style={{ display: "flex", justifyContent: "space-between" }}>
                                                    <p><label htmlFor="contactEmail" className="col-md-3 control-label">Email*</label></p>
                                                    <p style={{ width: "75%" }}><span className="wpcf7-form-control-wrap" data-name="contactEmail"><input size={40} className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email form-control" id="contactEmail" aria-required="true" aria-invalid="false" placeholder defaultValue type="email" name="contactEmail" /></span></p>
                                                </div>
                                                <div className="form-group required" style={{ display: "flex", justifyContent: "space-between" }}>
                                                    <p><label htmlFor="queryDescription" className="col-md-3 control-label">Query Details</label></p>
                                                    <p style={{ width: "75%" }}><span className="wpcf7-form-control-wrap" data-name="queryDescription"><textarea cols={40} rows={10} maxLength={1000} className="wpcf7-form-control wpcf7-textarea form-control" id="queryDescription" aria-invalid="false" placeholder name="queryDescription" /></span></p>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-md-9 col-md-offset-3">
                                                        <p><span className="wpcf7-form-control-wrap" data-name="nihilentTerms"><span className="wpcf7-form-control wpcf7-acceptance"><span className="wpcf7-list-item"><input type="checkbox" name="nihilentTerms" defaultValue={1} id="nihilentTerms" aria-invalid="false" /></span></span></span> &nbsp;<label htmlFor="nihilentTerms" className="mandatory control-label">I agree to the <a target="_blank" href="https://nihilent.com/terms-of-use/">terms of use</a></label></p>
                                                    </div>
                                                </div>
                                                <div className="form-group" style={{ border: "1px solid black", width: "75%", textAlign: "center" }}>
                                                    <div className="col-md-9 col-md-offset-3">
                                                        <p><span className="wpcf7-form-control-wrap kc_captcha"><span className="wpcf7-form-control wpcf7-radio"><span className="captcha-image"><span className="cf7ic_instructions">Please prove you are human by selecting  the house </span> <br /><label><input type="radio" name="kc_captcha" defaultValue="kc_human" /><svg width={50} height={50} aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M488 313v143c0 13-11 24-24 24H348c-7 0-12-5-12-12V356c0-7-5-12-12-12h-72c-7 0-12 5-12 12v112c0 7-5 12-12 12H112c-13 0-24-11-24-24V313c0-4 2-7 4-10l188-154c5-4 11-4 16 0l188 154c2 3 4 6 4 10zm84-61l-84-69V44c0-6-5-12-12-12h-56c-7 0-12 6-12 12v73l-89-74a48 48 0 00-61 0L4 252c-5 4-5 12-1 17l25 31c5 5 12 5 17 1l235-193c5-4 11-4 16 0l235 193c5 5 13 4 17-1l25-31c4-6 4-13-1-17z" /></svg></label><label><input type="radio" name="kc_captcha" defaultValue="bot" /><svg width={50} height={50} aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M377 375l-83-87h34c21 0 32-25 17-40l-82-88h33c21 0 32-25 18-40L210 8c-10-11-26-11-36 0L70 120c-14 15-3 40 18 40h33l-82 88c-15 15-4 40 17 40h34L7 375c-15 16-4 41 17 41h120c0 33-11 49-34 68-12 9-5 28 10 28h144c15 0 22-19 10-28-20-16-34-32-34-68h120c21 0 32-25 17-41z" /></svg></label><label><input type="radio" name="kc_captcha" defaultValue="bot" /><svg width={50} height={50} aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M472 200H360L256 6a12 12 0 00-10-6h-58c-8 0-14 7-12 15l34 185H100l-35-58a12 12 0 00-10-6H12c-8 0-13 7-12 14l21 106L0 362c-1 7 4 14 12 14h43c4 0 8-2 10-6l35-58h110l-34 185c-2 8 4 15 12 15h58a12 12 0 0010-6l104-194h112c57 0 104-25 104-56s-47-56-104-56z" /></svg></label></span><span style={{ display: 'none' }}><input type="text" name="kc_honeypot" /></span></span></span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <p><button type="button" className="btn btn-default" data-dismiss="modal" onClick={closeModal}>Close</button><input className="wpcf7-form-control wpcf7-submit has-spinner btn btn-submit" type="submit" defaultValue="Submit" disabled /><span className="wpcf7-spinner" />
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Contactform