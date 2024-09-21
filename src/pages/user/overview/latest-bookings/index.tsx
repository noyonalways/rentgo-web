import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, XCircle } from "lucide-react";

interface Booking {
  carName: string;
  date: string;
  startTime: string;
  endTime: string;
  status: string;
}

interface IProps {}

const LatestBookings: React.FC<IProps> = () => {
  const bookings: Booking[] = [
    {
      carName: "Range Rover",
      date: "22/09/2024",
      startTime: "10:00 AM",
      endTime: "N/A",
      status: "Pending",
    },
    // Add more bookings here for demonstration
    {
      carName: "Tesla Model 3",
      date: "23/09/2024",
      startTime: "2:00 PM",
      endTime: "5:00 PM",
      status: "Confirmed",
    },
    {
      carName: "BMW X5",
      date: "24/09/2024",
      startTime: "9:00 AM",
      endTime: "N/A",
      status: "Pending",
    },
    {
      carName: "BMW X5",
      date: "24/09/2024",
      startTime: "9:00 AM",
      endTime: "N/A",
      status: "Pending",
    },
    {
      carName: "BMW X5",
      date: "24/09/2024",
      startTime: "9:00 AM",
      endTime: "N/A",
      status: "Pending",
    },
  ];

  return (
    <div>
      {/* Mobile view */}
      <div className="md:hidden">
        {bookings.map((booking, index) => (
          <Card key={index} className="mb-4">
            <CardHeader>
              <CardTitle>{booking.carName}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm font-medium">Date:</div>
                <div className="text-sm">{booking.date}</div>
                <div className="text-sm font-medium">Start Time:</div>
                <div className="text-sm">{booking.startTime}</div>
                <div className="text-sm font-medium">End Time:</div>
                <div className="text-sm">{booking.endTime}</div>
                <div className="text-sm font-medium">Status:</div>
                <div className="text-sm">{booking.status}</div>
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <button className="p-2 hover:bg-primary hover:text-white rounded-full">
                  <Edit size={20} />
                </button>
                <button className="p-2 hover:bg-primary hover:text-white rounded-full">
                  <XCircle size={20} />
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Desktop view */}
      <div className="hidden md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Car Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Start Time</TableHead>
              <TableHead>End Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((booking, index) => (
              <TableRow key={index}>
                <TableCell>{booking.carName}</TableCell>
                <TableCell>{booking.date}</TableCell>
                <TableCell>{booking.startTime}</TableCell>
                <TableCell>{booking.endTime}</TableCell>
                <TableCell>{booking.status}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <button className="p-2 hover:bg-primary hover:text-white rounded-full">
                      <Edit size={20} />
                    </button>
                    <button className="p-2 hover:bg-primary hover:text-white  rounded-full">
                      <XCircle size={20} />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default LatestBookings;
