const { requiresRole } = require("../../utils/requireRole");
const { OrderLogic } = require("../logic/logic");

const OrderQueryResolvers = {
  getAll: () => {
    return OrderLogic.getAll();
  },

  getByOrderId: (parent, args, context, info) => {
    return OrderLogic.getByOrderId(parent, args, context, info);
  },
  getByCustomerId: (parent, args, context, info) => {
    return OrderLogic.getByCustomerId(parent, args, context, info);
  },

  getByVendorId: () => {
    return;
  },
};

const { getAll, getByOrderId, getByCustomerId } = OrderQueryResolvers;

const OrderQuery = {
  getAllOrders: requiresRole("admin", getAll),
  getOrderByOrderId: requiresRole("customer", getByOrderId),
  getOrdersByCustomerId: requiresRole("customer", getByCustomerId),
};

module.exports = { OrderQuery };
