import React from 'react';
    import '../styles/LocationsSection.css';

    import phImage from '../assets/philippines.jpg';
    import lkImage from '../assets/sri-lanka.jpg';
    import npImage from '../assets/nepal.jpg';
    import jmImage from '../assets/jamaica.jpg';

    const LocationsSection = () => {
      const locations = [
        {
          name: 'Philippines',
          image: phImage,
        },
        {
          name: 'Sri Lanka',
          image: lkImage,
        },
        {
          name: 'Nepal',
          image: npImage,
        },
        {
          name: 'Jamaica',
          image: jmImage,
        },
      ];

      return (
        <section className="locations">
          <div className="container locations-content">
            <h2>Our Locations</h2>
            <p className="locations-description">
              Staff augmentation solutions for your business with our global reach
            </p>
            <div className="locations-grid">
              {locations.map((location, index) => (
                <div key={index} className="location-card">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="location-image"
                  />
                  <h3>{location.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default LocationsSection;
