import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CalendarDays,
  Car,
  Info,
  Mail,
  MapPin,
  Pencil,
  Phone,
} from "lucide-react";

const UserProfile = () => {
  return (
    <section className="pt-10 pb-20">
      <div className="container">
        <Card className="border-none shadow-none">
          <CardHeader className="flex flex-col sm:flex-row items-center gap-4 px-0">
            <div className="flex justify-start space-x-4">
              <Avatar className="w-24 h-24 sm:w-32 sm:h-32">
                <AvatarImage
                  src="https://i.ibb.co.com/c64q254/noyon-logo-dark.png"
                  alt="Customer avatar"
                />
                <AvatarFallback className="bg-muted dark:bg-primary/15">
                  JD
                </AvatarFallback>
              </Avatar>
              <div className="text-start sm:text-left space-y-2">
                <CardTitle className="text-2xl sm:text-3xl">
                  John Driver
                </CardTitle>
                <CardDescription>Registered since 2020</CardDescription>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-2">
                  <Badge variant="outline">Frequent Renter</Badge>
                  <Badge variant="outline">Business Traveler</Badge>
                </div>
              </div>
            </div>
            <Button className="hidden lg:ml-auto sm:flex space-x-2 items-center">
              <Pencil size={16} />
              <span>Edit Profile</span>
            </Button>
          </CardHeader>
          <CardContent className="space-y-6 px-1 lg:px-0">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">General Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-muted-foreground" />
                  <span>License: XX1234567</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDays className="w-4 h-4 text-muted-foreground" />
                  <span>Member since June 2018</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2 sm:col-span-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span>john.driver@example.com</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Rental History</h3>
              <div className="space-y-3">
                {[
                  {
                    date: "May 15, 2023",
                    car: "Tesla Model 3",
                    location: "San Francisco Airport",
                  },
                  {
                    date: "Apr 2, 2023",
                    car: "BMW X5",
                    location: "Los Angeles Downtown",
                  },
                  {
                    date: "Mar 10, 2023",
                    car: "Toyota Camry",
                    location: "Seattle Airport",
                  },
                ].map((booking, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-muted dark:bg-primary/5 rounded-lg"
                  >
                    <div>
                      <div className="font-semibold">{booking.car}</div>
                      <div className="text-sm text-muted-foreground">
                        {booking.location}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground mt-2 sm:mt-0">
                      {booking.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Rental Statistics</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                {[
                  { label: "Total Rentals", value: "47", icon: Car },
                  {
                    label: "Most Frequent Location",
                    value: "SFO",
                    icon: MapPin,
                  },
                  {
                    label: "Last Rental Date",
                    value: "May 15, 2023",
                    icon: CalendarDays,
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-muted dark:bg-primary/5 rounded-lg p-3"
                  >
                    <stat.icon className="size-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
        <Button className="w-full mt-4 sm:hidden" size={"lg"}>
          Edit Profile
        </Button>
      </div>
    </section>
  );
};

export default UserProfile;
