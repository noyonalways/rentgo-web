import ImageMagnifier from "@/components/image-magnifier";
import BouncingLoader from "@/components/loader";
import { Button } from "@/components/ui/button";
import { useGetSingleCarQuery } from "@/redux/features/car/carApi";
import { Car, Check, Palette, User, Zap } from "lucide-react";
import { PiNotification } from "react-icons/pi";
import { Link, useParams } from "react-router-dom";

interface IProps {}

const CarDetails: React.FC<IProps> = () => {
  const params = useParams();

  const { data, isLoading } = useGetSingleCarQuery(params?.id as string);

  const {
    _id,
    name,
    description,
    type,
    seatCapacity,
    isElectric,
    color,
    status,
    pricePerHour,
    galleryImages,
    features,
  } = data?.data ?? {};

  return (
    <section>
      {isLoading ? (
        <div className="h-[55vh] flex items-center  container justify-center">
          <BouncingLoader />
        </div>
      ) : (
        <>
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
                  {type}
                </h3>
                <h1 className="font-bold text-4xl text-white">{name}</h1>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="flex flex-col lg:flex-row  lg:space-x-20 py-10 lg:py-16">
              <div className="basis-full lg:basis-[60%] space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">
                    General Information
                  </h2>
                  <p>{description}</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    {features &&
                      features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center space-x-4"
                        >
                          <div className="bg-secondary inline-block p-3 ro rounded-full">
                            <Check size={16} className="text-primary" />
                          </div>
                          <p>{feature}</p>
                        </div>
                      ))}
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-secondary inline-block p-3 ro rounded-full">
                        <Check size={16} className="text-primary" />
                      </div>
                      <p>24/7 Support Assistance</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-secondary inline-block p-3 ro rounded-full">
                        <Check size={16} className="text-primary" />
                      </div>
                      <p>Free Cancellation and Return</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-secondary inline-block p-3 ro rounded-full">
                        <Check size={16} className="text-primary" />
                      </div>
                      <p>Rent Now Pay When Return</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold">Gallery Images</h2>
                  <div className="grid lg:grid-cols-2 gap-4">
                    {galleryImages &&
                      galleryImages.map((img) => (
                        <ImageMagnifier
                          key={img._id}
                          src={img.url}
                          alt="car-image"
                          width={500}
                          height={500}
                          className="border rounded-xl"
                        />
                      ))}
                  </div>
                </div>
              </div>

              <div className="lg:flex-1 lg:-mt-[148px] mt-10">
                <h3 className="p-6 bg-primary rounded-t-xl text-center text-3xl font-semibold text-white">
                  ৳{pricePerHour}/hr
                </h3>
                <div className="p-6 border rounded-b-xl space-y-8 bg-background">
                  <div className="grid grid-cols-2">
                    <div className="flex items-center space-x-2">
                      <Car size={20} className="text-primary" />
                      <span>Car Type</span>
                    </div>
                    <p>{type}</p>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="flex items-center space-x-2">
                      <User size={20} className="text-primary" />
                      <span>Passengers</span>
                    </div>
                    <p>{seatCapacity}</p>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="flex items-center space-x-2">
                      <Zap size={20} className="text-primary" />
                      <span>Electric</span>
                    </div>
                    <p>{isElectric ? "Yes" : "No"}</p>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="flex items-center space-x-2">
                      <Palette size={20} className="text-primary" />
                      <span>Color</span>
                    </div>
                    <p>{color}</p>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="flex items-center space-x-2">
                      <PiNotification size={20} className="text-primary" />
                      <span>Status</span>
                    </div>
                    <p>{status}</p>
                  </div>
                  <Link
                    className="inline-block w-full"
                    to={`/cars/${_id}/booking`}
                  >
                    <Button className="w-full" size="lg">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default CarDetails;
