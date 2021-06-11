const Address = require("../../../models/Address");

const getAllAddressData = () => {
  return Address.find({});
};
const addAddressData = async (newAddress) => {
  const addressToSave = await new Address(newAddress);
  return addressToSave.save();
};
module.exports = { getAllAddressData, addAddressData };
