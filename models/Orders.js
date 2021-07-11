const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  orderedDate: {
    type: Date,
    default: Date.now(),
  },

  DeliveredDate: {
    type: Date,
    // default: Date.now(),
  },
  totalQuantity: {
    type: Number,
  },
  totalPrice: {
    type: Number,
  },
  productDetailsWithQuantity: [
    {
      productDetails: { type: Schema.Types.ObjectId },
      quantity: Number,
    },
  ],

  // Pending , shipped , placed, Cancelled
  status: {
    type: String,
    default: "Pending",
  },
  deliveryCharge: {
    type: Number,
    default: 0,
  },
  paymentMode: {
    type: String,
    default: "COD",
  },
  address: { type: Schema.Types.ObjectId, ref: "Address" },
});

module.exports = mongoose.model("Order", OrderSchema);

// details of that product using product Service
// And other fields are OrderID  will be mongodb id, Date , Status ( pending or delivered)
// Task to show previous and current orders
