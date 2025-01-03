import React from "react";
import "../../BookImageBox.css";
import book1 from '../../images/bookmemories1.png'
import book2 from '../../images/bookfiction2.png'
import book3 from '../../images/booknonfiction3.png'
import book4 from '../../images/bookromance4.png'
import book5 from '../../images/bookaudio5.png'
import book6 from '../../images/bookinfo6.png'

const BookImageBox = () => {
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
      description:
        "Fiction refers to literary works created from the imagination, such as novels and short stories.",
      icon: "path_to_fiction_icon",
      borderColor: "#F28B8C",
    },
    {
      title: "Non-Fiction",
      description:
        "Non-fiction refers to literary works based on fact, such as biographies, histories, and documentaries.",
      icon: "path_to_non_fiction_icon",
      borderColor: "#F4A261",
    },
    {
      title: "Romance",
      description:
        "Romance is a genre of fiction that emphasizes romantic relationships and emotional connections between characters.",
      icon: "path_to_romance_icon",
      borderColor: "#E63946",
    },
    {
      title: "Anthology",
      description:
        "An anthology is a collection of literary works by various authors, often united by a common theme or genre.",
      icon: "path_to_anthology_icon",
      borderColor: "#FFB703",
    },
    {
      title: "Children's Book",
      description:
        "Children's books are written and illustrated for children, often focusing on themes like imagination, learning, and adventure.",
      icon: "path_to_children_book_icon",
      borderColor: "#A1C181",
    },
  ];

  return (
    <div className="container bookimage-box">
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
    </div>
  );
};

export default BookImageBox;
