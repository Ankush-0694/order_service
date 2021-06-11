const { addAddressLogic } = require("../logic/logic");

const addAddress = async (parent, args, context, info) => {
  return addAddressLogic(parent, args, context, info);
};

const AddressMutation = {
  addAddress: addAddress,
};

module.exports = { AddressMutation };
