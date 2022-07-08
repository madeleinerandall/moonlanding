import "./style.scss";
import product1 from "./carousel1.webp";
import product2 from "./carousel3.webp";
import tick from "./tick.png";
import ScrollToTop from "../ScrollToTop";

function ProductPage() {
  return (
    <>
      <ScrollToTop />
      <section>
        <div id="heading-section" />
        <div className="products-page gutters">
          <div className="products-images">
            <img src={product1} alt="product photo one" />
            <img src={product2} alt="product photo two" />
          </div>
          <div className="products-text">
            <div>
              <div className="products-title">
                <h1>Plate | Rainbow</h1>
                <p>$110.00 AUD</p>
              </div>
              <h3>Size</h3>
              <span id="product-span">Dinner Plate</span>
              <span>Side Plate</span>
            </div>
            <div className="products-input">
              <input type="text" />
              <button>ADD TO CART</button>
            </div>
            <div id="buy-now-button">
              <button>BUY IT NOW</button>
            </div>
            <div id="shipping-info">
              <div>
                <img src={tick} alt="tick" />
              </div>
              <div>
                <span>Worldwide shipping or instore pickup available</span>
                <p>Usually ready in 1 hour</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductPage;
