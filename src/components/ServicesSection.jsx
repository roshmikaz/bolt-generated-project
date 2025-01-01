import React from 'react';
    import '../styles/ServicesSection.css';
    import {
      FaUsers,
      FaUserCheck,
      FaCode,
      FaWordpress,
      FaPython,
    } from 'react-icons/fa';

    const ServicesSection = () => {
      const services = [
        {
          title: 'IT Staff Augmentation',
          description:
            'Scale your team with our expert IT professionals. We provide skilled developers, engineers, and project managers to meet your specific needs.',
          icon: <FaUsers />,
        },
        {
          title: 'Dedicated Teams',
          description:
            'Build a dedicated team of tech experts focused solely on your projects. We handle recruitment, onboarding, and management, so you can focus on your business.',
          icon: <FaUserCheck />,
        },
        {
          title: 'Development Services',
          description:
            'We offer a wide range of development services to bring your ideas to life. Our team is proficient in various technologies and frameworks.',
          icon: <FaCode />,
          subServices: [
            {
              title: 'CodeIgniter Development Services',
              description:
                'Leverage the power of CodeIgniter for robust and scalable web applications. Our experts deliver high-quality solutions tailored to your requirements.',
              icon: <FaCode />,
            },
            {
              title: 'WordPress Development Services',
              description:
                'Create stunning and functional websites with WordPress. Our team specializes in custom themes, plugins, and integrations.',
              icon: <FaWordpress />,
            },
            {
              title: 'Python Development Services',
              description:
                'Build powerful and efficient applications with Python. Our developers are skilled in various Python frameworks and libraries.',
              icon: <FaPython />,
            },
          ],
        },
      ];

      return (
        <section className="services">
          <div className="container services-content">
            <h2>Our Services</h2>
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  {service.subServices && (
                    <div className="sub-services">
                      {service.subServices.map((subService, subIndex) => (
                        <div key={subIndex} className="sub-service-card">
                          <div className="service-icon">{subService.icon}</div>
                          <h4>{subService.title}</h4>
                          <p>{subService.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default ServicesSection;
