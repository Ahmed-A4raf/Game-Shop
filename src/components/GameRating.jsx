/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./gameRating.css";

const GameRating = ({ rating }) => {
  const [stars, setStars] = useState([]);

  const generateStars = () => {
    let stars = [];
    if (rating > 5 || rating < 1) {
      return;
    }
    for (let i = 0; i < rating; i++) {
      stars.push(i);
    }
    return stars;
  };

  useEffect(() => {
    setStars(generateStars());
  }, []);

  return (
    <div className="gameRating">
      {stars.map((star, index) => {
        return <i key={index} className="bi bi-star-fill"></i>;
      })}
    </div>
  );
};

export default GameRating;
