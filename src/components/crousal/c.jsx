import React, { useState } from "react";
import "./c.css";

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      text: "The bot helped us boost our revenue by using conversational marketing, abandoned cart conversions, and an easy to use broadcast feature.",
      rating: 5,
      author: "Vikas Kabra",
      position: "Entrepreneur in Residence, Neemans",
      image: "https://via.placeholder.com/450"
    },
    {
      id: 2,
      text: "In the past two years, we've nearly tripled ourselves and are on the verge of profitability. LimeChat has been instrumental in this journey, accelerating our growth and optimizing marketing ROI. Thanks to Aniket and the LimeChat team for their invaluable support!",
      rating: 5,
      author: "Khalid Kamal Rumi",
      position: "CMO, The Indus Valley",
      image: "https://via.placeholder.com/450"
    },
    {
      id: 3,
      text: "LimeChat's AI-powered GPT bots have significantly boosted efficiency. The bots handle most queries, allowing our agents to focus on crucial issues, leading to higher CSAT and NPS scores.",
      rating: 5,
      author: "Gaurav Jain",
      position: "VP, Customer Delight, Wow Skin Science",
      image: "https://via.placeholder.com/450"
    },
    {
      id: 4,
      text: "LimeChat has been a fantastic partner to Kapiva, helping us grow everything from CRM and content to CS (Customer Support).",
      rating: 5,
      author: "Ameve Sharma",
      position: "Founder, Kapiva",
      image: "https://via.placeholder.com/450"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="carousel">
      <div className="carousel-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
          >
            <div className="carousel-content">
              <p>{slide.text}</p>
              <div className="rating">
                {"★".repeat(slide.rating)}
              </div>
              <div className="author-info">
                <p>{slide.author}</p>
                <p>{slide.position}</p>
              </div>
            </div>
            <div className="carousel-image">
              <img src={slide.image} alt={`Slide ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button className="carousel-control prev" onClick={prevSlide}>
          &larr;
        </button>
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
        <button className="carousel-control next" onClick={nextSlide}>
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
