const { getAllOrdersLogic, getOrderByIdLogic } = require("../logic/logic");

const getAllOrders = () => {
  return getAllOrdersLogic();
};

const getOrderById = (parent, args, context, info) => {
  return getOrderByIdLogic(parent, args, context, info);
};

const OrderQuery = {
  getAllOrders: getAllOrders,
  getOrderById: getOrderById,
};

module.exports = { OrderQuery };
