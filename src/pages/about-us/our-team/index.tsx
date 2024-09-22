import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface IProps {}

const OurTeam: React.FC<IProps> = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "John Doe",
              role: "CEO",
              image:
                "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              name: "Jane Smith",
              role: "COO",
              image:
                "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              name: "Mike Johnson",
              role: "Fleet Manager",
              image:
                "https://plus.unsplash.com/premium_photo-1689977871600-e755257fb5f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          ].map((member) => (
            <Card key={member.name}>
              <CardHeader className="">
                <img
                  src={member.image}
                  alt={member.name}
                  className="size-28 object-cover rounded-full overflow-hidden mx-auto"
                />
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle>{member.name}</CardTitle>
                <p className="text-sm">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
