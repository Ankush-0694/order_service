const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
  customerId: String,
  fullName: String,
  phoneNumber: String,
  pincode: String,
  state: String,
  city: String,
  HouseNo: String,
  area: String,
  landmark: String,
});

module.exports = mongoose.model("Address", AddressSchema);
