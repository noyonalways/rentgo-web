import { TBooking } from "./booking.type";

export interface TPaymentPayload {
  booking: string;
  paymentMethod: string;
  currency: string;
}

export interface TPayment {
  _id: string;
  amount: number;
  transactionId: string;
  booking: TBooking;
  currency: string;
  paidAt: string;
  paymentMethod: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
