import React, { useState } from "react";
import Modal from "react-modal";
import { FaUser, FaEnvelope, FaPhone, FaCommentAlt, FaTimes } from 'react-icons/fa'; // Font Awesome icons

Modal.setAppElement("#root");

const PopupForm1 = ({ isOpen, closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    message: "",
    newsletter: false,
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name || /[^a-zA-Z ]/.test(formData.name)) {
      formErrors.name = "Name cannot contain special characters!";
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Invalid email format!";
    }
    if (!formData.phonenumber || !/^\d{10,15}$/.test(formData.phonenumber)) {
      formErrors.phonenumber = "Phone number must be between 10 to 15 digits!";
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form is valid, submitting data:", formData);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Popup Form"
      className="popupform1-modal"
      overlayClassName="popupform1-overlay"
    >
      <button className="close-button" onClick={closeModal}>
        <FaTimes />
      </button>
      <form className="popupform1" onSubmit={handleSubmit}>
        <h2>Get a <span style={{ color: '#F76C39' }}>Quote</span></h2>
        <div>
          <label>Name</label>
          <div className="input-icon">
            <FaUser className="icon" />
            <input
              type="text"
              placeholder="e.g. John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label>Email</label>
          <div className="input-icon">
            <FaEnvelope className="icon" />
            <input
              type="email"
              placeholder="e.g. john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label>Phone Number</label>
          <div className="input-icon">
            <FaPhone className="icon" />
            <input
              type="text"
              placeholder="e.g. 1234567890"
              value={formData.phonenumber}
              onChange={(e) =>
                setFormData({ ...formData, phonenumber: e.target.value })
              }
            />
          </div>
          {errors.phonenumber && <p className="error">{errors.phonenumber}</p>}
        </div>
        <div>
          <label>Message</label>
          <div className="input-icon">
            <FaCommentAlt className="icon" />
            <textarea
        placeholder="Your message here"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        style={{ resize: 'none' }}
      />
          </div>
        </div>
        {/* <div className="newsletter">
  <label>
    <input
      type="checkbox"
      checked={formData.newsletter}
      onChange={(e) =>
        setFormData({ ...formData, newsletter: e.target.checked })
      }
    />
    I would like to receive the newsletter.
  </label>
</div> */}

        <button type="submit">Submit</button>
      </form>
    </Modal>
  );
};

export default PopupForm1;
