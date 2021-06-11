const { getAllAddressData, addAddressData } = require("../data/data");

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

module.exports = { getAllAddressLogic, addAddressLogic };
