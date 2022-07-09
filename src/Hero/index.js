import "./style.scss";
import { Link } from "react-router-dom";

function Hero() {
  function scroll() {}
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
