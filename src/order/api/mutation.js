const { addOrderLogic } = require("../logic/logic");

const addOrder = async (parent, args, context, info) => {
  return addOrderLogic(parent, args, context, info);
};

const OrderMutation = {
  addOrder: addOrder,
};

module.exports = { OrderMutation };
