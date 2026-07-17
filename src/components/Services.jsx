import React from 'react';
import { services } from '../data/services';

export default function Services() {
  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
          consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
          sit in iste officiis commodi quidem hic quas.
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay={100 * (i + 1)}
            >
              <div className="icon flex-shrink-0"><i className={`bi ${service.icon}`}></i></div>
              <div>
                <h4 className="title"><a href="service-details.html" className="stretched-link">{service.title}</a></h4>
                <p className="description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
