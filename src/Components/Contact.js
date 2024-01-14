import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <div className="contact-content">
        <p className='feel-free'>
          Feel free to get in touch with me via the following methods or by
          filling out the contact form below:
        </p>
        <div className="contact-info">
          <p>Email: louisatkinson.la@gmail.com</p>
          <p>Phone: 07729 498586</p>
        </div>
        <form 
          className="contact-form"
          action="https://formspree.io/f/mnqkkpyl"
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
