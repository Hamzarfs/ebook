import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../LandingPage.css';
import supportIcon from '../../images/lpcontactsec1.png';  // Replace with the actual path to your icon
import consultIcon from '../../images/lpcontactsec2.png';  // Replace with the actual path to your icon
import chatIcon from '../../images/lpcontactsec3.png';     // Replace with the actual path to your icon

const LpContactSec = () => {
    return (
        <section
            className="lp-contact-sec d-flex align-items-center pb-4"
            style={{
                backgroundColor: '#909090'
            }}
        >
            <div className="container">
                <div className="row text-center">
                    {/* Column 1 - Support Team */}
                    <div className="col-md-4">
                        <a href="https://wa.me/8482369397 " target="_blank" className="contact-link d-flex align-items-center justify-content-center">
                            <img src={supportIcon} alt="Support Team Icon" className="" />
                            <div>
                                <p>Our Support Team</p>
                                <h4>24/7 Online</h4>
                            </div>
                        </a>
                    </div>

                    {/* Column 2 - Phone Number */}
                    <div className="col-md-4">
                        <a href="tel:+17327979165" className="contact-link d-flex align-items-center my-4 my-md-0 justify-content-center">
                            <img src={consultIcon} alt="Consult Expert Icon" className="" />
                            <div>
                                <p>Consult Our Expert</p>
                                <h4> (732) 797-9165</h4>
                            </div>
                        </a>
                    </div>

                    {/* Column 3 - Live Chat */}
                    <div className="col-md-4">
                        <a href="https://wa.me/8482369397" target="_blank" className="contact-link d-flex align-items-center justify-content-center">
                            <img src={chatIcon} alt="Live Support Icon" className="" />
                            <div>
                                <p>Live Support</p>
                                <h4>Chat Now</h4>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LpContactSec;
