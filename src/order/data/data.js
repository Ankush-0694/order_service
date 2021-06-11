const Order = require("../../../models/Orders");

const getAllOrdersData = async () => {
  const orderToreturn = await Order.find({}).populate("address");
  return orderToreturn;
};

const addOrderData = async (newOrder) => {
  const orderToSave = await new Order(newOrder);
  return orderToSave.save();
};

module.exports = { getAllOrdersData, addOrderData };
