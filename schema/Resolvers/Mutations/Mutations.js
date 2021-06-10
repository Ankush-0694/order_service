const Order = require("../../../models/Orders");

const addOrder = async (parent, args, context, info) => {
  let newOrder = new Order({
    productName: args.productName,
    productDescription: args.productDescription,
    productPrice: args.productPrice,
    quantity: args.quantity,
    address: args.address,
  });
  console.log("hellos");

  return newOrder.save();
};

module.exports = { addOrder };
