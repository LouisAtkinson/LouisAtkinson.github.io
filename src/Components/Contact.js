import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">CONTACT</div>
      <div className="contact-content">
        <p className="feel-free">
          Feel free to get in touch with me via the following methods or by
          filling out the contact form below:
        </p>
        <div className="contact-info">
          <p>louisatkinson.la@gmail.com</p>
          <p>07729 498586</p>
        </div>
        <form 
          className="contact-form"
          action="https://formspree.io/f/mnqkkpyl"
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">NAME</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              autoComplete="name" 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">EMAIL</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              autoComplete="email" 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">MESSAGE</label>
            <textarea 
              id="message" 
              name="message" 
              rows="6" 
              required
              autoComplete="off"
            ></textarea>
          </div>
          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
