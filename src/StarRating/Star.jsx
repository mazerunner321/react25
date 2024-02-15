import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <>
      <main className="flex justify-center items-center h-screen">
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;

          return (
            <label>
              <input
                type="radio"
                name="rating"
                className="invisible"
                value={rating}
                onChange={() => setRating(ratingValue)}
              />
              <FaStar
                size={70}
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </main>
    </>
  );
};

export default Star;
