const Address = require("../../../models/Address");

const getAllAddressData = () => {
  return Address.find({});
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
  addAddressData,
  updateAddressData,
  deleteAddressData,
};
