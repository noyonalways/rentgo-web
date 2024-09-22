import FeaturedCars from "./featured-cars";
import Hero from "./hero";
import PopularBrands from "./popular-brands";
import Testimonial from "./testimonial";
import WhyChooseUs from "./why-choose-us";

interface IProps {}

const Home: React.FC<IProps> = () => {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <PopularBrands />
      <FeaturedCars />
      <Testimonial />
    </>
  );
};

export default Home;
