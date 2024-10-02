import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ServiceWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  serviceName?: StringNullableFilter;
};
