import { Schema } from 'mongoose';

// tslint:disable-next-line:variable-name
export const TransportSchema = new Schema({
	// Time and Place
	dateLoading: { type: Date},
	dateDischarge: { type: Date},
	loadingPoint: { type: String },
	dischargePoint: { type: String },

	// Type of transport
	typeTransport: { type: String },
	amountTransport: { type: Number },
		//грузоподъемность
	loadСapacity: { type: Number},

	// Company
	companyName: { type: String },
	contactPersonName: { type: String },
	contactEmail: { type: String },
	contactSkype: { type: String },
	contactTelephone: { type: String },
});
