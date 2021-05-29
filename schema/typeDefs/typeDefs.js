const { gql } = require("apollo-server");

const typeDefs = gql`
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

  input AddressInput {
    fullName: String
    phoneNumber: Int
    pincode: Int
    state: String
    city: String
    HouseNo: String
    area: String
    landmark: String
  }

  type Order {
    id: ID
    productName: String
    productDescription: String
    productPrice: Int
    quantity: Int
    address: Address
  }

  type Query {
    orders: [Order]
  }
  type Mutation {
    addOrder(
      productName: String
      productDescription: String
      productPrice: Int
      quantity: Int
      address: AddressInput
    ): Order
  }
`;

module.exports = { typeDefs };
