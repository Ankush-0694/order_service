const { getAddressById } = require("../../address/data/data");
const { addOrderData, getAllOrdersData } = require("../data/data");

const getAllOrdersLogic = () => {
  return getAllOrdersData();
};

const addOrderLogic = async (parent, args, context, info) => {
  let newOrder = {
    totalQuantity: args.totalQuantity,
    totalPrice: args.totalPrice,
    productDetailsWithQuantity: args.productDetailsWithQuantity,
    deliveryCharge: args.deliveryCharge,
    paymentMode: args.paymentMode,
    address: args.addressID,
  };
  let savedOrder = await addOrderData(newOrder);

  // fetching address data using id from address module to send
  // address data in response when we addOrder

  const addressID = savedOrder.address;
  let addressData = await getAddressById(addressID);
  savedOrder.address = addressData;

  return savedOrder;
};

module.exports = { getAllOrdersLogic, addOrderLogic };
