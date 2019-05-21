import { Schema } from 'mongoose';

// tslint:disable-next-line:variable-name
export const CargoSchema = new Schema({

  // time and place
  startLoadingDate: { type: Date, default: Date.now },
  endLoadingDate: { type: Date, default: Date.now },
  loadingPoint: { type: String },
  dischargePoint: { type: String },

  // Type of cargo
  typeCargo: { type: String },
  cargoWeight: { type: Number },
  cargoVolume: { type: Number },
  typeTransport: { type: String },
  amountTransport: { type: Number },

  // company contacts
  companyName: { type: String },
  contactPersonName: { type: String },
  contactEmail: { type: String },
  contactSkype: { type: String },
  contactTelephone: { type: String },

  timeStamp: { type: Date, default: Date.now },
  userStamp: { type: String },
  userId: {
    ref: 'users',
    type: Schema.Types.ObjectId,
  },
});
