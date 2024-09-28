import { TCar } from "./car.type";
import { TUser } from "./user.type";

export interface TBooking {
  _id: string;
  bookingDate: string;
  returnDate: string;
  startTime: string;
  endTime: string;
  user: TUser;
  car: TCar;
  bookingAddress: string;
  nidOrPassport: string;
  drivingLicense: string;
  status: string;
  phon: string;
  paymentStatus: string;
  totalHours: number;
  totalCost: number;
  createdAt: string;
  updatedAt: string;
  transactionId: string;
}

export interface TUpdateBooking {
  bookingDate: string;
  startTime: string;
  bookingAddress: string;
  nidOrPassport: string;
  drivingLicense: string;
  phone: string;
}
