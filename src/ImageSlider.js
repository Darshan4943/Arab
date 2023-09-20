import React, { useEffect, useState } from "react";
import "./ImageSlider.css";

export const ImageSlider = () => {
  const [positions, setPositions] = useState([
    {
      left: "unset",
      scale: "0.7",
      zindex: "100",
      right: "585px",
      
      animation: "transition",
      class:"gallary-item-1",
    },
    {
      left: "unset",
      scale: "0.8",
      zindex: "500",
      right: "455px",
   
      animation: " transition fadeInscale2",
      class:"gallary-item-2",

    },
    {
      zindex: "800",
      scale: "1",
      left: "unset",
      animation: "fadeIn ",
      right: "285px",
     
      class:"gallary-item-3 ",

    },
    {
      right: "120px",
      scale: "0.8",
      zindex: "500",
      left: "unset",
     
      animation: "transition",
      class:"gallary-item-4",

    },
    {
      right: "0",
      scale: "0.7",
      zindex: "100",
      left: "unset",
     
      animation: "transition fadeInscale3",
      class:"gallary-item-5",

    },
  ]);

  const [shiftDirection, setShiftDirection] = useState("clockwise");

  const shiftClockwise = () => {
    setShiftDirection("clockwise");
  };

  const shiftAntiClockwise = () => {
    setShiftDirection("anticlockwise");
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (shiftDirection === "clockwise") {
        setPositions((prevPositions) => {
          const newPositions = [...prevPositions];
          newPositions.unshift(newPositions.pop());
          return newPositions;
        });
      } else {
        setPositions((prevPositions) => {
          const newPositions = [...prevPositions];
          newPositions.push(newPositions.shift());
          return newPositions;
        });
      }
    }, 2000);

    return () => clearInterval(intervalId);
  }, [shiftDirection]);



  return (
    <div className="main">
    <div className="HomepageCarousel">
    <div className="gallary">
      <div className="gallary-container">
        {positions.map((position, index) => (
          <img
            key={index}
            src={`/images/slider/${index + 1}.png`}
            alt={` ${index + 1}`}
            className={`gallary-item ${position.class}`}
          />
        ))}
      </div>
      <div className="slider-arrows">
        
        <button onClick={shiftClockwise} className="arrow left-arrow">
          &#8592; {/* Right arrow */}
        </button>
        <button onClick={shiftAntiClockwise} className="arrow right-arrow">
          &#8594; {/* Right arrow */}
        </button>
       
      </div>
    </div>
  </div>
  </div>
  );
};
