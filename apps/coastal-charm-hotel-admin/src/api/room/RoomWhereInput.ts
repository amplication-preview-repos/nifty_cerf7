import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RoomWhereInput = {
  bookings?: BookingListRelationFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  roomNumber?: StringNullableFilter;
  status?: "Option1";
  typeField?: "Option1";
};
