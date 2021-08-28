const { requiresRole } = require("../../utils/requireRole");
const { AddressLogic } = require("../logic/logic");

const AddressMutationResolvers = {
  add: (parent, args, context, info) => {
    return AddressLogic.add(parent, args, context, info);
  },

  update: (parent, args, context, info) => {
    return AddressLogic.update(parent, args, context, info);
  },

  delete: (parent, args, context, info) => {
    return AddressLogic.delete(parent, args, context, info);
  },
};

const { add, update } = AddressMutationResolvers;

const AddressMutation = {
  addAddress: requiresRole("customer", add),
  updateAddress: requiresRole("customer", update),
  deleteAddress: requiresRole("customer", AddressMutationResolvers.delete),
};

module.exports = { AddressMutation };
