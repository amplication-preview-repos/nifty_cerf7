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

import { GUEST_TITLE_FIELD } from "../guest/GuestTitle";
import { ROOM_TITLE_FIELD } from "./RoomTitle";

export const RoomShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="price" source="price" />
        <TextField label="roomNumber" source="roomNumber" />
        <TextField label="status" source="status" />
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Booking"
          target="roomId"
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
