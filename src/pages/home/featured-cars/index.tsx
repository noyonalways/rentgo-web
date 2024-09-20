import CarCard from "@/components/car-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface IProps {}

const FeaturedCars: React.FC<IProps> = () => {
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
            align: "start",
          }}
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="basis-full lg:basis-1/4">
                <CarCard />
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedCars;
