const { gql } = require("apollo-server");
const Order = require("../models/Orders");

const typeDefs = gql`
  type Order {
    id: ID
    productName: String
    productDescription: String
    productPrice: Int
    quantity: Int
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
      });
      return newOrder.save();
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
