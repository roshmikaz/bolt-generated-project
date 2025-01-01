import React from 'react';
    import '../styles/ServicesBoxes.css';

    const ServicesBoxes = () => {
      return (
        <section className="services-boxes">
          <div className="container services-boxes-content">
            <h2>Our Services</h2>
            <div className="services-grid">
              <div className="service-box">
                <h3>IT Staff Augmentation</h3>
                <p>
                  Through our IT staffing services, we provide your organization
                  with additional resources to work on-site or remotely to scale
                  your business operations quickly and efficiently. Our
                  augmentation service is designed to meet the unique needs of
                  your business; whether you need additional staff for a specific
                  project.
                </p>
              </div>
              <div className="service-box">
                <h3>Dedicated Teams</h3>
                <p>
                  We offer dedicated personal teams who can work exclusively on
                  clients’ particular projects. Understanding that every business
                  has unique requirements. This is similar to subcontracting your
                  projects to CodeOne-X and we maintain bench staff to ensure we
                  are committed the outcome that we promised.
                </p>
              </div>
              <div className="service-box">
                <h3>Development</h3>
                <p>
                  With our team of experts, we are committed to providing
                  solutions for all development processes of our clients. We
                  stand out from others because we always focus on providing
                  customized solutions for our clients and go beyond their
                  expectations.
                </p>
              </div>
            </div>
          </div>
        </section>
      );
    };

    export default ServicesBoxes;
