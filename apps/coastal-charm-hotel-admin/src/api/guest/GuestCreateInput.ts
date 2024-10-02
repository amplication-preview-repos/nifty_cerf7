import { BookingCreateNestedManyWithoutGuestsInput } from "./BookingCreateNestedManyWithoutGuestsInput";

export type GuestCreateInput = {
  bookings?: BookingCreateNestedManyWithoutGuestsInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
};
