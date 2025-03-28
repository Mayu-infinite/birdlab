import React, { useState } from 'react';
import '../styles/contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
  };

  return (
    <div className="contact-page">
      <h1>Contact BirdLab</h1>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Address:</strong> AI Department, IIT Jodhpur, Rajasthan, India</p>
          <p><strong>Email:</strong> birdlab@iitj.ac.in</p>
          <p><strong>Phone:</strong> +91-XXXXXXXXXX</p>
        </div>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <h2>Send us a Message</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;