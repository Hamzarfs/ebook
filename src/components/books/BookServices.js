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
            <h2 className="heading-online">1. Start With Logo Maker Tools</h2>
            <p className="description-online">
              When your book is finally free from all the major gunk, book proofreading acts as a final round of editing
              to fine-tune your overall message. This process includes working on typos, grammar, language, and any overlooked
              errors to make sure your book looks perfectly smooth and polished. Once your book has gone through all three
              rounds of editing, it is finally ready to be published!
            </p>
            <img src={books1} alt="Vector" className="image-online img-fluid mb-4" />
            
            <h2 className="heading-online">3. Download & Start Branding</h2>
            <p className="description-online">
              To start branding, all you have to do is download the logo
              vector files such as PNG, PDF, or JPEG. With the logo file you can
              launch your business brand right away. Whether you are
              looking to create a brand image through digital media or offline
              with printed materials, your high-resolution logo design will
              help you achieve all your marketing and branding goals.
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
          <h2 className="heading-online">2. Perfecting Your Logo Design</h2>
            <p className="description-online">
              Also called copyediting, line editing is done to ensure your
              book has correct language, grammar, and punctuation.
              During this step, our editors also work on the consistency,
              repetitions, and factual accuracy of your novel editing fiction
              and nonfiction books. Copyediting is not the same as
              proofreading, so make sure you don’t skip this round.
            </p>

            <img src={books5} alt="Icon" className="image-online img-fluid mt-4 mb-4" />
            <h2 className="heading-online">4. Finalizing Your Logo</h2>
            <p className="description-online">
              Editorial assessment is the first overview of your book draft by
              our professional editors who read through the entire
              manuscript and offer feedback and insight related to the plot,
              structure, characterization, dialogue, and consistency. It is
              different from a comprehensive edit in that it only provides an
              assessment to authors who then fix the errors themselves.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookServices;