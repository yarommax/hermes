import { ApiModelProperty } from "@nestjs/swagger";

export class CreateTransportDto {
	// Time and Place
    @ApiModelProperty()
    readonly dateLoading: Date;

    @ApiModelProperty()
    readonly dateDischarge: Date;

    @ApiModelProperty()
    readonly loadingPoint: String;

    @ApiModelProperty()
    readonly dischargePoint: String;
    
    // Type of transport
    @ApiModelProperty()
    typeTransport: String;
    
    @ApiModelProperty()
    amountTransport: Number;

    @ApiModelProperty()
    loadСapacity: Number;

    //company contacts
    @ApiModelProperty()
    companyName: String;

    @ApiModelProperty()
    contactPersonName: String;
    
    @ApiModelProperty()
    contactEmail: String;

    @ApiModelProperty()
    contactSkype: String;
    
    @ApiModelProperty()
	contactTelephone: String;
}