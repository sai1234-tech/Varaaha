import React from 'react'
import "./Contact.css";

function Contact() {
  return (
    <div>
         <section className="contact" id="contact">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
    </div>
  )
}

export default Contact