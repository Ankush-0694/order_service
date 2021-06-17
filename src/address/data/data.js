const Address = require("../../../models/Address");

const getAllAddressData = () => {
  return Address.find({});
};
const addAddressData = async (newAddress) => {
  const addressToSave = new Address(newAddress);
  return await addressToSave.save();
};
module.exports = { getAllAddressData, addAddressData };
