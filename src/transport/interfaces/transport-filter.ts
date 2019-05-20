export interface TrFilter {
  // time and place
  loadingDate: Date;
  dischargeDate: Date;
  loadingPoint: string;
  dischargePoint: string;
  typeTransport: string;
  amountTransport: number;
  loadCapacity: number;
}
