import { Booking } from "../booking/Booking";

export type Guest = {
  bookings?: Array<Booking>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phoneNumber: string | null;
  updatedAt: Date;
};
