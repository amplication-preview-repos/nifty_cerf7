import { BookingUpdateManyWithoutGuestsInput } from "./BookingUpdateManyWithoutGuestsInput";

export type GuestUpdateInput = {
  bookings?: BookingUpdateManyWithoutGuestsInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
};
