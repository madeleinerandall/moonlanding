import "./style.scss";
import { useEffect, useState } from "react";
import c1 from "./carousel1.png";
import c2 from "./carousel2.png";
import c3 from "./carousel3.png";

function Section1() {
  let [currentSlide, setCurrentSlide] = useState(0);
  const slidesArr = [c1, c2, c3];

  return (
    <section id="section1">
      <div className="section1 gutters">
        <h1 id="test-section">
          Ceramics, handmade in Australia to bring the joy of colour into your
          home.
        </h1>
      </div>

      <div className="gutters">
        <ul className="carousel">
          {/* {slidesArr.map((src, i) => {
            return <img
              key={i}
              src={src}
              alt="carousel image 2"
              style={{ transform: `translateX(calc(-100% * ${currentSlide}))` }}
            />
          )}} */}
          {slidesArr.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`carousel image ${i + 1}`}
              style={{ transform: `translateX(calc(-100% * ${currentSlide}))` }}
            />
          ))}
        </ul>

        <div className="buttons">
          <button className="prev" onClick={() => setCurrentSlide(0)}></button>
          <button className="prev" onClick={() => setCurrentSlide(1)}></button>
          <button className="next" onClick={() => setCurrentSlide(2)}></button>
        </div>
      </div>
    </section>
  );
}

export default Section1;
