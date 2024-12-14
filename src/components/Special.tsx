"use client";
import { useState } from "react";
import { FaHeart, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import Image from "next/image";

const dishes = [
  {
    id: 1,
    name: "Fattoush salad",
    description: "Description of the item",
    price: 24.0,
    rating: 4.9,
    image: "/salad1.png",
  },
  {
    id: 2,
    name: "Vegetable salad",
    description: "Description of the item",
    price: 26.0,
    rating: 4.6,
    image: "/salad2.png",
  },
  {
    id: 3,
    name: "Egg vegi salad",
    description: "Description of the item",
    price: 23.0,
    rating: 4.5,
    image: "/salad3.png",
  },
  {
    id: 4,
    name: "Caesar salad",
    description: "Description of the item",
    price: 28.0,
    rating: 4.7,
    image: "/salad1.png",
  },
];

const SpecialDish = () => {
  const [likedDishes, setLikedDishes] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleLike = (id: number) => {
    setLikedDishes((prev) =>
      prev.includes(id) ? prev.filter((dishId) => dishId !== id) : [...prev, id]
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? dishes.length - 3 : (prev - 1 + dishes.length) % dishes.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % dishes.length);
  };

  return (
    <div className="container">
      <div className="header">
        <h3 className="section-title">Special Dishes</h3>
        <h1 className="main-heading">
          Standout Dishes <br /> From Our Menu
        </h1>
      </div>

      <div className="carousel-container">
        <div className="arrows">
          <button className="arrow-button" onClick={handlePrevious}>
            <FaChevronLeft />
          </button>
          <button className="arrow-button" onClick={handleNext}>
            <FaChevronRight />
          </button>
        </div>

        <div className="carousel">
          {dishes.slice(currentIndex, currentIndex + 3).map((dish) => (
            <div className="card" key={dish.id}>
             <Image
             src={dish.image}   // Image path or URL
             alt={dish.name}    // Alt text for accessibility
             width={300}        // Set a proper width (adjust as needed)
             height={200}       // Set a proper height (adjust as needed)
             className="custom-class" // Optional, your CSS class
             priority           // Optional: prioritize loading for important images
              />

              <div className="card-content">
                <h2>{dish.name}</h2>
                <p>{dish.description}</p>
                <div className="price-rating">
                  <span className="price">${dish.price.toFixed(2)}</span>
                  <span className="rating">
                    {dish.rating} <FaStar color="gold" />
                  </span>
                </div>
              </div>
              <button
                className={`like-button ${
                  likedDishes.includes(dish.id) ? "liked" : ""
                }`}
                onClick={() => toggleLike(dish.id)}
              >
                <FaHeart />
              </button>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .container {
          padding: 2rem;
          max-width: 1200px;
          margin: auto;
        }

        .header {
          text-align: left;
          margin-bottom: 1rem;
        }

        .section-title {
          color: #ff4f4f;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .main-heading {
          font-size: 2.5rem;
          font-weight: bold;
        }

        .carousel-container {
          position: relative;
        }

        .arrows {
          position: absolute;
          top: -4rem;
          right: 0;
          display: flex;
          gap: 0.5rem;
        }

        .arrow-button {
          background: #4caf50;
          border: none;
          color: white;
          font-size: 1.5rem;
          padding: 0.5rem 1rem;
          border-radius: 50%;
          cursor: pointer;
        }

        .arrow-button:hover {
          background: #388e3c;
        }

        .carousel {
          display: flex;
          gap: 1rem;
          overflow: hidden;
        }

        .card {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          flex: 1;
          max-width: calc(33.33% - 1rem);
          padding: 1rem;
          position: relative;
        }

        .card img {
          width: 100%;
          border-radius: 12px;
        }

        .card-content {
          text-align: left;
          margin-top: 0.5rem;
        }

        .price-rating {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 0.5rem;
        }

        .like-button {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: #e0f7e0;
          border: none;
          padding: 0.5rem;
          border-radius: 50%;
          cursor: pointer;
          color: #4caf50;
        }

        .like-button.liked {
          background: #39db4a;
          color: white;
        }

        @media (max-width: 768px) {
          .main-heading {
            font-size: 2rem;
          }

          .arrows {
            top: -3rem;
          }

          .card {
            max-width: calc(50% - 1rem);
          }
        }

        @media (max-width: 480px) {
          .carousel {
            flex-direction: column;
          }

          .card {
            max-width: 100%;
          }

          .arrows {
            top: -2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default SpecialDish;
