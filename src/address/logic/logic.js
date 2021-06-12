const {
  getAllAddressData,
  addAddressData,
  updateAddressData,
  deleteAddressData,
} = require("../data/data");

const getAllAddressLogic = () => {
  return getAllAddressData();
};

const addAddressLogic = (parent, args, context, info) => {
  const newAddress = {
    fullName: args.fullName,
    phoneNumber: args.phoneNumber,
    pincode: args.pincode,
    state: args.state,
    city: args.city,
    HouseNo: args.HouseNo,
    area: args.area,
    landmark: args.landmark,
  };
  return addAddressData(newAddress);
};

const updateAddressLogic = (parent, args, context, info) => {
  const addressID = args.addressID;
  // console.log(addressID);
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
  return updateAddressData(addressID, updatedAddress);
};

const deleteAddressLogic = async (parent, args, context, info) => {
  const addressID = args.addressID;
  return deleteAddressData(addressID);
};

module.exports = {
  getAllAddressLogic,
  addAddressLogic,
  updateAddressLogic,
  deleteAddressLogic,
};
