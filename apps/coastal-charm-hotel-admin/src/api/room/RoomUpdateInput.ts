import { BookingUpdateManyWithoutRoomsInput } from "./BookingUpdateManyWithoutRoomsInput";

export type RoomUpdateInput = {
  bookings?: BookingUpdateManyWithoutRoomsInput;
  price?: number | null;
  roomNumber?: string | null;
  status?: "Option1" | null;
  typeField?: "Option1" | null;
};
