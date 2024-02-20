import React, { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { GoDot, GoDotFill } from "react-icons/go";
import "./ImgSlider.css";

const ImgSlider = () => {
  const images = [
    {
      url: `https://images.pexels.com/photos/8123311/pexels-photo-8123311.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load`,
    },
    {
      url: `https://images.pexels.com/photos/20179666/pexels-photo-20179666/free-photo-of-miracle-experience-balloon-safaris-at-serengeti-and-tarangire-national-park.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load`,
    },
    {
      url: `https://images.pexels.com/photos/19035715/pexels-photo-19035715/free-photo-of-butterfly-sitting-on-lavender-plants-in-provence-garden.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load`,
    },
    {
      url: `https://images.pexels.com/photos/17319418/pexels-photo-17319418/free-photo-of-exterior-of-a-residential-building-with-irregular-windows.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load`,
    },
    {
      url: `https://images.pexels.com/photos/20200109/pexels-photo-20200109/free-photo-of-lake-entrance-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load`,
    },
    {
      url: `https://images.pexels.com/photos/19861090/pexels-photo-19861090/free-photo-of-a-bench-is-sitting-against-an-orange-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load`,
    },
  ];
  const [imgIndex, setImgIndex] = useState(0);

  const showPrevImage = () => {
    setImgIndex((index) => {
      if (index === 0) return images.length - 1;
      else return index - 1;
    });
  };

  const showNextImage = () => {
    setImgIndex((index) => {
      if (index === images.length - 1) return 0;
      else return index + 1;
    });
  };

  return (
    <div className="relative w-full h-[600px]">
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {images.map((url) => (
          <img
            key={url}
            className="img-slider-img"
            src={url.url}
            alt="ImgUrls"
            style={{ translate: `${-100 * imgIndex}%` }}
          />
        ))}
      </div>

      <button
        onClick={showPrevImage}
        style={{ left: 0 }}
        className="img-slider-btn"
      >
        <FaChevronCircleLeft />
      </button>
      <button
        onClick={showNextImage}
        style={{ right: 0 }}
        className="img-slider-btn"
      >
        <FaChevronCircleRight />
      </button>

      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".5rem",
        }}
      >
        {images.map((_, i) => (
          <button
            key={i}
            className="img-slider-dot-btn"
            onClick={() => setImgIndex(i)}
          >
            {i === imgIndex ? <GoDotFill /> : <GoDot />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImgSlider;
