const { AddressData } = require("../data/data");

const AddressLogic = {
  /** For Queries */
  getAll: () => {
    return AddressData.getAll();
  },

  getByCustomerId: (parent, args, context, info) => {
    const customerId = context.user.public_id;
    return AddressData.getByCustomerId(customerId);
  },

  /** For Mutations */

  add: (parent, args, context, info) => {
    const {
      fullName,
      phoneNumber,
      pincode,
      state,
      city,
      HouseNo,
      area,
      landmark,
    } = args;

    const customerId = context.user.public_id;

    return AddressData.add(
      customerId,
      fullName,
      phoneNumber,
      pincode,
      state,
      city,
      HouseNo,
      area,
      landmark
    );
  },

  update: (parent, args, context, info) => {
    const addressID = args.addressID;

    const updatedAddress = {
      fullName: args.fullName,
      phoneNumber: args.phoneNumber,
      pincode: args.pincode,
      state: args.state,
      city: args.city,
      HouseNo: args.HouseNo,
      area: args.area,
      landmark: args.landmark,
    };

    /** No need to pass customer id because we never change
     * customer id (and we are updating the data not replacing)  */

    return AddressData.update(addressID, updatedAddress);
  },

  delete: async (parent, args, context, info) => {
    const addressID = args.addressID;
    return AddressData.delete(addressID);
  },
};

module.exports = {
  AddressLogic,
};
