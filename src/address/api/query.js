const { requiresRole } = require("../../utils/requireRole");
const { AddressLogic } = require("../logic/logic");

const AddressQueryResolvers = {
  getAll: () => {
    return AddressLogic.getAll();
  },

  getByCustomerId: (parent, args, context, info) => {
    return AddressLogic.getByCustomerId(parent, args, context, info);
  },
};

const { getAll, getByCustomerId } = AddressQueryResolvers;

const AddressQuery = {
  getAllAddress: requiresRole("admin", getAll),
  getAddressesByCustomerId: requiresRole("customer", getByCustomerId),
};

module.exports = { AddressQuery };
