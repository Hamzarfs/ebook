const CtaButtons = () => {
 
   const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal
 
   const openModal = () => {
     setIsModalOpen(true); // Open the modal
   };
 
   const closeModal = () => {
     setIsModalOpen(false); // Close the modal
   };
 
    return (
    
<div className="col-md-6 text-section btn-wa">
<a href="tel:+17327979165" className="cta-btn">Call Us</a> 
<BreadCrumb
        title="Other Services"
        desc={
          <>
            Give your writing career a boost by investing in expert book-writing services.

            <br />
            We can help you reach your goals and connect with readers!
          </>
        }
        buttonText="Get a Quote"
        onClick={openModal} // Call openModal on button click
        backgroundImage={othersericebg} // Pass the image URL as a prop
      />
<button> </button>
</div>
                           
    );
};

export default CtaButtons;