const Order = require("../../../models/Orders");

const OrderData = {
  /** For Queries */
  getAll: async () => {
    const orderToreturn = await Order.find({}).populate("address");
    return orderToreturn;
  },

  getByOrderId: async (orderID) => {
    const orderToreturn = await Order.findById(orderID).populate("address");
    return orderToreturn;
  },

  getByCustomerId: async (customerId) => {
    const orderToreturn = await Order.find({ customerId }).populate("address");
    return orderToreturn;
  },

  /** For Mutations */

  add: async (
    customerId,
    totalQuantity,
    totalPrice,
    productDetailsWithQuantity,
    deliveryCharge,
    paymentMode,
    addressID
  ) => {
    const orderToSave = new Order({
      customerId,
      totalQuantity,
      totalPrice,
      productDetailsWithQuantity,
      deliveryCharge,
      paymentMode,
      address: addressID,
    });

    let savedOrder = await orderToSave.save(); // can't use populate here, will give error

    return savedOrder.populate("address").execPopulate();
  },
};

module.exports = {
  OrderData,
};
