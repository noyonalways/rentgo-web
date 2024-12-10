import { TCar } from "./car.type";
import { TUser } from "./user.type";

export type TBookingStatus = "pending" | "approved" | "cancelled" | "completed";

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
  status: TBookingStatus;
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
