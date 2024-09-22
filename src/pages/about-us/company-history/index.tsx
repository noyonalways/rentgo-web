interface IProps {}

const CompanyHistory: React.FC<IProps> = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Our History
        </h2>
        <p className="mt-4 max-w-[700px]">
          Founded in 1995, Acme Car Rental has been providing top-notch car
          rental services for over 25 years. Our mission is to offer convenient,
          reliable, and affordable transportation solutions to our customers.
        </p>
        <p className="mt-4 max-w-[700px]">
          Our vision is to become the most trusted and preferred car rental
          company worldwide, known for our exceptional customer service and
          diverse fleet of vehicles.
        </p>
      </div>
    </section>
  );
};

export default CompanyHistory;
