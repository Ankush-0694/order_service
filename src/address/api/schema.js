const { gql } = require("apollo-server");

const AddressSchema = gql`
  type Address {
    fullName: String
    phoneNumber: Int
    pincode: Int
    state: String
    city: String
    HouseNo: String
    area: String
    landmark: String
  }

  extend type Query {
    getAllAddress: [Address]
  }

  extend type Mutation {
    addAddress(
      fullName: String
      phoneNumber: Int
      pincode: Int
      state: String
      city: String
      HouseNo: String
      area: String
      landmark: String
    ): Address
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
