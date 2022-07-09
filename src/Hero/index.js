import "./style.scss";
import { Link } from "react-router-dom";

function Hero() {
  function scroll() {
    const element = document.getElementById("test-section");
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
  return (
    <section id="hero">
      <div onClick={scroll} className="box">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Link
        to="products"
        id="call-to-action-button"
        className="call-to-action-button"
      >
        SHOP PRODUCTS
      </Link>
    </section>
  );
}

export default Hero;
