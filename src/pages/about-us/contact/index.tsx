import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

interface IProps {}

const Contact: React.FC<IProps> = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="mr-2" />
                Phone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">+1 (555) 123-4567</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="mr-2" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">info@rentgo.com</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="mr-2" />
                Address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">123 Main St, Dhaka, Bangladesh</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
