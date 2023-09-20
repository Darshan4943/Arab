import React, { useState, useEffect } from "react";
import { ImageSlider } from "./ImageSlider"; 
import "./App.css";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const images = [
    "/images/slider/1.png",
    "/images/slider/2.png",
    "/images/slider/3.png",
    "/images/slider/4.png",
    "/images/slider/5.png",
  ];

  const handleImageChange = (index) => {
    setCurrentImage(index);
  };

  const sliderStyles = {
    transform: `translateX(-${currentImage * 100}%)`, 
  };

  return (
    <div className="App">
      {windowWidth > 1250 && <ImageSlider />}
      {windowWidth < 1250 && (
       
        <div className="custom-slider">
          <div className="slider-images" style={sliderStyles}>
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt="poster"
                className="slider-image"
              />
            ))}
          </div>
          <div className="slider-dots">
            {images.map((src, index) => (
              <span
                key={index}
                className={index === currentImage ? "active" : ""}
                onClick={() => handleImageChange(index)}
              ></span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
