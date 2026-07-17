import React, { useState } from 'react';

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | loading | sent | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      // Replace this URL with your own backend/email endpoint.
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error('Something went wrong. Please try again later.');

      setStatus('sent');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong. Please try again later.');
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-5">
            <div className="info-wrap">
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>tuol kork,phnom penh, NY 535022</p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>078566952</p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>vuthyngun6699@gmail.com</p>
                </div>
              </div>

              <iframe
                src="https://www.google.com/maps?q=Western+University+-+Steung+Mean+Chey,+Phnom+Penh&output=embed"
                frameBorder="0"
                style={{ border: 0, width: '100%', height: '270px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="map"
              ></iframe>
            </div>
          </div>

          <div className="col-lg-7">
            <form onSubmit={handleSubmit} className="php-email-form" data-aos="fade-up" data-aos-delay="200">
              <div className="row gy-4">
                <div className="col-md-6">
                  <label htmlFor="name-field" className="pb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name-field"
                    className="form-control"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="email-field" className="pb-2">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email-field"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-12">
                  <label htmlFor="subject-field" className="pb-2">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject-field"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-12">
                  <label htmlFor="message-field" className="pb-2">Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="10"
                    id="message-field"
                    value={form.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  {status === 'loading' && <div className="loading">Loading</div>}
                  {status === 'error' && <div className="error-message">{errorMsg}</div>}
                  {status === 'sent' && <div className="sent-message">Your message has been sent. Thank you!</div>}

                  <button type="submit" disabled={status === 'loading'}>Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
