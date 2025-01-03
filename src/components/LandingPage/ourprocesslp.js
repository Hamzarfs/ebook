import React from 'react';
import infographic from '../../images/infographic.png';


const OurProcessLp = () => {
    return (

        <div className="logo-designs-portfolio py-4">
            <div className="container">
                <div className='row'>
                    {/* Heading for the Portfolio */}
                    <div className="col-12">
                        <h2 className="portfolio-heading">Our Process
                            From Concept to Perfection</h2>
                    </div>
                    <div>
                        <img src={infographic} alt="Iconic Logo 1" className='d-block m-auto' />
                    </div>
                </div>
            </div>
        </div>

    );
};


export default OurProcessLp;
