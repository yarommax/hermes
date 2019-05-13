import { Schema } from 'mongoose';
// tslint:disable:indent
// tslint:disable-next-line:variable-name
export const TransportSchema = new Schema({

	// Time and Place
  loadingDate: { type: Date, default: Date.now },
  dischargeDate: { type: Date, default: Date.now },
  loadingPoint: { type: String },
  dischargePoint: { type: String },

	// Type of transport
  typeTransport: { type: String },
  amountTransport: { type: Number },
		// грузоподъемность
  loadCapacity: { type: Number },

	// Company
  companyName: { type: String },
  contactPersonName: { type: String },
  contactEmail: { type: String },
  contactSkype: { type: String },
  contactTelephone: { type: String },
});
