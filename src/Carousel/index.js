import "./style.scss";
import { useEffect } from "react";
import Siema from "siema";
import c1 from "./carousel1.png";
import c2 from "./carousel2.png";
import c3 from "./carousel3.png";

function Section1() {
  // This runs once after render
  useEffect(() => {
    const mySiema = new Siema({
      selector: ".siema",
      duration: 200,
      easing: "ease-out",
      perPage: 1,
      startIndex: 0,
      draggable: true,
      multipleDrag: true,
      threshold: 20,
      rtl: false,
      onInit: () => {},
      onChange: () => {},
    });

    document
      .querySelector(".prev")
      .addEventListener("click", () => mySiema.prev());
    document
      .querySelector(".next")
      .addEventListener("click", () => mySiema.next());
  }, []);

  return (
    <section id="section1">
      <div className="section1 gutters">
        <h1 id="test-section">
          Ceramics, handmade in Australia to bring the joy of colour into your
          home.
        </h1>
      </div>
      <div className="siema">
        <img src={c1} alt="carousel image 1" />
        <img src={c2} alt="carousel image 2" />
        <img src={c3} alt="carousel image 3" />
        <img src={c1} alt="carousel image 1" />
        <img src={c2} alt="carousel image 2" />
        <img src={c3} alt="carousel image 3" />
      </div>
      <div className="buttons">
        <button className="prev"></button>
        <button className="next"></button>
      </div>
    </section>
  );
}

export default Section1;
