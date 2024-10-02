import { BookingCreateNestedManyWithoutRoomsInput } from "./BookingCreateNestedManyWithoutRoomsInput";

export type RoomCreateInput = {
  bookings?: BookingCreateNestedManyWithoutRoomsInput;
  price?: number | null;
  roomNumber?: string | null;
  status?: "Option1" | null;
  typeField?: "Option1" | null;
};
