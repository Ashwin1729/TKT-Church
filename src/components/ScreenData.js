import React, { useEffect, useRef, useState } from "react";
import "./ScreenData.css";

const ScreenData = ({ screen, idx, setCurrImage }) => {
  const [showAnimation, setShowAnimation] = useState(false);

  const ref = useRef(null);

  const toggleAnimation = (e) => {
    console.log(e);
    if (e[0]?.isIntersecting) {
      setShowAnimation(true);
      setCurrImage(idx);
    }
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(toggleAnimation, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  });

  return (
    <div
      className={`screenData ${showAnimation ? "textVisible" : ""} `}
      ref={ref}
    >
      <h2>{screen.heading}</h2>
      <div>
        <p>{screen.description}</p>
      </div>
    </div>
  );
};

export default ScreenData;
