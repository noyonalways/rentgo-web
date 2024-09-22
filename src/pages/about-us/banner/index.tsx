interface IProps {}

const Banner: React.FC<IProps> = () => {
  return (
    <section>
      <div
        style={{
          backgroundImage: `url("https://i.ibb.co.com/4f0VR2v/about-us-banner-image-opt.png")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="h-[25vh] lg:h-[70vh] flex flex-col justify-center"
      >
        <div className="container">
          <div className="space-y-2 text-start">
            <h3 className="text-primary font-semibold tracking-[.15rem]">
              RentGo
            </h3>
            <h1 className="font-bold text-4xl lg:text-5xl text-white">
              About Us
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
