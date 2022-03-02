const { requiresRole } = require("../../utils/requireRole");
const { OrderLogic } = require("../logic/logic");

const OrderMutationResolvers = {
  add: (parent, args, context, info) => {
    return OrderLogic.add(parent, args, context, info);
  },
  changeOrderStatus : (parent, args, context, info)=>{
    return OrderLogic.changeOrderStatus(parent, args, context, info);
  }
};

const { add, changeOrderStatus } = OrderMutationResolvers;

const OrderMutation = {
  addOrder: requiresRole("customer", add),
  changeOrderStatus : requiresRole("vendor", changeOrderStatus)
};

module.exports = { OrderMutation };
