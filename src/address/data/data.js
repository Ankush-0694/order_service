const Address = require("../../../models/Address");

const getAllAddressData = async () => {
  return await Address.find({});
};

// this function is not used in query instead we are calling from
// order logic to send address data after adding the order
const getAddressById = async (id) => {
  return await Address.findById(id);
};

const addAddressData = async (newAddress) => {
  const addressToSave = new Address(newAddress);
  return await addressToSave.save();
};

const updateAddressData = async (addressID, updatedAddress) => {
  const updatedAddressData = await Address.findOneAndUpdate(
    { _id: addressID },
    { $set: { ...updatedAddress } },
    { new: true }
  );
  return updatedAddressData;
};

const deleteAddressData = async (addressID) => {
  try {
    const result = await Address.findByIdAndDelete(addressID);

    return result;
  } catch (error) {
    return ` Error ${error} `;
  }
};

module.exports = {
  getAllAddressData,
  getAddressById,
  addAddressData,
  updateAddressData,
  deleteAddressData,
};
