import { Booking } from "../booking/Booking";

export type Room = {
  bookings?: Array<Booking>;
  createdAt: Date;
  id: string;
  price: number | null;
  roomNumber: string | null;
  status?: "Option1" | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
