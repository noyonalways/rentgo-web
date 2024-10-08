import { TCar } from "@/types";
import { User } from "lucide-react";
import { TbManualGearbox } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

interface IProps extends TCar {}

const CarCard: React.FC<IProps> = ({
  name,
  image,
  seatCapacity,
  pricePerHour,
  transmission,
  _id,
  status,
}) => {
  return (
    <div className="border p-4 rounded-xl relative">
      <h2 className="text-lg font-semibold">{name}</h2>
      <figure className="p-4 mb-2 h-60">
        <img
          className="w-full object-contain max-h-56"
          src={
            image.length > 1
              ? image
              : "https://i.ibb.co.com/kqpbXz8/white-sample-car.png"
          }
          alt="car-image"
        />
      </figure>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-10">
          <div className="flex space-x-2 items-center">
            <User className="text-primary" size={24} />
            <p>{seatCapacity}</p>
          </div>
          <div className="flex space-x-2 items-center">
            <TbManualGearbox className="text-primary" size={24} />
            <p>{transmission}</p>
          </div>
        </div>
        <div className="font-medium">
          <span>৳ {pricePerHour}</span>
          <span>/hr</span>
        </div>
      </div>
      {status === "unavailable" && (
        <div className="absolute left-0 top-0 w-full bg-muted/90 h-full rounded-xl flex items-center justify-center duration-200 transition-all cursor-pointer">
          <p className="p-4 text-center bg-primary w-full text-white">
            Unavailable
          </p>
        </div>
      )}
      {status === "available" && (
        <div className="absolute left-0 top-0 w-full bg-primary/90 h-full rounded-xl flex items-center justify-center opacity-0 hover:opacity-100 duration-200 transition-all cursor-pointer">
          <Link to={`/cars/${_id}`}>
            <Button className="border dark:hover:border-primary border-white bg-transparent hover:bg-background hover:text-primary active:scale-95 duration-200">
              View Details
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CarCard;
