const Order = require("../../../models/Orders");

const orders = () => {
  return Order.find({});
};

module.exports = { orders };
