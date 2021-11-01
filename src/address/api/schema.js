const { gql } = require("apollo-server");

const AddressSchema = gql`
  type Address {
    id: ID
    customerId: String
    fullName: String
    phoneNumber: String
    pincode: String
    state: String
    city: String
    HouseNo: String
    area: String
    landmark: String
  }

  extend type Query {
    getAllAddress: [Address]
    getAddressesByCustomerId: [Address]
  }

  extend type Mutation {
    addAddress(
      fullName: String
      phoneNumber: String
      pincode: String
      state: String
      city: String
      HouseNo: String
      area: String
      landmark: String
    ): Address

    updateAddress(
      addressID: ID
      fullName: String
      phoneNumber: String
      pincode: String
      state: String
      city: String
      HouseNo: String
      area: String
      landmark: String
    ): Address

    deleteAddress(addressID: ID): Address
  }
`;

module.exports = { AddressSchema };

// # this input is not used in anywhere but
//   # for referernce
//   input AddressInput {
//     fullName: String
//     phoneNumber: Int
//     pincode: Int
//     state: String
//     city: String
//     HouseNo: String
//     area: String
//     landmark: String
//   }
