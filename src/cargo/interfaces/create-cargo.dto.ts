import { ApiModelProperty } from '@nestjs/swagger';
export class CreateCargoDto {

  // time and place
  @ApiModelProperty()
  readonly startLoadingDate: Date;

  @ApiModelProperty()
  readonly endLoadingDate: Date;

  @ApiModelProperty()
  readonly dischargeDate: Date;

  @ApiModelProperty()
  readonly loadingPoint: string;

  @ApiModelProperty()
  readonly dischargePoint: string;

  // Type of cargo
  @ApiModelProperty()
  readonly typeCargo: string;

  @ApiModelProperty()
  readonly cargoWeight: number;

  @ApiModelProperty()
  readonly cargoVolume: number;

  @ApiModelProperty()
  readonly typeTransport: string;

  @ApiModelProperty()
  readonly amountTransport: number;

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
}
