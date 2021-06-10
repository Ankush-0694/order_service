const { getAllOrdersLogic } = require("../logic/logic");

const getAllOrders = () => {
  return getAllOrdersLogic();
};

const OrderQuery = {
  getAllOrders: getAllOrders,
};

module.exports = { OrderQuery };
