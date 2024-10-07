import books10 from '../../images/Layer 1 1.png'; 

const CtaButton = () => {
    return (
        <section className="design-cta-sec">
            <div className="cta-container">
                <div className="row align-items-center">
                    {/* Text Section */}
                    <div className="col-md-6 text-section">
                        <h2>Call Us To Start<br /> Your Project</h2>
                        <p>24/7 customer support</p>
                        <button className="cta-btn">Chat With Us</button>
                    </div>
                    {/* Image Section */}
                    <div className="col-md-6 image-section">
                        <img src={books10} alt="CTA Image" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaButton;