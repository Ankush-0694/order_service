const Order = require("../../../models/Orders");

const getAllOrdersData = async () => {
  const orderToreturn = await Order.find({}).populate("address");
  return orderToreturn;
};

const addOrderData = async (newOrder) => {
  const orderToSave = new Order(newOrder);

  let savedOrder = await orderToSave.save();

  // Tried to find the address data to return with save address, because only id is sending to mutation response
  // const addressID = savedOrder.address;
  // let addressData = await Address.findById(addressID);

  return savedOrder;
};

module.exports = { getAllOrdersData, addOrderData };
