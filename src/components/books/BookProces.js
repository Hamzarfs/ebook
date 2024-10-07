import books6 from '../../images/Iconaa.png'; // Adjust the path as needed
import books7 from '../../images/Containerrr.png'; 
import books8 from '../../images/Iconsss.png'; 
import books9 from '../../images/Iconnn.png'; 


const BookProcess = () => {
  return (
      <section id="design-process-section" className="container text-center my-5">
          {/* First Row: Heading and Description */}
          <div className="row">
              <div className="col-12">
              <h2 className="main-heading-online">
        Professional<br />
        <span className="orange-text">Book Editing</span> Services
      </h2>
                  <p className="design-process-description">
                      We follow a proper book cover designing process to ensure the best final product for our clients.
                  </p>
              </div>
          </div>
          
          {/* Second Row: Icon Boxes */}
          <div className="row mt-4">
              <div className="col-lg-3 col-md-6 mb-4">
                  <div className="design-process-icon-box">
                  <img src={books6} alt="Project Discussion" className="img-fluid mb-3 design-process-icon" />
                      <h5 className="design-process-icon-title font-weight-bold">Submit your Request</h5>
                      <p className="design-process-icon-text">Fill out the editing request form on our website. Provide details 
                      about your project, including manuscript length and desired editing services.</p>
                  </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                  <div className="design-process-icon-box">
                  <img src={books7} alt="Design Research" className="img-fluid mb-3 design-process-icon" />
                      <h5 className="design-process-icon-title font-weight-bold">Receive Customized Quote and Make Payment</h5>
                      <p className="design-process-icon-text">Our team reviews your
                        request and provides a
                        tailored quote. Once you
                        accept the quote, proceed to
                        make payment through our
                        secure payment system.</p>
                  </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-4">
                  <div className="design-process-icon-box">
                  <img src= {books8} alt="First Sample Layout" className="img-fluid mb-3 design-process-icon" />
                      <h5 className="design-process-icon-title font-weight-bold">Editing in Progress</h5>
                      <p className="design-process-icon-text">Our experienced editors
                        meticulously review your
                        manuscript. They focus on
                        improving structure, clarity,
                        grammar, punctuation, and
                        consistency.</p>
                  </div>
              </div>
              <div className="col-lg-3 col-md-6">
                  <div className="design-process-icon-box">
                  <img src={books9} alt="Final Design Delivery" className="img-fluid mb-3 design-process-icon" />
                      <h5 className="design-process-icon-title font-weight-bold">Receive and Review</h5>
                      <p className="design-process-icon-text">Once editing is complete, you
                      will receive the edited
                      manuscript within the agreed
                      timeline. Thoroughly review
                      the edits and provide
                      feedback.</p>
                  </div>
              </div>
          </div>
      </section>
  );
};

export default BookProcess;