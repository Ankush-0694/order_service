const Order = require("../../../models/Orders");

const getAllOrdersData = async () => {
  return await Order.find({});
};

const addOrderData = async (newOrder) => {
  const orderToSave = await new Order(newOrder);
  return orderToSave.save();
};

module.exports = { getAllOrdersData, addOrderData };
