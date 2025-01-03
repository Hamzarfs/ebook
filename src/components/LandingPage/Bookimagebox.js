import React, { useState } from 'react';
import "../../BookImageBox.css";
import book1 from '../../images/memoirs.png'
import book2 from '../../images/Fiction.png'
import book3 from '../../images/Non-Fiction.png'
import book4 from '../../images/romance.png'
import book5 from '../../images/anthology.png'
import book6 from '../../images/ChildrensBook.png'
import PopupForm1 from "../common/PopupForm";

const BookImageBox = () => {

       const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal
        
          const openModal = () => {
            setIsModalOpen(true); // Open the modal
          };
        
          const closeModal = () => {
            setIsModalOpen(false); // Close the modal
          };
  const books = [
    {
      title: "Memoirs",
      description:
        "Memoirs are autobiographical accounts of a person's life, often focusing on specific events, experiences, or relationships.",
    icon: book1,
      borderColor: "#CCCCCC",
    },
    {
      title: "Fiction",
      description: (
      <>
        Fiction refers to literary works created from the imagination, such as novels and short stories. <br></br><br></br>
        </>
        
    ),
      icon: book2,
      borderColor: "#F28B8C",
    },
    {
      title: "Non-Fiction",
      description:(
      <>
        Non-fiction refers to literary works based on fact, such as biographies, histories, and documentaries.<br></br><br></br>
        </>
      ),
      icon: book3,
      borderColor: "#F4A261",
    },
    {
      title: "Romance",
      description:
        "Romance is a genre of fiction that emphasizes romantic relationships and emotional connections between characters.",
      icon: book4,
      borderColor: "#E63946",
    },
    {
      title: "Anthology",
      description: (
        <>
        An anthology is a collection of literary works by various authors, often united by a common theme or genre.<br></br><br></br>
        </>
        
    ),
      icon: book5,
      borderColor: "#FFB703",
    },
    {
        title: "Children's Book",
        description: (
          <>
            Children's books are written and illustrated for children, often focusing on themes like imagination, learning, and adventure.
            
          </>
        ),
        icon: book6,
        borderColor: "#A1C181",
      }
      
  ];

  return (
    <div className="container bookimage-box">

<div className="row py-3">
    <div className="col-12 text-center">
      <h2 className="choose-service-heading font-weight-bold">
      The Worlds We Write In 
      </h2>
      <p className="choose-service-description">We have helped a broad range of authors publish their books successfully. Our projects include books of different genres, from thrilling suspense novels and heartwarming romances to insightful memoirs and engaging children's books. </p>
    </div>
  </div>
      <div className="row">
        {books.map((book, index) => (
          <div className="col-md-4 col-sm-6 col-12 mb-4" key={index}>
            <div
              className="book-box"
              style={{ borderColor: book.borderColor }}
            >
              <img src={book.icon} alt={book.title} className="book-icon" />
              <h3 className="book-title">{book.title}</h3>
              <p className="book-description">{book.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='container pt-3' style={{ padding: '0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <div className='row' style={{ margin: '0' }}>
    <div className='col-md-12' style={{ padding: '0', display: 'flex', justifyContent: 'center' }}>
      <div className="lpbanner-buttons mt-0" style={{ textAlign: 'center', padding: '0', margin: '0', display: 'flex', justifyContent: 'center' }}>
        <a 
       onClick={openModal}
          className="first-button"
          style={{ 
            display: 'inline-block', 
            marginRight: '10px',  // Gap between the buttons
            padding: '10px 20px', // Adjust padding as needed
            backgroundColor: '#FC9700',  // Button color (FC9700)
            color: 'white',  // Text color
            textDecoration: 'none',  // Remove underline
            borderRadius: '30px', // Border radius of 30px
            boxShadow: '0px 4px 6px rgba(252, 151, 0, 0.5)', // Drop shadow with FC9700 color
          }}
        >
          Get Started
        </a>
        <PopupForm1 isOpen={isModalOpen} closeModal={closeModal} />
     
        <a 
          className="first-button" 
          href="tel:+17327979165"
          style={{ 
            display: 'inline-block', 
            marginLeft: '10px',  // Gap between the buttons
            padding: '10px 30px', 
            backgroundColor: '#FC9700',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '30px', // Border radius of 30px
            boxShadow: '0px 4px 6px rgba(252, 151, 0, 0.5)', // Drop shadow with FC9700 color
          }}
        >
          Let’s Talk
        </a>
      </div>
    </div>
  </div>
</div>
    </div>



  );
};

export default BookImageBox;
