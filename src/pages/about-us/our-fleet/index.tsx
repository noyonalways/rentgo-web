import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface IProps {}

const OurFleet: React.FC<IProps> = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
          Our Fleet
        </h2>
        <p className="mt-4 max-w-[700px] mb-8">
          We offer a wide range of vehicles to suit every need and budget:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Economy", "Luxury", "SUVs", "Vans", "Electric", "Sports Cars"].map(
            (category) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle>{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Explore our range of {category.toLowerCase()} vehicles.
                  </p>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default OurFleet;
