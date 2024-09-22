import ImageMagnifier from "@/components/image-magnifier";
import { Button } from "@/components/ui/button";
import { Car, Check, Palette, User, Zap } from "lucide-react";
import { PiNotification } from "react-icons/pi";
import { Link } from "react-router-dom";

interface IProps {}

const CarDetails: React.FC<IProps> = () => {
  return (
    <section>
      <div
        style={{
          backgroundImage: `url("https://i.ibb.co.com/nfsQyLq/banner-imge-optimized.png")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="h-[25vh] lg:h-[70vh] flex flex-col justify-center"
      >
        <div className="container">
          <div className="space-y-2">
            <h3 className="text-primary font-semibold tracking-[.15rem]">
              SUV
            </h3>
            <h1 className="font-bold text-4xl text-white">Range Rover</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex flex-col lg:flex-row  lg:space-x-20 py-10 lg:py-16">
          <div className="basis-full lg:basis-[60%] space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">General Information</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-secondary inline-block p-4 ro rounded-full">
                  <Check size={20} className="text-primary" />
                </div>
                <p>24/7 Support Assistance</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-secondary inline-block p-4 ro rounded-full">
                  <Check size={20} className="text-primary" />
                </div>
                <p>Free Cancellation and Return</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-secondary inline-block p-4 ro rounded-full">
                  <Check size={20} className="text-primary" />
                </div>
                <p>Rent Now Pay When Return</p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Gallery Images</h2>
              <div className="grid lg:grid-cols-2 gap-4">
                <ImageMagnifier
                  src="https://i.ibb.co.com/kqpbXz8/white-sample-car.png"
                  alt="car-image"
                  width={500}
                  height={500}
                  className="border rounded-xl"
                />
                <ImageMagnifier
                  src="https://i.ibb.co.com/kqpbXz8/white-sample-car.png"
                  alt="car-image"
                  width={500}
                  height={500}
                  className="border rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="lg:flex-1 lg:-mt-[148px] mt-10">
            <h3 className="p-6 bg-primary rounded-t-xl text-center text-3xl font-semibold text-white">
              ৳500/hr
            </h3>
            <div className="p-6 border rounded-b-xl space-y-8 bg-background">
              <div className="grid grid-cols-2">
                <div className="flex items-center space-x-2">
                  <Car size={20} className="text-primary" />
                  <span>Car Type</span>
                </div>
                <p>SUV</p>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex items-center space-x-2">
                  <User size={20} className="text-primary" />
                  <span>Passengers</span>
                </div>
                <p>04</p>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex items-center space-x-2">
                  <Zap size={20} className="text-primary" />
                  <span>Electric</span>
                </div>
                <p>No</p>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex items-center space-x-2">
                  <Palette size={20} className="text-primary" />
                  <span>Color</span>
                </div>
                <p>SUV</p>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex items-center space-x-2">
                  <PiNotification size={20} className="text-primary" />
                  <span>Status</span>
                </div>
                <p>SUV</p>
              </div>
              <Link
                className="inline-block w-full"
                to={`/cars/random-id/booking`}
              >
                <Button className="w-full" size="lg">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetails;
