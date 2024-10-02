import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { GUEST_TITLE_FIELD } from "./GuestTitle";
import { ROOM_TITLE_FIELD } from "../room/RoomTitle";

export const GuestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="firstName" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="lastName" source="lastName" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Booking"
          target="guestId"
          label="Bookings"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="checkInDate" source="checkInDate" />
            <TextField label="checkOutDate" source="checkOutDate" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Guest" source="guest.id" reference="Guest">
              <TextField source={GUEST_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField label="Room" source="room.id" reference="Room">
              <TextField source={ROOM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="totalPrice" source="totalPrice" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
