import { ApiModelProperty } from '@nestjs/swagger';
export class CreateTransportDto {
  // time and place
  @ApiModelProperty()
  readonly loadingDate: Date;

  @ApiModelProperty()
  readonly dischargeDate: Date;

  @ApiModelProperty()
  readonly loadingPoint: string;

  @ApiModelProperty()
  readonly dischargePoint: string;

    // Type of transport
  @ApiModelProperty()
  readonly typeTransport: string;

  @ApiModelProperty()
  readonly amountTransport: number;

  @ApiModelProperty()
  readonly loadCapacity: number;

    // company contacts
  @ApiModelProperty()
  readonly companyName: string;

  @ApiModelProperty()
  readonly contactPersonName: string;

  @ApiModelProperty()
  readonly contactEmail: string;

  @ApiModelProperty()
  readonly contactSkype: string;

  @ApiModelProperty()
  readonly contactTelephone: string;

  @ApiModelProperty()
  userStamp?: string;

  @ApiModelProperty()
  userId?: string;
}
