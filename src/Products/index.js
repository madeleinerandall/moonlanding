import "./style.scss";
import { Link } from "react-router-dom";
import c1 from "./carousel1.jpg";
import c2 from "./carousel2.jpg";
import c3 from "./carousel3.jpg";

function Products() {
  return (
    <>
      <section id="products">
        <div className="gutters">
          <img src={c2} alt="first product" loading="lazy" />
          <div className="products-text">
            <h2>Visit our store!</h2>
            <p>120 Gertrude St, Fitzroy, Victoria.</p>
          </div>
        </div>
      </section>

      <section id="view">
        <div className="gutters">
          <div className="products-text">
            <h2>View our products</h2>
            <p> Shop our beautiful handcrafted products</p>
            <Link id="link" to="products">
              SHOP
            </Link>
          </div>
          <img src={c1} alt="first product" loading="lazy" />
        </div>
      </section>

      <section id="contact">
        <div className="gutters">
          <img src={c3} alt="first product" loading="lazy" />
          <div className="products-text">
            <h2>Contact us</h2>
            <Link id="contact-link" to="contact">
              Find all our contact details here
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
