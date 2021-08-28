const Address = require("../../../models/Address");

const AddressData = {
  /** For Queries */
  getAll: async () => {
    return await Address.find({});
  },

  getByAddressId: async (id) => {
    return await Address.findById(id);
  },

  getByCustomerId: async (customerId) => {
    return await Address.find({ customerId });
  },

  /** For Mutations */

  add: async (
    customerId,
    fullName,
    phoneNumber,
    pincode,
    state,
    city,
    HouseNo,
    area,
    landmark
  ) => {
    const addressToSave = new Address({
      customerId,
      fullName,
      phoneNumber,
      pincode,
      state,
      city,
      HouseNo,
      area,
      landmark,
    });
    return await addressToSave.save();
  },

  update: async (addressID, updatedAddress) => {
    const updatedAddressData = await Address.findOneAndUpdate(
      { _id: addressID },
      { $set: { ...updatedAddress } },
      { new: true }
    );
    return updatedAddressData;
  },

  delete: async (addressID) => {
    try {
      const result = await Address.findByIdAndDelete(addressID);

      return result;
    } catch (error) {
      return ` Error ${error} `;
    }
  },
};

module.exports = {
  AddressData,
};
