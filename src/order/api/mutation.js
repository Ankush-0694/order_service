const { requiresRole } = require("../../utils/requireRole");
const { OrderLogic } = require("../logic/logic");

const OrderMutationResolvers = {
  add: (parent, args, context, info) => {
    return OrderLogic.add(parent, args, context, info);
  },
};

const { add } = OrderMutationResolvers;

const OrderMutation = {
  addOrder: requiresRole("customer", add),
};

module.exports = { OrderMutation };
