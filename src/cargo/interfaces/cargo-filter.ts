export interface CrFilter {
  // time and place
  startLoadingDate?: Date;
  endLoadingDate?: Date;
  loadingPoint?: string;
  dischargePoint?: string;
  typeCargo?: string;
  cargoWeight?: number;
  cargoVolume?: number;
  typeTransport?: string;
  amountTransport?: number;
}
