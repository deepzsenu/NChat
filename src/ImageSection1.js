import React from 'react';
import img1 from './img1.png'; // Adjust the import based on your file structure
import './ImageSection.css';

const ImageSection1 = () => {
  return (
    <div className="image-section">
      <img src={img1} alt="Section 1" className="image-section-img" />
      <div className="image-section-content">
        <h2>The best-performing Abandoned Checkout Journey in the World</h2>
        <p>
          Are you getting the best possible conversion from your abandoned checkout? Use 2-way gamification, personalization, and WhatsApp checkout to instantly double abandoned cart revenue.
        </p>
      </div>
    </div>
  );
};

export default ImageSection1;
