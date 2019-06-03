export interface User {
  userId?: string;
  email: string;
  username?: string;
  password?: string;
  companyName?: string;
  contactPersonName?: string;
  contactSkype?: string;
  contactTelephone?: string;
}

export interface Transport {
  // time and place
  _id?: string;
  loadingDate: Date;
  dischargeDate: Date;
  loadingPoint: string;
  dischargePoint: string;

  // Type of transport
  typeTransport: string;
  amountTransport: number;
  loadCapacity: number;

  // company contacts
  companyName: string;
  contactPersonName: string;
  contactEmail: string;
  contactSkype: string;
  contactTelephone: string;

  timeStamp?: string;
  userStamp?: string;
  userId?: string;
}

export interface Cargo {
  _id?: string;
  startLoadingDate: Date;
  endLoadingDate: Date;
  loadingPoint: string;
  dischargePoint: string;

  // Type of cargo
  typeCargo: string;
  cargoWeight: number;
  cargoVolume: number;
  typeTransport: string;
  amountTransport: number;

  // company contacts
  companyName: string;
  contactPersonName: string;
  contactEmail: string;
  contactSkype: string;
  contactTelephone: string;

  timeStamp?: string;
  userStamp?: string;
  userId?: string;
}
