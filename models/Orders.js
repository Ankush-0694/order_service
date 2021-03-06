const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  customerId: {
    type: String,
  },
  orderedDate: {
    type: Date,
    default: Date.now(),
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
      deliveredDate: {
        type: Date,
      },
      orderStatus: {
        type: String,
        default: "pending",
        enum : ['delivered','cancelled', 'pending', 'returned', 'on the way'],
      },
      quantity: Number,
    },
  ],

  // Pending , shipped , placed, Cancelled

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
