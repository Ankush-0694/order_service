const { addOrderData, getAllOrdersData } = require("../data/data");

const getAllOrdersLogic = () => {
  return getAllOrdersData();
};

const addOrderLogic = (parent, args, context, info) => {
  let newOrder = {
    productName: args.productName,
    productDescription: args.productDescription,
    productPrice: args.productPrice,
    quantity: args.quantity,
    address: args.addressID,
  };
  return addOrderData(newOrder);
};

module.exports = { getAllOrdersLogic, addOrderLogic };
