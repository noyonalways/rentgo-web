import { TBooking } from "./booking.type";
import { TUser } from "./user.type";

export interface TPaymentPayload {
  user: string;
  booking: string;
  paymentMethod: string;
  currency: string;
}

export interface TPayment {
  _id: string;
  amount: number;
  transactionId: string;
  booking: TBooking;
  user: TUser;
  currency: string;
  paidAt: string;
  paymentMethod: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
