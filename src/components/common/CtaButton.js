import books10 from '../../images/Layer 1 1.png'; 

const CtaButton = () => {
    return (
        <section className="design-cta-sec">
            <div className="cta-container">
                <div className="row align-items-center">
                    {/* Text Section */}
                    <div className="col-md-6 text-section">
                        <h4>Get In Touch With Us To <br/> Kickstart Your Project</h4>
                        <p>24/7 customer support</p>
                        <a href="tel:+17327979165" className="cta-btn">Call Us</a> 
                        </div>
                    {/* Image Section */}
                    <div className="col-md-6 image-section">
                        <img src={books10} alt="CTA Image" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaButton;