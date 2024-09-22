import { useTheme } from "@/hooks/useTheme";
import Marquee from "react-fast-marquee";

interface IProps {}

interface IBrand {
  id: number;
  name: string;
  url: string;
}

const brands: IBrand[] = [
  { id: 1, name: "Audi", url: "https://i.ibb.co.com/zNLFL3w/audi.png" },
  { id: 2, name: "Hyundai", url: "https://i.ibb.co.com/MVSm86y/hyundai.png" },
  { id: 3, name: "Mazda", url: "https://i.ibb.co.com/MftzfQC/mazda.png" },
  { id: 4, name: "Mercedes", url: "https://i.ibb.co.com/q9YVf22/mercedes.png" },
  { id: 5, name: "Nissan", url: "https://i.ibb.co.com/Bz4y7gd/nissan.png" },
  { id: 6, name: "Toyota", url: "https://i.ibb.co.com/1QnQh7t/toyota.png" },
  {
    id: 7,
    name: "Volkswagen",
    url: "https://i.ibb.co.com/B221DKf/volkswagen.png",
  },
  { id: 8, name: "BMW", url: "https://i.ibb.co.com/Kj1c6WZ/bmw.png" },
  { id: 9, name: "Volvo", url: "https://i.ibb.co.com/FVW70qK/volvo.png" },
  { id: 10, name: "Honda", url: "https://i.ibb.co.com/6r8VPRz/honda.png" },
];

const PopularBrands: React.FC<IProps> = () => {
  const { theme } = useTheme();
  return (
    <section className="pb-20">
      <div className="container">
        <h1 className="font-bold text-3xl text-center mb-16">Popular Brands</h1>
        <Marquee
          speed={40}
          autoFill
          pauseOnHover
          gradient={true}
          gradientColor={theme === "light" ? "#ffffff" : "#0c0a09"}
        >
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex flex-col justify-center items-center m-2 lg:m-4 cursor-pointer"
            >
              <img
                className="object-contain w-48 h-20"
                src={brand.url}
                alt={brand.name}
              />
            </div>
          ))}
        </Marquee>
        <Marquee
          speed={30}
          className="mt-14"
          direction="right"
          autoFill
          pauseOnHover
          gradient={true}
          gradientColor={theme === "light" ? "#ffffff" : "#0c0a09"}
        >
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex flex-col justify-center items-center m-2 lg:m-4 cursor-pointer"
            >
              <img
                className="object-contain w-48 h-20"
                src={brand.url}
                alt={brand.name}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default PopularBrands;

// https://i.ibb.co.com/zNLFL3w/audi.png
// https://i.ibb.co.com/MVSm86y/hyundai.png
// https://i.ibb.co.com/MftzfQC/mazda.png
// https://i.ibb.co.com/q9YVf22/mercedes.png
// https://i.ibb.co.com/Bz4y7gd/nissan.png
// https://i.ibb.co.com/1QnQh7t/toyota.png
// https://i.ibb.co.com/B221DKf/volkswagen.png
// https://i.ibb.co.com/Kj1c6WZ/bmw.png
// https://i.ibb.co.com/FVW70qK/volvo.png
// https://i.ibb.co.com/6r8VPRz/honda.png
