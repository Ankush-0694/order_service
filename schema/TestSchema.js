const { gql } = require("apollo-server");

const orderData = [
  {
    productName: "One",
    productDescription: "good",
    productPrice: 1000,
    id: 1,
    quantity: 5,
  },
  {
    productName: "Two",
    productDescription: "Bad",
    productPrice: 2000,
    id: 2,
    quantity: 7,
  },
];

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
`;

const resolvers = {
  Query: {
    orders() {
      return orderData;
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
