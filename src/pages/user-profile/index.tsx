import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetMeQuery } from "@/redux/features/auth/authApi";
import { CalendarDays, Car, Info, Mail, MapPin, Phone } from "lucide-react";
import UpdateProfileModal from "./update-profile-modal";

const UserProfile = () => {
  const { data: currentUser, isLoading } = useGetMeQuery(undefined, {
    refetchOnFocus: true,
  });
  const {
    name,
    email,
    createdAt,
    profileImage,
    phone,
    address,
    dateOfBirth,
    drivingLicense,
    nidOrPassport,
    role,
  } = currentUser?.data || {};
  return (
    <section className="pt-10 pb-20">
      <div className="container">
        <Card className="border-none shadow-none">
          <CardHeader className="flex flex-col sm:flex-row lg:items-center gap-4 px-0">
            {isLoading ? (
              <div className="flex items-center space-x-4">
                <Skeleton className="size-36 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-6 w-[250px]" />
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            ) : (
              <div className="flex justify-start space-x-4">
                <Avatar className="w-24 h-24 sm:w-32 sm:h-32">
                  <AvatarImage src={profileImage} alt="Customer avatar" />
                  <AvatarFallback className="bg-muted dark:bg-primary/15 text-5xl font-bold">
                    {name?.[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="text-start sm:text-left space-y-2">
                  <CardTitle className="text-2xl sm:text-3xl">{name}</CardTitle>
                  <CardDescription>
                    Registered since {new Date(createdAt!).toDateString()}
                  </CardDescription>
                  <div className="flex gap-2 mt-2">
                    <Badge variant="outline">
                      {(role === "user" && "User") ||
                        (role === "admin" && "Admin")}
                    </Badge>
                    {role === "user" && (
                      <Badge variant="outline">Business Traveler</Badge>
                    )}
                  </div>
                </div>
              </div>
            )}
            <div className="hidden lg:inline-block lg:ml-auto ">
              <UpdateProfileModal />
            </div>
          </CardHeader>
          <CardContent className="space-y-6 px-0">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">General Information</h3>
              <div className="grid lg:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-muted-foreground" />
                  <span>
                    License: {drivingLicense ? drivingLicense : "N/A"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-muted-foreground" />
                  <span>
                    NID/Passport: {nidOrPassport ? nidOrPassport : "N/A"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>{address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDays className="w-4 h-4 text-muted-foreground" />
                  <span>{dateOfBirth?.split("T")[0]}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span>{phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span>{email}</span>
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
        <div className="lg:hidden w-full">
          <UpdateProfileModal />
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
