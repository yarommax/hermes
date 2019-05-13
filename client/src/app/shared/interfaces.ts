export interface User {
  email: string;
  username?: string;
  password: string;
}

export interface Transport {
  // time and place
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
}

export interface Cargo {
  startLoadingDate: Date;
  endLoadingDate: Date;
  dischargeDate: Date;
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
}
