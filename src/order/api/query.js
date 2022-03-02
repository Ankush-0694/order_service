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

  getByVendorIdOfProduct: (parent, args, context, info) => {
    return OrderLogic.getByVendorIdOfProduct(parent, args, context, info);
  },

};

const { getAll, getByOrderId, getByCustomerId , getByVendorIdOfProduct } = OrderQueryResolvers;

const OrderQuery = {
  getAllOrders: requiresRole("admin", getAll),
  // getOrderByOrderId: requiresRole("customer", getByOrderId),
  getOrderByOrderId: getByOrderId,

  getOrdersByCustomerId: requiresRole("customer", getByCustomerId),
  getOrdersByVendorIdOfProduct : getByVendorIdOfProduct, 
};

module.exports = { OrderQuery };
