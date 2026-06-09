import { useState } from "react";
import "../styles/contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // show modal
    setShowModal(true);

    // reset form
    setForm({ name: "", email: "", message: "" });

    // auto close modal after 2.5s
    setTimeout(() => {
      setShowModal(false);
    }, 2500);
  };

  return (
    <div className="contact-page">

      {/* HEADER */}
      <div className="contact-header">
        <h1>📞 Contact Us</h1>
        <p>We are here to help you anytime</p>
      </div>

      {/* MAIN */}
      <div className="contact-container">

        {/* LEFT */}
        <div className="contact-info glass">
          <h2>Get in Touch</h2>

          <div className="info-box">
            <p>📍 Hyderabad, India</p>
            <p>📧 support@bytebitehub.com</p>
            <p>📞 +91 9014546085</p>
          </div>

          <div className="info-text">
            <p>
              Have questions about orders, delivery, or restaurants?
              Our support team is available 24/7.
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form glass">

          <h2>Send Message</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              required
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
            />

            <button type="submit">
              Send Message
            </button>

          </form>
        </div>

      </div>

      {/* ✅ PREMIUM MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <div className="check">✔</div>
            <h2>Message Sent!</h2>
            <p>We will contact you soon !</p>
          </div>
        </div>
      )}

    </div>
  );
}