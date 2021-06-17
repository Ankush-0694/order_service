const Order = require("../../../models/Orders");

const getAllOrdersData = async () => {
  const orderToreturn = await Order.find({}).populate("address");
  return orderToreturn;
};

const addOrderData = async (newOrder) => {
  const orderToSave = new Order(newOrder);
  return await orderToSave.save();
};

module.exports = { getAllOrdersData, addOrderData };
