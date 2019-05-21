import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiModelProperty()
  readonly email: string;

  @ApiModelProperty()
  readonly username: string;

  @ApiModelProperty()
  readonly password: string;

  @ApiModelProperty()
  readonly companyName: string;

  @ApiModelProperty()
  readonly contactPersonName: string;

  @ApiModelProperty()
  readonly contactSkype: string;

  @ApiModelProperty()
  readonly contactTelephone: string;
}
