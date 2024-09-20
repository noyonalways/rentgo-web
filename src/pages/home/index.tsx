import FeaturedCars from "./featured-cars";
import Hero from "./hero";
import Testimonial from "./testimonial";
import WhyChooseUs from "./why-choose-us";

interface IProps {}

const Home: React.FC<IProps> = () => {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <FeaturedCars />
      <Testimonial />
    </>
  );
};

export default Home;
