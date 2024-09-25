import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faTruck, faDraftingCompass } from '@fortawesome/free-solid-svg-icons';

function Services() {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="service-container">
        <div className="service-box">
          <FontAwesomeIcon icon={faCogs} className="service-icon" />
          <h3>Custom Furniture</h3>
          <p>Get personalized furniture built to your exact specifications.</p>
        </div>
        <div className="service-box">
          <FontAwesomeIcon icon={faTruck} className="service-icon" />
          <h3>Free Delivery</h3>
          <p>We offer free delivery on all orders within the city.</p>
        </div>
        <div className="service-box">
          <FontAwesomeIcon icon={faDraftingCompass} className="service-icon" />
          <h3>Interior Design</h3>
          <p>Our team can help you design the perfect space.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
