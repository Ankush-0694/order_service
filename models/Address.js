const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
  fullName: String,
  phoneNumber: Number,
  pincode: Number,
  state: String,
  city: String,
  HouseNo: String,
  area: String,
  landmark: String,
});

module.exports = mongoose.model("Address", AddressSchema);

// 60c1fc9f83a3ce2597dacd9a
