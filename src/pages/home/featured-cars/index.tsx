import CarCard from "@/components/car-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useGetAllCarsQuery } from "@/redux/features/car/carApi";
import Autoplay from "embla-carousel-autoplay";

interface IProps {}

const FeaturedCars: React.FC<IProps> = () => {
  const { data } = useGetAllCarsQuery(undefined);

  const cars = data?.data;

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center space-y-2 mb-16">
          <h3 className="text-primary font-semibold tracking-[.15rem]">
            Featured Cars
          </h3>
          <h1 className="font-bold text-3xl">Our Featured Cars</h1>
        </div>
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent>
            {cars?.map((car) => (
              <CarouselItem key={car._id} className="basis-full lg:basis-1/4">
                <CarCard {...car} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedCars;
