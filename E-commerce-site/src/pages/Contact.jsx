import React from 'react'
import { useState } from 'react';

function Contact() {
  const contactTitle = "Contact Us";
  const nameLabel = "Name";
  const emailLabel = "Email";
  const messageLabel = "Message";
  const submitButtonLabel = "Submit";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h2>{contactTitle}</h2>
        <hr className="my-4" />
      </div>
      <div className="row">
        <div className="col-md-6 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{nameLabel}</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">{emailLabel}</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">{messageLabel}</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              {submitButtonLabel}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact