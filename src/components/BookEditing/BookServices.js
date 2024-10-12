import books1 from '../../images/Container.png'; // Adjust the path as needed
import books2 from '../../images/Icon.png'; // Adjust the path as needed
import books3 from '../../images/Vector2.png'; // Adjust the path as needed
import books4 from '../../images/Vertical Divider.png'; // Adjust the path as needed
import books5 from '../../images/Vector.png'; // Adjust the path as needed



const BookServices = () => {
  return (
    <div className="container my-5">
      <h2 className="main-heading-online">
        Professional<br />
        <span className="orange-text">Book Editing</span> Services
      </h2>
      <div className="row">
        {/* Left Side Content */}
        <div className="col-md-5 d-flex align-items-center">
          <div>
            <h2 className="heading-online">Proofreading
            </h2>
            <p className="description-online">
            We will make sure your masterpiece shines bright and stands out by meeting international standards and getting the detailed polish it deserves. We are at your service to refine every detail so your hard work gets the spotlight it deserves. AMZ Book Publishings ensures your work is clean, compelling, and captivating to help your ideas truly take center stage.
            </p>
            <img src={books1} alt="Vector" className="image-online img-fluid mb-4" />
            
            <h2 className="heading-online">Copy Editing</h2>
            <p className="description-online">
            Every great author has a secret weapon, which is a fantastic editor who knows exactly how to make their words shine. Line editors are the wizards who transform your work from good to great. At AMZ Book Publishings, we will match you with an expert who can fine-tune every detail, whether you need sharp copy editing or a big-picture structural revamp. Let’s team up to bring out the best in your writing!
            </p>
            <img src={books3} alt="Vector 1" className="image-online img-fluid" />
          </div>
        </div>

        {/* Center Separator */}
        <div className="col-md-2 center-image-online">
  <img src={books4} alt="Vertical Divider" className="img-fluid" />
</div>


        {/* Right Side Content */}
        <div className="col-md-5 d-flex align-items-center">
          <div>
          <img src={books2} alt="Vector" className="image-online img-fluid mb-4" />
          <h2 className="heading-online">Developmental Editing</h2>
            <p className="description-online">
            Great research deserves a clear presentation. That is why we have brought together a team of specialists in subject-specific editing. They will ensure your characters are well-developed, your plot is tight, and your manuscript is polished to perfection before giving it their stamp of approval.
            </p>

            <img src={books5} alt="Icon" className="image-online img-fluid mt-4 mb-4" />
            <h2 className="heading-online">Editorial Assessment</h2>
            <p className="description-online">
            Our editors dive deep into your masterpiece, examining every detail and providing you with insightful feedback. You will get a firsthand look at their thoughts and suggestions, helping you refine your work to its fullest potential.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookServices;