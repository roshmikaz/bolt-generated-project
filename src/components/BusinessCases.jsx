import React from 'react';
    import '../styles/BusinessCases.css';

    import caseStudyImage from '../assets/CaseStudy.jpg';
    import educationImage from '../assets/Education Domain.jpg';
    import collaborationImage from '../assets/Collaboration.jpg';
    import awardsImage from '../assets/awards.jpg';

    const BusinessCases = () => {
      const cases = [
        {
          title: 'Mitigating Risk through Cross-Project Deployment',
          description:
            'Executive Summary CodeOneX, an IT Staff Augmentation firm, faced obstacles in attracting and retaining contract-based candidates, managing unexpected job position closures of clients, and handling resources during the contractor stand-down…',
          image: caseStudyImage,
          buttonText: 'Read More',
        },
        {
          title:
            'How CodeOne-X Became an MNC’s Top Augmentation Partner in the Education Domain',
          description:
            'Introduction A multinational company (MNC) in the education domain has been using staff augmentation services from various high end IT companies in Sri Lanka for many years Indian based regional…',
          image: educationImage,
          buttonText: 'Read More',
        },
        {
          title:
            'Revolutionizing Job Searches: JobFactory.lk & CodeOne-X’s Transformative Collaboration',
          description:
            'Transforming Job Search with JobFactory.lk JobFactory.lk, in collaboration with CodeOne-X, has revolutionized the job search experience for Sri Lankan job seekers. By developing an innovative web application, we have streamlined the…',
          image: collaborationImage,
          buttonText: 'Read More',
        },
      ];

      return (
        <section className="business-cases">
          <div className="container business-cases-content">
            <h2>Business Cases</h2>
            <p className="business-cases-description">
              Explore the ways we have helped our clients to solve complex
              problems
            </p>
            <div className="cases-grid">
              {cases.map((businessCase, index) => (
                <div key={index} className="case-card">
                  <img
                    src={businessCase.image}
                    alt={businessCase.title}
                    className="case-image"
                  />
                  <h3>{businessCase.title}</h3>
                  <p>{businessCase.description}</p>
                  <button className="read-more-button">
                    {businessCase.buttonText}
                  </button>
                </div>
              ))}
            </div>
            <div className="testimonial-section">
              <img
                src={awardsImage}
                alt="Awards"
                className="awards-image"
              />
              <blockquote className="testimonial-text">
                “At CodeOne-X, we broaden our recruitment scope to include
                countries like Nepal, the Philippines, and Jamaica, tapping into a
                diverse talent pool for a truly global perspective.
                <br />
                <br />
                Our team have extensive expertise in all of the leading platforms,
                frameworks, programming languages. We are proud our team’s
                English proficiency, ensuring seamless communication with clients.
                <br />
                <br />
                Operating in different time zones, we effortlessly align with
                client schedules. Highlighting our fast hiring, top talent, cost
                advantages, and comprehensive onboarding and support, we emphasize
                our commitment to excellence.”
              </blockquote>
              <p className="testimonial-author">
                Madhushan Raigamage
                <br />
                <span className="testimonial-title">CXO, CodeOne-X</span>
              </p>
            </div>
          </div>
        </section>
      );
    };

    export default BusinessCases;
