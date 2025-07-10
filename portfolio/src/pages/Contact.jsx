import React, { useState , useEffect} from 'react';
import './Contact.css';
import { send } from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
  if (status) {
    const timer = setTimeout(() => setStatus(''), 4000);
    return () => clearTimeout(timer);
  }
}, [status]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }

    const serviceID = 'service_4bevt3e';
    const templateID = 'template_aiiu2vd';
    const userID = 'DA95vibOiH2P2zKJo';

    send(serviceID, templateID, formData, userID)
      .then(() => {
        setStatus('Message sent! Thanks for contacting.');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setStatus('Oops! Something went wrong. Please try again.');
      });
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>Have a question, project, or just want to connect? Feel free to message me!</p>
      {status && (
      <div className="toast-message">
        {status}
      </div>
    )}
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn">Send Message</button>
      </form>

      {status && <p className="form-status">{status}</p>}
    </section>
  );
};

export default Contact;
