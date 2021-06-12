const {
  addAddressLogic,
  updateAddressLogic,
  deleteAddressLogic,
} = require("../logic/logic");

const addAddress = async (parent, args, context, info) => {
  return addAddressLogic(parent, args, context, info);
};

const updateAddress = async (parent, args, context, info) => {
  return updateAddressLogic(parent, args, context, info);
};

const deleteAddress = async (parent, args, context, info) => {
  return deleteAddressLogic(parent, args, context, info);
};

const AddressMutation = {
  addAddress: addAddress,
  updateAddress: updateAddress,
  deleteAddress: deleteAddress,
};

module.exports = { AddressMutation };
