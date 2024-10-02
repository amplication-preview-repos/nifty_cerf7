/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BookingCreateNestedManyWithoutRoomsInput } from "./BookingCreateNestedManyWithoutRoomsInput";

import {
  ValidateNested,
  IsOptional,
  IsNumber,
  Min,
  Max,
  IsString,
  MaxLength,
  IsEnum,
} from "class-validator";

import { Type } from "class-transformer";
import { EnumRoomStatus } from "./EnumRoomStatus";
import { EnumRoomTypeField } from "./EnumRoomTypeField";

@InputType()
class RoomCreateInput {
  @ApiProperty({
    required: false,
    type: () => BookingCreateNestedManyWithoutRoomsInput,
  })
  @ValidateNested()
  @Type(() => BookingCreateNestedManyWithoutRoomsInput)
  @IsOptional()
  @Field(() => BookingCreateNestedManyWithoutRoomsInput, {
    nullable: true,
  })
  bookings?: BookingCreateNestedManyWithoutRoomsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  roomNumber?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumRoomStatus,
  })
  @IsEnum(EnumRoomStatus)
  @IsOptional()
  @Field(() => EnumRoomStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    enum: EnumRoomTypeField,
  })
  @IsEnum(EnumRoomTypeField)
  @IsOptional()
  @Field(() => EnumRoomTypeField, {
    nullable: true,
  })
  typeField?: "Option1" | null;
}

export { RoomCreateInput as RoomCreateInput };
