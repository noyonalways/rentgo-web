import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface IProps {}

const ValueCommitment: React.FC<IProps> = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
          Values & Commitment
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Customer Service</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                We are committed to providing exceptional customer service,
                ensuring your rental experience is smooth and enjoyable from
                start to finish.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Sustainability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                We're dedicated to reducing our environmental impact by
                maintaining a fleet of fuel-efficient and electric vehicles.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ValueCommitment;
