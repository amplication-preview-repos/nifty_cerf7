import { SortOrder } from "../../util/SortOrder";

export type HotelOrderByInput = {
  contact?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
