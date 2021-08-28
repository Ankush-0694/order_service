const { OrderData } = require("../data/data");

const OrderLogic = {
  /** For Queries */

  getAll: () => {
    return OrderData.getAll();
  },

  getByOrderId: (parent, args, context, info) => {
    const orderID = args.orderID;
    return OrderData.getByOrderId(orderID);
  },

  getByCustomerId: (parent, args, context, info) => {
    const customerId = context.user.public_id;
    return OrderData.getByCustomerId(customerId);
  },

  /** For Mutations */

  add: (parent, args, context, info) => {
    const {
      totalQuantity,
      totalPrice,
      productDetailsWithQuantity,
      deliveryCharge,
      paymentMode,
      addressID,
    } = args;

    const customerId = context.user.public_id; // passed for every request ( added in context of every service using gateway)

    return OrderData.add(
      customerId,
      totalQuantity,
      totalPrice,
      productDetailsWithQuantity,
      deliveryCharge,
      paymentMode,
      addressID
    );
  },
};

module.exports = { OrderLogic };
