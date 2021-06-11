const { gql } = require("apollo-server");

const OrderSchema = gql`
  type Order {
    id: ID
    productName: String
    productDescription: String
    productPrice: Int
    quantity: Int
    address: Address
  }

  extend type Query {
    getAllOrders: [Order]
  }

  extend type Mutation {
    addOrder(
      productName: String
      productDescription: String
      productPrice: Int
      quantity: Int
      addressID: ID # here we may only need to address ID as reference to the which address it should have
    ): Order
  }
`;

module.exports = { OrderSchema };
