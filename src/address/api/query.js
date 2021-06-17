const { getAllAddressLogic } = require("../logic/logic");

const getAllAddress = () => {
  return getAllAddressLogic();
};

const AddressQuery = {
  getAllAddress: getAllAddress,
};

module.exports = { AddressQuery };
