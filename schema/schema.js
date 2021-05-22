const { gql } = require("apollo-server");
const Order = require("../models/Orders");

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

const resolvers = {
  Query: {
    orders() {
      return Order.find({});
    },
  },
  Mutation: {
    addOrder(parent, args, context, info) {
      let newOrder = new Order({
        productName: args.productName,
        productDescription: args.productDescription,
        productPrice: args.productPrice,
        quantity: args.quantity,
        address: args.address,
      });
      console.log("hellos");

      return newOrder.save();
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
