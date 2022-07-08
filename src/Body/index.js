import Hero from "../Hero/";
import Carousel from "../Carousel/";
import Products from "../Products/";
import Subscribe from "../Subscribe/";
import ScrollToTop from "../ScrollToTop";

function Body() {
  return (
    <>
      <ScrollToTop />
      <div>
        <Hero />
        <Carousel />
        <Products />
        <Subscribe />
      </div>
    </>
  );
}

export default Body;
