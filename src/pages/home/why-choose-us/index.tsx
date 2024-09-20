import { Button } from "@/components/ui/button";

interface IProps {}

const WhyChooseUs: React.FC<IProps> = () => {
  return (
    <section className="pb-20 lg:pt-10">
      <div className="container">
        <div className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:space-x-28 ">
          <figure>
            <img
              src="https://i.ibb.co.com/1Rk38xd/why-choose-us-image-illustration.png"
              alt="why-choose-us-image"
            />
          </figure>
          <div>
            <div className="space-y-2 mb-6">
              <h3 className="text-primary font-semibold tracking-[.15rem]">
                Why Choose Us
              </h3>
              <h1 className="font-bold text-3xl">Why you will choose us</h1>
              <p className="!mt-4">
                At our car rental company, we pride ourselves on providing an
                exceptional experience that sets us apart from the competition.
                From our wide selection of well-maintained vehicles to our
                unparalleled customer service, we're dedicated to making your
                rental experience seamless and enjoyable.
              </p>
            </div>
            <Button size={"lg"}>Read More</Button>
            <div className="border-t mt-6 pt-6 flex space-x-6 lg:space-x-16">
              <div className="space-y-1">
                <h2 className="text-3xl font-semibold">20+</h2>
                <p className="text-sm">Car Types</p>
              </div>
              <div className="space-y-1">
                <h2 className="text-3xl font-semibold">85+</h2>
                <p className="text-sm">Rental Outlets</p>
              </div>
              <div className="space-y-1">
                <h2 className="text-3xl font-semibold">75+</h2>
                <p className="text-sm">Repair Shops</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
