import { SortOrder } from "../../util/SortOrder";

export type ServiceOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  serviceName?: SortOrder;
  updatedAt?: SortOrder;
};
