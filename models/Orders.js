const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  // orderedDate: Date.now(),
  // deliveredDate: Date.now(),
  // status: ["Pending, Delivered"], ///enum
  quantity: Number,
  productName: String,
  productDescription: String,
  productPrice: Number,
  address: { type: Schema.Types.ObjectId, ref: "Address" },
  //one to one relationship to the address form
});

module.exports = mongoose.model("Order", OrderSchema);

// details of that product using product Service
// And other fields are OrderID  will be mongodb id, Date , Status ( pending or delivered)
// Task to show previous and current orders
