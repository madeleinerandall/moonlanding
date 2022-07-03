import "./style.scss";
import { Link } from "react-router-dom";
import c1 from "./carousel1.png";
import c2 from "./carousel2.png";
import c3 from "./carousel3.png";

function Products() {
  return (
    <section id="products">
      <div className="products">
        <div className="gutters">
          <img src={c2} alt="first product" />
        </div>
        <div className="products-text">
          <h2>Visit our store!</h2>
          <p>120 Gertrude St, Fitzroy, Victoria.</p>
        </div>
      </div>

      <div id="view" className="products">
        <div className="products-text">
          <h2>Veiw our products</h2>
          <p> Shop our beautiful handcrafted products</p>
          <Link to="/">SHOP</Link>
        </div>
        <div className="gutters">
          <img src={c1} alt="first product" />
        </div>
      </div>

      <div id="contact" className="products">
        <div className="gutters">
          <img src={c3} alt="first product" />
        </div>
        <div className="products-text">
          <h2>Contact us</h2>
          <p>Find all our contact details here</p>
        </div>
      </div>
    </section>
  );
}

export default Products;
